#![cfg(loom)]

use loom::thread;
use std::mem::drop;

use interchange::{Channel, Requester, Responder};
#[allow(deprecated)]
use std::sync::atomic::{
    AtomicBool,
    Ordering::{Acquire, Release},
    ATOMIC_BOOL_INIT,
};

#[allow(deprecated)]
static BRANCHES_USED: [AtomicBool; 15] = [ATOMIC_BOOL_INIT; 15];

#[test]
fn loom_interrupt() {
    loom::model(|| {
        // thread closures must be 'static
        let channel: &'static mut _ = Box::leak(Box::new(Channel::new()));
        let dropper = unsafe { Box::from_raw(channel as _) };

        let channel: &'static _ = channel;
        let (rq, rp) = channel.split().unwrap();
        let handle1 = thread::spawn(move || requester_thread(rq));
        let handle2 = thread::spawn(move || responder_thread(rp));
        let handle3 = thread::spawn(move || interrupt_thread(channel));
        let res1 = handle1.join();
        let res2 = handle2.join();
        let res3 = handle3.join();

        // Avoid memory leak
        drop(dropper);

        res1.unwrap();
        res2.unwrap();
        res3.unwrap();
    });

    // Verify that the model explored the expected branches
    for b in &BRANCHES_USED {
        assert!(b.load(Acquire));
    }
}

fn requester_thread(mut requester: Requester<'static, u64, u64>) -> Option<()> {
    requester.request(53).unwrap();
    requester
        .with_response(|r| {
            BRANCHES_USED[0].store(true, Release);
            assert_eq!(*r, 63)
        })
        .ok()
        .or_else(|| {
            BRANCHES_USED[1].store(true, Release);
            None
        })?;
    requester.with_response(|r| assert_eq!(*r, 63)).unwrap();
    requester.take_response().unwrap();
    requester.with_request_mut(|r| *r = 51).unwrap();
    requester.send_request().unwrap();
    thread::yield_now();
    BRANCHES_USED[2].store(true, Release);
    None
}

fn responder_thread(mut responder: Responder<'static, u64, u64>) -> Option<()> {
    let req = responder.take_request().or_else(|| {
        BRANCHES_USED[3].store(true, Release);
        None
    })?;
    assert_eq!(req, 53);
    match responder.respond(req + 10) {
        Ok(_) => BRANCHES_USED[4].store(true, Release),
        Err(_) => {
            BRANCHES_USED[5].store(true, Release);
            return None;
        }
    }
    thread::yield_now();
    responder
        .with_request(|r| {
            BRANCHES_USED[6].store(true, Release);
            assert_eq!(*r, 51)
        })
        .map(|_| assert!(responder.with_request(|_| {}).is_err()))
        .or_else(|_| {
            BRANCHES_USED[7].store(true, Release);
            responder.acknowledge_cancel()
        })
        .ok()?;
    responder
        .with_response_mut(|r| {
            BRANCHES_USED[8].store(true, Release);
            *r = 79
        })
        .ok()
        .or_else(|| {
            BRANCHES_USED[9].store(true, Release);
            None
        })?;
    match responder.send_response() {
        Ok(_) => BRANCHES_USED[10].store(true, Release),
        Err(_) => {
            BRANCHES_USED[11].store(true, Release);
            return None;
        }
    }
    BRANCHES_USED[12].store(true, Release);
    None
}

fn interrupt_thread(channel: &'static Channel<u64, u64>) {
    if channel.interrupt() {
        BRANCHES_USED[13].store(true, Release);
    } else {
        BRANCHES_USED[14].store(true, Release);
    }
}

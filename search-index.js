var searchIndex = JSON.parse('{\
"interchange":{"doc":"Implement a somewhat convenient and somewhat efficient way …","t":[13,13,13,3,3,13,3,13,3,13,3,4,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,14,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11],"n":["BuildingRequest","BuildingResponse","Canceled","Channel","Error","Idle","Interchange","Requested","Requester","Responded","Responder","State","acknowledge_cancel","borrow","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","cancel","claim","clone","clone","default","default","drop","drop","eq","eq","fmt","fmt","from","from","from","from","from","from","from","interchange","into","into","into","into","into","into","is_canceled","new","new","request","request","request_mut","requester","respond","responder","response","response","send_request","send_response","split","state","state","take_request","take_response","try_from","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","type_id","type_id","unclaimed_clients","with_request","with_request_mut","with_response","with_response_mut"],"q":["interchange","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"d":["The requester is building a request, using the …","The responder is building a response, using the …","The requester canceled the request. Responder needs to …","Channel used for Request/Response mechanism.","","The requester may send a new request.","Set of <code>N</code> channels","The request is pending either processing by responder or …","Requester end of a channel","The responder sent a response.","Responder end of a channel","State of the RPC interchange","","","","","","","","","","","","","","Attempt to cancel a request.","Claim one of the channels of the interchange. Returns None …","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","","Returns the argument unchanged.","Create a Interchange in a <code>const</code> context","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","Create a new Interchange","Send a request to the responder.","If there is a request waiting, obtain a reference to it","Initialize a request with its default values and and …","Obtain the requester end of the channel if it hasn’t …","Respond to a request.","Obtain the responder end of the channel if it hasn’t …","If there is a response waiting, obtain a reference to it","Initialize a response with its default values and and …","Send a request that was already placed in the channel …","Send a response that was already placed in the channel …","Obtain both the requester and responder ends of the channel","Current state of the channel.","Current state of the channel.","If there is a request waiting, take a reference to it out","Look for a response. If the responder has sent a response, …","","","","","","","","","","","","","","","","","","","Number of clients remaining to claim","If there is a request waiting, perform an operation with a …","Initialize a request with its default values and mutates …","If there is a request waiting, perform an operation with a …","Initialize a response with its default values and mutates …"],"i":[1,1,1,0,0,1,0,1,0,1,0,0,2,3,4,2,5,6,1,3,4,2,5,6,1,4,5,6,1,3,5,4,2,1,1,6,1,3,4,2,5,6,1,1,0,3,4,2,5,6,1,2,3,5,4,2,4,3,2,3,4,2,4,2,3,4,2,2,4,3,4,2,5,6,1,3,4,2,5,6,1,3,4,2,5,6,1,5,2,4,4,2],"f":[null,null,null,null,null,null,null,null,null,null,null,null,[[["responder",3]],["result",4,[["error",3]]]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["requester",3]],["result",4,[["option",4],["error",3]]]],[[["interchange",3]],["option",4]],[[["error",3]],["error",3]],[[["state",4]],["state",4]],[[],["channel",3]],[[],["interchange",3]],[[["requester",3]]],[[["responder",3]]],[[["state",4],["state",4]],["bool",0]],[[["state",4],["u8",0]],["bool",0]],[[["error",3],["formatter",3]],["result",6]],[[["state",4],["formatter",3]],["result",6]],[[]],[[]],[[]],[[]],[[]],[[["u8",0]],["state",4]],[[]],null,[[]],[[]],[[]],[[]],[[]],[[]],[[["responder",3]],["bool",0]],[[],["channel",3]],[[],["interchange",3]],[[["requester",3],["",0]],["result",4,[["error",3]]]],[[["responder",3]],["result",4,[["error",3]]]],[[["requester",3]],["result",4,[["error",3]]]],[[["channel",3]],["option",4,[["requester",3]]]],[[["responder",3],["",0]],["result",4,[["error",3]]]],[[["channel",3]],["option",4,[["responder",3]]]],[[["requester",3]],["result",4,[["error",3]]]],[[["responder",3]],["result",4,[["error",3]]]],[[["requester",3]],["result",4,[["error",3]]]],[[["responder",3]],["result",4,[["error",3]]]],[[["channel",3]],["option",4]],[[["requester",3]],["state",4]],[[["responder",3]],["state",4]],[[["responder",3]],["option",4]],[[["requester",3]],["option",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],[[["interchange",3]],["usize",0]],[[["responder",3],["fnonce",8]],["result",4,[["error",3]]]],[[["requester",3],["fnonce",8]],["result",4,[["error",3]]]],[[["requester",3],["fnonce",8]],["result",4,[["error",3]]]],[[["responder",3],["fnonce",8]],["result",4,[["error",3]]]]],"p":[[4,"State"],[3,"Responder"],[3,"Channel"],[3,"Requester"],[3,"Interchange"],[3,"Error"]]}\
}');
if (typeof window !== 'undefined' && window.initSearch) {window.initSearch(searchIndex)};
if (typeof exports !== 'undefined') {exports.searchIndex = searchIndex};
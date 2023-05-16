.PHONY= test, clippy

test:
	cargo t
	RUSTFLAGS='--cfg loom' cargo t --test loom
	RUSTFLAGS='--cfg loom' cargo t --test loom-interrupt

clippy:
	cargo clippy --all-targets --all-features
	RUSTFLAGS='--cfg loom' cargo clippy --all-targets --all-features

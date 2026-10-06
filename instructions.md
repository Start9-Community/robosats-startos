# RoboSats

## Documentation

- [RoboSats upstream repository](https://github.com/RoboSats/robosats) — the upstream project source and README.

## What you get on StartOS

- The **self-hosted RoboSats client** exposed as the **Web UI** interface — your private front-end to the RoboSats P2P Bitcoin exchange network.
- All coordinator traffic is routed through Tor automatically; you do not configure a SOCKS proxy yourself.
- Your robot token and client settings stay in your browser. StartOS backups do not include your robot token; save it separately.

This package runs the **client**, not a coordinator. Trades clear against the public RoboSats coordinators you select inside the web UI.

## Getting set up

1. Install [Tor](https://github.com/Start9Labs/tor-startos) first — it is a required dependency for routing RoboSats traffic.
2. Start RoboSats and open the **Web UI** interface.
3. On first launch the client generates a **robot token**. Save this token somewhere safe — it is your identity. Anyone with the token can act as you; losing it means losing access to any active orders and to your reputation.

## Upgrading from StartOS 0.3.5

The old network interface is removed. If you added a domain or .onion address to it, add an address to the **Web UI** interface instead.

## Using RoboSats

### Web UI

Open the **Web UI** interface to access the full client. From there you can:

- Generate or restore a robot identity using a token.
- Pick a coordinator from the order book.
- Create or take orders, paying and receiving sats over Lightning using an external Lightning wallet.

You will need an external Lightning wallet to fund escrow and to receive payouts — RoboSats does not custody funds and does not run a wallet for you.

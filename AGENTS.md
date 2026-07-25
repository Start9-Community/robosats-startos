# AGENTS.md

This is a StartOS service-package repository — it builds a `.s9pk` for StartOS.

Develop it inside a StartOS packaging workspace created by `start-cli s9pk init-workspace`,
which provides the packaging guide and agent context one level up. If you're reading this in a
bare clone with no workspace, the full guide is at <https://docs.start9.com/packaging>.

Work this package's `TODO.md` from top to bottom. Keep `README.md` (architecture, for developers and LLMs) and `instructions.md` (end-user docs) in sync with your changes.

## This repo

- **Package id is `robosats`.** A single UI daemon (`primary`) running the RoboSats web client, with a hard dependency on `tor` (`kind: 'running'`) for coordinator connectivity — the daemon's `TOR_PROXY_IP`/`TOR_PROXY_PORT` env points at tor's SOCKS proxy, resolved reactively over the LXC bridge via `sdk.host.getBridgeAddress` (`{ hostId: socksHostId, internalPort: socksPort, fallbackPort: socksPort }` from `tor-startos/startos/utils`, chained `.const()`). The `fallbackPort` keeps the address constant, so main never restarts on tor churn. Exports one `ui` interface (id `ui`) on the `ui-multi` host at port 12596; the web health check hits that interface's own LXC-bridge URL at `/selfhosted`.

## Inspecting a running install

To run a command inside the service's container (read its generated config, grep app logs), use `start-cli package attach robosats -n robosats-sub -- <cmd>`. Select the subcontainer by **name** with `-n` (the name passed to `SubContainer.of` in `main.ts` — here `robosats-sub`) or by image with `-i`. Note: `-s/--subcontainer` matches the internal **Guid**, not the name, so passing a name to `-s` fails with "no matching subcontainers".

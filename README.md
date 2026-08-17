<p align="center">
  <img src="icon.png" alt="Robosats Logo" width="21%">
</p>

# Robosats on StartOS

> Everything not listed in this document should behave the same as upstream
> Robosats. If a feature, setting, or behavior is not mentioned here, the
> upstream documentation is accurate and fully applicable — see the
> Documentation section of `instructions.md` for links.

[Robosats](https://github.com/Reckless-Satoshi/robosats) is a peer-to-peer Bitcoin exchange over Lightning, where trades are escrowed by a coordinator and everything happens over Tor. This package runs the **client**, not a coordinator: your own copy of the interface, connecting out to the coordinators you choose.

- **Upstream repo:** <https://github.com/Reckless-Satoshi/robosats>
- **Wrapper repo:** <https://github.com/Start9-Community/robosats-startos>

---

## Table of Contents

- [Image and Container Runtime](#image-and-container-runtime)
- [Volume and Data Layout](#volume-and-data-layout)
- [File Models](#file-models)
- [Dependencies](#dependencies)
- [Network Access and Interfaces](#network-access-and-interfaces)
- [Installation and First-Run Flow](#installation-and-first-run-flow)
- [Actions](#actions)
- [Tasks](#tasks)
- [Health Checks](#health-checks)
- [Backups and Restore](#backups-and-restore)
- [Limitations and Differences](#limitations-and-differences)
- [Quick Reference for AI Consumers](#quick-reference-for-ai-consumers)

---

## Image and Container Runtime

One upstream image, **pinned by digest** as well as by tag.

| Property      | Value                                     |
| ------------- | ----------------------------------------- |
| Image         | `recksato/robosats-client`, digest-pinned |
| Architectures | x86_64, aarch64                           |
| Command       | The image's own entrypoint                |

| Subcontainer   | Purpose                                  |
| -------------- | ---------------------------------------- |
| `robosats-sub` | The only daemon — the one to `attach` to |

**This is the self-hosted client image**, the one upstream publishes for people who want to run the front end themselves rather than load someone else's copy. Running it locally means the interface you trade through is served from your own server.

## Volume and Data Layout

One volume.

| Volume | Mount Point | Purpose                      |
| ------ | ----------- | ---------------------------- |
| `main` | `/root`     | Whatever the client persists |

**There is very little here.** Robosats' client is a front end: orders, escrow, and settlement live with the coordinator and on Lightning, and your identity is a token you hold in the browser. Nothing on this volume is a wallet or a key.

## File Models

**None.** The package manages no configuration file. The only settings it supplies are two environment values pointing the client at Tor, and everything else — coordinators, language, appearance — is chosen inside the interface and kept by the browser.

## Dependencies

One, and it is required.

| Dependency | Required | Health checks required | Why                             |
| ---------- | -------- | ---------------------- | ------------------------------- |
| Tor        | Yes      | `tor`                  | Coordinators are onion services |

**Tor is not optional here, and that is upstream's design rather than a packaging choice.** Robosats coordinators are reachable as onion services; without Tor the client has nowhere to connect.

**The SOCKS address is resolved with a fallback**, so it stays constant whether Tor is installed, updated, or removed. That is deliberate: installing or restarting Tor never restarts Robosats, and it is split into an address and a port because the client takes them as two separate values.

## Network Access and Interfaces

One interface.

| Interface | Id   | Type | Port  | Description         |
| --------- | ---- | ---- | ----- | ------------------- |
| Web UI    | `ui` | ui   | 12596 | The Robosats client |

Bound on the `ui-multi` MultiHost over HTTP and not masked.

**There is no login.** Robosats has no server-side account — your robot identity is a token generated in the browser — so anyone who can reach this address gets the client, and whether they get _your_ trades depends on whether they have your token.

All outbound traffic to coordinators goes through Tor. The client makes no direct clearnet connections to them.

## Installation and First-Run Flow

Install does nothing: no seeding, no task, no credential.

**Tor must be installed and healthy** before the service will start — it is a required dependency with its own health check.

Once running, open the interface and the client generates a robot token for you. **Save that token**: it is the only way back to your robot and your orders, it is not stored on the server, and nobody can recover it for you.

Coordinators are selected inside the interface. The client ships knowing the well-known ones and connects to whichever you pick.

## Actions

**None.** The package ships an empty action set — everything Robosats does is configured inside its own interface.

## Tasks

None. This package raises no tasks, so the service is never held on a prompt and its ordinary controls are always available.

## Health Checks

One check, on the only daemon.

| Check     | Displayed as    | Method                                |
| --------- | --------------- | ------------------------------------- |
| `primary` | "Web Interface" | The client's self-hosted page answers |

**It fetches a real page over the service's own bridge address**, rather than probing the port — so it reports that the client is actually serving, and it survives the address changing without depending on name resolution between containers.

It says nothing about coordinators. A coordinator that is down, or a Tor circuit that will not build, shows a green check and an error inside the interface.

## Backups and Restore

The `main` volume is copied wholesale — `sdk.Backups.ofVolumes('main')`.

**There is nothing valuable in it.** Your robot token lives in the browser, your funds are in Lightning, and your orders are with the coordinator — a backup here restores a client, not an identity or a balance.

**Losing your robot token is not recoverable from this backup**, or from anywhere else. That is a property of Robosats, not of the packaging.

## Limitations and Differences

1. **This is the client, not a coordinator.** It does not run an exchange; it connects to ones that do.
2. **Tor is required.** Without it there is nothing to connect to.
3. **No login and no server-side account.** Your robot token is held by your browser and is unrecoverable if lost.
4. **The backup restores nothing that matters** — no identity, no funds, no orders.
5. **No StartOS-side configuration at all** — no actions, no file models.
6. **Trades are escrowed by the coordinator you choose**, which is a trust decision made in the interface, not here.

---

## Quick Reference for AI Consumers

```yaml
package_id: robosats
image: recksato/robosats-client # digest-pinned as well as tagged
architectures:
  - x86_64
  - aarch64
subcontainers:
  - robosats-sub
volumes:
  main: /root # very little state; no keys, no wallet
file_models: []
startos_managed_env_vars:
  - TOR_PROXY_IP # split from the resolved bridge address
  - TOR_PROXY_PORT
dependencies:
  - tor # required, kind: running, healthChecks: [tor]
interfaces:
  ui: { type: ui, port: 12596 } # no login; the robot token lives in the browser
actions: []
tasks: []
health_checks:
  - primary # checkWebUrl against the service's own bridge address + /selfhosted
```

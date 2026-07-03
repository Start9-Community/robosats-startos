<p align="center">
  <img src="icon.svg" alt="RoboSats Logo" width="21%">
</p>

# RoboSats on StartOS

> **Upstream docs:** <https://learn.robosats.com/>
>
> Everything not listed in this document should behave the same as upstream
> RoboSats. If a feature, setting, or behavior is not mentioned
> here, the upstream documentation is accurate and fully applicable.

[RoboSats](https://github.com/RoboSats/robosats) is a peer-to-peer Bitcoin exchange over Lightning. This package runs the **self-hosted client**, not a coordinator. The client connects to RoboSats coordinators over Tor to facilitate P2P Bitcoin trades.

---

## Table of Contents

- [Image and Container Runtime](#image-and-container-runtime)
- [Volume and Data Layout](#volume-and-data-layout)
- [Installation and First-Run Flow](#installation-and-first-run-flow)
- [Configuration Management](#configuration-management)
- [Network Access and Interfaces](#network-access-and-interfaces)
- [Actions (StartOS UI)](#actions-startos-ui)
- [Backups and Restore](#backups-and-restore)
- [Health Checks](#health-checks)
- [Dependencies](#dependencies)
- [Limitations and Differences](#limitations-and-differences)
- [What Is Unchanged from Upstream](#what-is-unchanged-from-upstream)
- [Contributing](#contributing)
- [Quick Reference for AI Consumers](#quick-reference-for-ai-consumers)

---

## Image and Container Runtime

| Property | Value |
|----------|-------|
| Image | `recksato/robosats-client` |
| Architectures | x86_64, aarch64 |
| Entrypoint | Default upstream entrypoint |

---

## Volume and Data Layout

| Volume | Mount Point | Purpose |
|--------|-------------|---------|
| `main` | `/root` | Client data, robot tokens |

---

## Installation and First-Run Flow

| Step | Upstream | StartOS |
|------|----------|---------|
| Installation | Docker or hosted client | Install from marketplace or sideload `.s9pk` |
| Tor setup | Manual Tor proxy configuration | Auto-configured via Tor dependency |
| First use | Open web UI, generate robot | Same — open web UI and generate robot |

No setup wizard or credentials needed. The client is ready to use immediately after install.

---

## Configuration Management

### Auto-Configured by StartOS

| Setting | Value | Purpose |
|---------|-------|---------|
| `TOR_PROXY_IP` | Tor container IP | Tor SOCKS proxy address |
| `TOR_PROXY_PORT` | `9050` | Tor SOCKS proxy port |

### User-Configurable Settings

All configuration is done through the RoboSats web interface:
- Robot identity generation
- Order creation and management
- Coordinator selection

---

## Network Access and Interfaces

| Interface | Port | Protocol | Type | Description |
|-----------|------|----------|------|-------------|
| Web UI | 12596 | HTTP | ui | RoboSats client interface |

---

## Actions (StartOS UI)

None. All interaction is through the web interface.

---

## Backups and Restore

**Included in backup:**

- `main` volume — robot tokens and client state

**Restore behavior:**

- All data is restored
- No reconfiguration needed

**Important:** Your robot token is your identity. Back it up to recover active orders.

---

## Health Checks

| Check | Display | Method | Messages |
|-------|---------|--------|----------|
| Web Interface | "Web Interface" | HTTP check (`/selfhosted`) | "The web interface is ready" / "The web interface is not ready" |

---

## Dependencies

| Property | Value |
|----------|-------|
| **Service** | Tor (`tor`) |
| **Required** | Yes |
| **Version constraint** | `>=0.4.9.5` |
| **Health checks** | `tor` must pass |
| **Mounted volumes** | None |
| **Purpose** | Private connections to RoboSats coordinators |

All coordinator communication happens over Tor for privacy.

---

## Limitations and Differences

1. **Client only** — This is the web client, not a coordinator; you connect to external coordinators.
2. **Requires Lightning wallet** — Need an external Lightning wallet to send/receive payments.
3. **Tor latency** — All traffic routed through Tor may be slower than clearnet.
4. **Coordinator trust** — Must trust coordinators for escrow; client doesn't run its own.

---

## What Is Unchanged from Upstream

- Full RoboSats client functionality
- Robot identity system
- Order book access
- Lightning escrow trades
- Multi-coordinator support
- Privacy features (Tor-only, no KYC)

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for build instructions and development workflow.

---

## Quick Reference for AI Consumers

```yaml
package_id: robosats
image: recksato/robosats-client
architectures:
  - x86_64
  - aarch64
volumes:
  main: /root
ports:
  ui: 12596
dependencies:
  - tor
startos_managed_env_vars:
  - TOR_PROXY_IP
  - TOR_PROXY_PORT
actions: none
```

# Updating the upstream version

RoboSats ships the prebuilt `recksato/robosats-client` image directly — the package does not build its own client. Upstream tags carry an `-alpha` suffix (e.g. `v0.8.4-alpha`).

> [!IMPORTANT]
> **Do not bump to `v0.8.5-alpha`.** It cannot reach the current coordinators, and upstream withdrew it: there is no 0.8.5 GitHub _release_. The package shipped it twice by accident (`0.8.5:1`, then `0.8.5:0`–`0.8.5:3` after the start-sdk 2.0 migration) and was rolled back both times. `0.8.4-alpha` is the newest version upstream has actually released.

## Determining the upstream version

Go by the GitHub **release**, not the Docker Hub tag list. Docker Hub carries tags upstream never released, `v0.8.5-alpha` among them, so "newest tag on Docker Hub" is how the withdrawn version got picked up.

```
gh release view -R RoboSats/robosats --json tagName -q .tagName
```

Then confirm the matching client image exists on [`recksato/robosats-client`](https://hub.docker.com/r/recksato/robosats-client) and read its digest:

```
curl -fsSL "https://hub.docker.com/v2/repositories/recksato/robosats-client/tags/v<version>-alpha" | jq -r .digest
```

## Applying the bump

Set `images.robosats.source.dockerTag` in `startos/manifest/index.ts` to `recksato/robosats-client:v<version>-alpha@sha256:<digest>`. That is the only place the image is named.

**Keep the `@sha256:` digest.** Upstream force-moves these tags — `v0.8.5-alpha` was re-cut in July 2026 onto a commit 142 ahead of where it had pointed in January, so the same tag string silently yields different clients over time. The digest is the manifest list (it covers both `x86_64` and `aarch64`); pinning it is what makes a rebuild reproduce the client that was tested.

## Version graph

The current version sits _below_ the withdrawn `0.8.5:*` revisions in ExVer order, so moving onto it is a downgrade. It needs no special handling: `0.8.5:3` shipped with `migrations: {}`, so its `down` is undefined rather than `IMPOSSIBLE`, and its own graph walks a box back down to `0.8.4:4`, from which the current version's `up` takes over. Boxes on `0.8.5:0`–`0.8.5:2` — alpha only, never promoted — fall outside `canMigrateFrom` and are not offered the update; reinstall those.

Note the contrast with the May 2026 rollback, which _did_ have to declare the pulled version in `other`: the `0.8.5:1` shipped then set `down: IMPOSSIBLE`, leaving the installed package no way back.

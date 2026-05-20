# Updating the upstream version

RoboSats ships the prebuilt `recksato/robosats-client` image directly — the package does not build its own client. Upstream tags carry an `-alpha` suffix (e.g. `v0.8.5-alpha`). The Docker Hub tag tracks the [RoboSats/robosats](https://github.com/RoboSats/robosats) GitHub release of the same version.

## Determining the upstream version

- **RoboSats** ([RoboSats/robosats](https://github.com/RoboSats/robosats)) — latest GitHub release:

  ```
  gh release view -R RoboSats/robosats --json tagName -q .tagName
  ```

  Confirm the matching client image has been published to [`recksato/robosats-client`](https://hub.docker.com/r/recksato/robosats-client) on Docker Hub:

  ```
  curl -fsSL "https://hub.docker.com/v2/repositories/recksato/robosats-client/tags?page_size=20&ordering=last_updated" | jq -r '.results[].name'
  ```

  The pinned tag lives in `startos/manifest/index.ts` (`images.robosats.source.dockerTag`) and in `Dockerfile` (the `FROM` line).

## Applying the bump

- `startos/manifest/index.ts` — set `images.robosats.source.dockerTag` to `recksato/robosats-client:v<new version>-alpha`.
- `Dockerfile` — set the `FROM` line to `recksato/robosats-client:v<new version>-alpha`.

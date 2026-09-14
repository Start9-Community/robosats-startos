# Updating the upstream version

RoboSats ships the prebuilt `recksato/robosats-client` image directly — the package does not build its own client. Upstream tags carry an `-alpha` suffix (e.g. `v0.8.7-alpha`).

## Determining the upstream version

Go by the GitHub **release**, not the Docker Hub tag list. Docker Hub carries tags upstream never released, so "newest tag on Docker Hub" is not a reliable signal.

```
gh release view -R RoboSats/robosats --json tagName -q .tagName
```

Then confirm the matching client image exists on [`recksato/robosats-client`](https://hub.docker.com/r/recksato/robosats-client) and read its manifest-list digest (the top-level `digest` field, which covers both architectures):

```
curl -fsSL "https://hub.docker.com/v2/repositories/recksato/robosats-client/tags/v<version>-alpha" | jq -r .digest
```

## Applying the bump

Set `images.robosats.source.dockerTag` in `startos/manifest/index.ts` to `recksato/robosats-client:v<version>-alpha@sha256:<digest>`. That is the only place the image is named.

**Keep the `@sha256:` digest.** Upstream has force-moved tags in the past — the same tag string can silently yield a different client over time. The digest is the manifest list (covers both `x86_64` and `aarch64`); pinning it makes a rebuild reproduce exactly the client that was tested.

Then edit `startos/versions/current.ts` in place: the new version string (`<version>:0`) and release notes in all five languages. Don't spin the outgoing version off into its own file and don't touch `startos/versions/index.ts` — the outgoing version carries no migration, so it earns no node in the graph.

## Version graph

Only a version that introduced a migration gets a file under `startos/versions/` and an entry in `other`; that is `0.8.4:4` alone, whose `up` does work. Every other version, released or not, is covered by the range vertex the graph synthesizes beneath `current`, so a box on any of them updates in one hop. The full rule is [`versions.md` § When to Create a New Version File](https://docs.start9.com/packaging/versions.html#when-to-create-a-new-version-file).

---
layout: page
title: Version Policy
---

ParchmentMC maintains a version policy to specify what versions of Minecraft are prioritized by the ParchmentMC team
for actively reviewing contributions.

Due to the technical and design requirements of the toolchain, Parchment only supports versions of Minecraft which have
published obfuscation logs.

Each major version or release of Minecraft which Parchment maintains a mapping set for will have one branch. All minor
versions associated with that major versions are included into that one branch. Only the latest minor version of each
major release will be supported.

The two latest major releases will be the actively reviewed versions, and are the recommended targets for contributions.
While contributions to older major versions will not be rejected, they will be lower in priority for review.

If it is known that the latest minor version of the latest major release has major game-breaking bugs and there is a
hotfix version in preparation, the mappings team may choose to skip that minor version in favor of waiting for the
hotfix version.

When the mappings team is satisfied as to the (full or majority) completion of the mappings for the latest minor version
of the latest major release, they may designate another recommended target for contributions.

## Snapshots

Due to the nature of snapshot versions being a snapshot of the development of Minecraft and therefore being inherently
unstable, the ParchmentMC team is not yet comfortable to the mapping of snapshot versions, as efforts to map a snapshot
version may be invalidated by the next snapshot.

Additionally, the team feels that mapping efforts should be focused on the latest released version, as that is the
version most likely in use by the end consumers of the Parchment mapping data. As stated above, if it ever passes that
the mappings team feels that the latest release has been mapped fully, they may designate another target for focusing
the current mapping efforts, such as (possibly) snapshot versions.

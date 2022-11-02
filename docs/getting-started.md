---
layout: page
title: Getting Started
---

<style>

.version u {
    font-style: italic;
}

.version u::before {
    content: "<";
}

.version u::after {
    content: ">";
}

</style>

## Choosing a version

ParchmentMC provides three categories of exports for Parchment mappings, as detailed on [our site][exports-info]: **release** exports, **nightly** exports, and **bleeding edge** exports. The recommendation is to use release exports, which are represented as dated non-snapshot published artifacts on our Maven repository.

To find the latest version of the release or nightly exports for a particular supported Minecraft version, visit the README file of the branch for that Minecraft version and look at the version badges affixed to the top of the file. For example, Minecraft 1.17 (and all its minor versions) is located at the [`versions/1.17.x`][1.17-branch] branch.

For convenience, the following is a table containing the version badges for the latest versions of the release exports. Note that the latest versions of the release exports for each Minecraft version are likely to coincide as they are regularly published on the same day.

|   Version  | Badge |
|:----------:|-------|
| **1.19.2** | ![Latest release version badge for 1.19.2](https://img.shields.io/maven-metadata/v?color=forestgreen&label=release&metadataUrl=https%3A%2F%2Fldtteam.jfrog.io%2Fartifactory%2Fparchmentmc-internal%2Forg%2Fparchmentmc%2Fdata%2Fparchment-1.19.2%2Fmaven-metadata.xml) |
| **1.18.2** | ![Latest release version badge for 1.18.2](https://img.shields.io/maven-metadata/v?color=forestgreen&label=release&metadataUrl=https%3A%2F%2Fldtteam.jfrog.io%2Fartifactory%2Fparchmentmc-internal%2Forg%2Fparchmentmc%2Fdata%2Fparchment-1.18.2%2Fmaven-metadata.xml) |
|   1.18.1   | ![Latest release version badge for 1.18.1](https://img.shields.io/maven-metadata/v?color=forestgreen&label=release&metadataUrl=https%3A%2F%2Fldtteam.jfrog.io%2Fartifactory%2Fparchmentmc-internal%2Forg%2Fparchmentmc%2Fdata%2Fparchment-1.18.1%2Fmaven-metadata.xml) |
| **1.17.1** | ![Latest release version badge for 1.17.1](https://img.shields.io/maven-metadata/v?color=forestgreen&label=release&metadataUrl=https%3A%2F%2Fldtteam.jfrog.io%2Fartifactory%2Fparchmentmc-internal%2Forg%2Fparchmentmc%2Fdata%2Fparchment-1.17.1%2Fmaven-metadata.xml) |
|    1.17    | ![Latest release version badge for 1.17.1](https://img.shields.io/maven-metadata/v?color=forestgreen&label=release&metadataUrl=https%3A%2F%2Fldtteam.jfrog.io%2Fartifactory%2Fparchmentmc-internal%2Forg%2Fparchmentmc%2Fdata%2Fparchment-1.17%2Fmaven-metadata.xml) |
| **1.16.5** | ![Latest release version badge for 1.16.5](https://img.shields.io/maven-metadata/v?color=forestgreen&label=release&metadataUrl=https%3A%2F%2Fldtteam.jfrog.io%2Fartifactory%2Fparchmentmc-internal%2Forg%2Fparchmentmc%2Fdata%2Fparchment-1.16.5%2Fmaven-metadata.xml) |

When selecting the Parchment mappings version from the version badges above or in the README, please remove the `v` prefix before inserting it into your buildscript.

> If you are using Librarian on Forge and see unmapped names such as `m_1234_` or `f_1234_`, your Parchment mappings' Minecraft version differs from your environment's actual Minecraft version, and needs to be corrected to match. Alternatively, the section on [cross version mappings in Librarian's documentation][librarian_fg_cross_version_mappings] shows a solution for using mappings built for one Minecraft version on other Minecraft versions.

## ForgeGradle

The [**Librarian**][librarian] gradle plugin allows using Parchment mappings in a Minecraft Forge development environment.
The plugin requires a ForgeGradle version of at least `5.1.20`, and a Gradle version of 7.1.1 or higher.

For full step-by-step instructions with examples for how to apply the Librarian plugin and configure Parchment mappings.
Please see the [relevant documentation][librarian_fg] in the plugin's repository.

### Version string examples

For using Parchment on the same version of Minecraft:
: <code class="version"><u>YYYY</u>.<u>MM</u>.<u>DD</u>-<u>Minecraft version</u></code>

  > _Examples:_
  >
  > - `2021.12.12-1.17.1` for Minecraft 1.17.1
  > - `2022.08.07-1.18.2` for Minecraft 1.18.2
  > - `2022.08.14-1.19.2` for Minecraft 1.19.2
  {:.note.icon.note-example}

For using Parchment on a newer version with older mappings
: <code class="version"><u>Mapping's MC version</u>-<u>YYYY</u>.<u>MM</u>.<u>DD</u>-<u>Environment MC version</u></code>

  > _Examples:_
  >
  > - `1.17.1-2021.12.12-1.18` for Minecraft 1.17.1 mappings in an MC 1.18 environment
  > - `1.18.2-2022.08.07-1.19.1` for Minecraft 1.18.2 mappings in an MC 1.19.1 environment
  > - `1.19.2-2022.08.14-1.20` for Minecraft 1.19.2 mappings in an MC 1.20 environment
  {:.note.icon.note-example}

Confused as to why all the parameters are prefixed with `p`? See [the FAQ for details][faq-param-prefix].

## Fabric Loom

[**Fabric Loom**][fabric-loom] provides native support for Parchment mappings as of version 0.9.

To use Parchment mappings, add the ParchmentMC repository (`https://maven.parchmentmc.org`) to your buildscript, then configure your buildscript to use a `layered` mapping dependency with Parchment mappings and Official mappings, as seen in the following:

```gradle
repositories {
  maven {
    name = 'ParchmentMC'
    url = 'https://maven.parchmentmc.org'
  }
}

dependencies {
  // ...
  mappings loom.layered() {
    officialMojangMappings()
    parchment("org.parchmentmc.data:parchment-1.17.1:2021.09.05@zip")
  }
}
```

After applying these changes or updating to a new mappings export version, run the `genSources` Gradle task to (re)generate the Minecraft sources JAR with the documentation and parameters. If your IDE fails to auto-detect the sources JAR when browsing Minecraft classes, manually select the JAR file ending with `-sources.jar` when prompted by your IDE.

[1.17-branch]: https://github.com/ParchmentMC/Parchment/tree/versions/1.17.x
[exports-info]: /docs/maven#parchment-exports
[librarian]: https://github.com/ParchmentMC/Librarian
[faq-param-prefix]: faq#why-are-my-parameter-names-prefixed-with-p
[librarian_fg]: https://github.com/ParchmentMC/Librarian/blob/dev/docs/FORGEGRADLE.md
[librarian_fg_cross_version_mappings]: https://github.com/ParchmentMC/Librarian/blob/dev/docs/FORGEGRADLE.md#cross-version-mappings
[fabric-loom]: https://github.com/FabricMC/fabric-loom

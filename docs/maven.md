---
layout: page
title: Maven Repository and Artifacts
---

ParchmentMC hosts its official repository at **`https://maven.parchmentmc.org/`**. All exports of Parchment and
Blackstone, along with releases and snapshots of the various toolchain projects, are hosted on this repository.

### Maven Coordinates

- **Blackstone**: `org.parchmentmc.data:blackstone:`_`<mc_version>`_`@zip`
- **Parchment**: `org.parchmentmc.data:parchment-`_`<mc_version>`_`:`_`<export_version>`_`@zip`
  - Releases: _`<YYYY>`_`.`_`<MM>`_`.`_`<DD>`_
  - Nightly: _`<YYYY>`_`.`_`<MM>`_`.`_`<DD>`_`-nightly-SNAPSHOT`
  - Bleeding: `BLEEDING-SNAPSHOT`
- **Feather**: `org.parchment:feather:`_`<version>`_
  - IO for Gson: `org.parchment.feather:io-gson:`_`<version>`_
  - IO for Moshi: `org.parchment.feather:io-moshi:`_`<version>`_
  - IO for Proguard: `org.parchment.feather:io-proguard:`_`<version>`_
  - Utilities: `org.parchment.feather:utils:`_`<version>`_

## Parchment Exports

There are three categories of exports for the Parchment mapping set: releases, nightlies, and the bleeding edge.

> Please prefer using release exports, as these are guaranteed to never disappear. If you wish to use nightly or
  bleeding edge exports, please see the current retention policy below.

**Releases exports** are periodically published, and should be the export used by most projects. A release is published
periodically, when the ParchmentMC team feels that a release is ready (such as there being no outstanding errors).

**Nightly exports** are published each day at 12PM UTC, when there are changes to the mapping data since the last
nightly export. This should be only be used by users who wish to try out the mapping set immediately while waiting for
a release.

The **bleeding edge export** is published each time a commit is pushed to a version's branch. Usage of this export
should be avoided by most users.

## Artifact Retention Policy

For the official ParchmentMC maven, we have the following artifact retention policies:

- Release exports are retained indefinitely.
- Only 180 nightly exports are retained at any given time.
- Only 31 bleeding exports are retained at any given time.

Mirroring repositories may retain nightly or bleeding edge exports under different policies, but release exports are
guaranteed to be retained indefinitely.

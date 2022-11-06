---
layout: page
title: Frequently Asked Questions
---

<!-- A manual word break fixes this from stretching and causing horizontal overflow on small screens -->
## What is Parchment<wbr>/ParchmentMC?

ParchmentMC is a community project to provide a cohesive set of mappings of parameter names and javadocs -- the **Parchment** mappings set -- to augment the official names released by Mojang.

## How was the name ParchmentMC chosen?

The name **ParchmentMC** was chosen after voting on multiple proposals. Rejected names include: "Tabularum", "Napkin", "Banner", "Mappings", "Papyrus", "Interpretatio", and others. Originally, the name "Parchment" was voted the most, but as the GitHub username and .org/.net domains was already taken, the name was slightly adjusted into today's "ParchmentMC" for the team, while the mappings are named as the "Parchment" mappings set.

## How does this differ from other mappings like MCP/Yarn/etc.?

Most human-readable community-made mappings in the Minecraft modding community have one or both of two characteristics:

1. They use an intermediate mapping to translate between the obfuscated names within the distributed JARs, and the human-readable names provided by volunteers.
   This allows them to automatically migrate mappings from one version to the next if the underlying intermediate mapping does not change. For example, the [Yarn][yarn] mapping project uses the [Intermediary][intermediary] mappings, and the (now defunct) MCP mapping project uses the [SRG][mcpconfig] mappings.

2. They allow the community to give each member (class, field, method, or parameter) its own names in accordance with the conventions of that community.
   This gives the community freedom to assign whatever they believe the best name for that member. This means that those names are provided fully by the community (subject to their own standards) and may be substantially different from each mapping set.

Parchment mappings do not have these two characteristics, as it is based only the **official** mappings (also known as *Mojang mappings* or **Mojmap**) without the requirement of an intermediate mapping, and Parchment mappings are restricted in scope to only method parameter names and javadocs for classes, fields, methods, and parameters.

## Can I change names for classes/fields/methods?

No. Parchment mappings only deal with method parameter names and javadocs, to fill in the missing gaps that are left over from the Official mappings. They are not meant to allow changing the names as defined in the Official mappings, as the team believes it is important to ensure that there is only one 'flavor' of names from the Official mappings: those provided by Mojang.

## Are you affiliated with Forge/Fabric/Sponge/modloader projects?

Although the members of the ParchmentMC team may have positions in the teams of different modloader projects, ParchmentMC is intended to be a neutral ground for community-wide mappings. The affiliations of the members do not reflect on the neutrality of the team, and we strive to create a mapping set that is neutral and accepted across all major modloader projects.

## Why are my parameter names prefixed with `p`?

This is relevant for developers working with Minecraft Forge. Due to the requirement that the Minecraft code must be recompilable when remapped with parameter names, the [Librarian][librarian] plugin responsible for providing Parchment mappings uses the `checked` export. The `checked` export is specifically sanitized to:

- Prefix all parameter names with `p` (for example, `block` becomes `pBlock`), to avoid conflicts between parameter names and local variable names; and
- Remove all parameters for lambda methods and methods within anonymous classes, to avoid conflicts between local variables in upper scopes of the anonymous class or method.

In the future, we will seek towards finding solutions to allow usage of the regular Parchment mappings export through the Librarian plugin once we are able to determine all possible risks in regards to parameter name conflicts.

> **Note:** Other projects which do not need to have recompilable Minecraft code, such as Fabric and Quilt, may choose to and are indeed recommended to use the regular mappings export.

## What's the difference between the standards and the conventions?

The standards are rigidly-enforced guidelines which contributions must conform to in order to be approved and merged. On the other hand, the conventions are commonly-accepted principles and are more relaxed in enforcement. The conventions may be bent in certain special cases, subject to the approval of the reviewers as according to the PR review process. The standards and the conventions are both in the care of the Standards subteam.

## Can I join the team?

New members to the team are on an invite-basis by an existing team member and approved by the majority of the team.

[yarn]: https://github.com/FabricMC/yarn
[intermediary]: https://github.com/FabricMC/intermediary
[mcpconfig]: https://github.com/MinecraftForge/MCPConfig
[librarian]: https://github.com/ParchmentMC/Librarian

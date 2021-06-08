---
layout: post
title:  "Parchments initial release!"
date:   2021-06-08 17:39:00 +0200
categories: Announcement Release
---

# Announcement: Parchments initial release.
## Initial Release 
Hello members of the Modded Minecraft Community! \
We’re happy to announce the first initial release of Parchment and its subsidiary toolsets. \
Parchment is a community project that attempts to provide a cohesive set of mappings that augments the official names with parameters and javadocs. To support this mission, multiple tools were needed and are now being released.
### The Project
#### Data
- **Parchment:** 	The parameter names and javadocs mappings data, our main project, which you can find [here](https://github.com/ParchmentMC/Parchment)
- **Blackstone:** 	Metadata about the classes in the MC Jars, which you can find [here](https://github.com/ParchmentMC/Blackstone)

#### Code
- **Axe:** 		TeamCity plugin for triggering builds on MC releases and snapshots
- **Compass:** 	Gradle plugin for the mappings repo (Parchment), manages inputs, exports, and validation
- **Feather:** 	Library for common data objects and parsing (for Parchment and Blackstone)
- **Lodestone:** 	Gradle plugin for generating and publishing metadata about MC jars (Blackstone)
- **WrittenBooks:** Internal Gradle plugin for managing versioning and publishing

For the loader development members in the crowd the main information and tools you would need is: **_Feather & Compass_**

The _Feather_ and _Compass_ repos can be found at the following links:
- **Feather**: [https://github.com/ParchmentMC/Feather](https://github.com/ParchmentMC/Feather)
- **Compass**: [https://github.com/ParchmentMC/Compass](https://github.com/ParchmentMC/Compass)

Information related to these projects and how to work with them can be found under:
- **Feather**: [https://github.com/ParchmentMC/Feather/blob/dev/README.md](https://github.com/ParchmentMC/Feather/blob/dev/README.md)
- **Compass**: [https://github.com/ParchmentMC/Compass/wiki](https://github.com/ParchmentMC/Compass/wiki)

### The story thus far
It’s been a long journey, when this project started it was quite literally a Github Gist with MCP Mappings for 1.16, which then evolved into a spreadsheet, and became the de-facto standard for Forge mappings in 1.16. Once the decision was made at the loader level to take the olive branch from Mojang and embrace the so called “MojMaps”, we decided to take action, and thus Parchment was born: a community-driven mapping set for the missing data types of MojMaps, more specifically parameter names and javadocs, with an up-to-date mapping toolchain and an easily extendable and usable mapping system.

Today, we have released our very first official version of Parchment and its subsidiary tools, which is based on MojMaps and the latest public MCP mapping set. Using the mapped parameters and javadocs from the MCP version, we are releasing a workable build that can be used as the basis for the porting effort of loader projects to target 1.17. This mapping build is based primarily on SRG as an intermediary name.

We have established a dedicated Mapping Standards Team which is spearheaded by ChampionAsh5357 as well as his co-conspirators AlcatrazEscapee and SizableShrimp. They’ve created a list of requirements for submitted mappings which will all be verified against before they are eligible for merging, ensuring a consistent style and conventions are used across all parameter names and javadocs. Since  the initial release of Parchment for 1.17 is based off of the existing MCP mappings, it may not be up to the standards we have set. However, over time we will be updating the existing mappings to match the new standards.

### The Team (as of this writing)
#### Benevolent Dictator For Life
- Lanse505

#### Standards
- AlcatrazEscapee
- ChampionAsh5357
- SizableShrimp

#### Toolchain
- OrionOnline
- sciwhiz12

#### Mappers / Miscellaneous
- BaileyH
- chylex
- Cyborgmas
- Darkhax
- DolphinTech
- gigaherz
- Jared
- MCenderdragon
- Mikey
- Nightminer
- Raycoms
- Sekwah
- SkySom
---
layout: page
title: Mapping Standards
---

<style>
.small-text {
    list-style: none;
    font-size: 0.9em !important;
}
.list-separation > li {
    margin-bottom: 0.5em;
}
</style>

# Mapping Standards

To ensure consistency for the Parchment mapping data, both to the benefit of reviewers and to consumers of the mappings,
this page shows the mapping standards and guidelines. These standards are the basis used by reviewers when checking
contributions.

The Parchment mapping set is based off of the names provided by the obfuscation maps that Mojang publishes for all 
versions since 1.14. These names are referred to by Parchment as **'official'** names, **'Mojang'** names, or 
**'mojmap'** names, in contrast to the _'obfuscated'_ names found in the client and server JARs.

As a general standard, use American English spelling for words. For example, prefer `color` to `colour`, or `armor` to
`armour`.

## Parameter Names

{:.list-separation}

1. **Names must only contain alphanumeric characters, and must begin with a lowercase letter.**
    - Alphanumeric characters means the characters in the ranges `A-Z`, `a-z`, and `0-9`.
    - {:.small-text} _Examples:_ `someVariable`, not `delta%` or `Delta`

1. **Names must be in lower camel case.**
    - Lower camel case is written by joining together words and capitalizing the first character of each word except 
      the first.
    - {:.small-text} _Examples:_ `lowerCamelCase`, `areaTransformer`, `generatedItem`

1. **Names should be named based on the parameter types and context of use.**
    - They should be verbose and use complete words. Avoid omitting essential information for the purpose of keeping the 
      name compact.
    - {:.small-text} _Examples:_ `BlockPos adjacentPos, BlockPos currentPos`, not `BlockPos pos1, BlockPos pos2`

1. **Avoid abbreivations or acronyms.**
    - _Exception:_ Common or well-known abbreviations can be used: `IO` (input-output), `NBT` ([named binary tag][nbt])
    - _Exception:_ Names for common classes can be shortened: `BlockPos pos`, `BlockState state`, `WorldGenLevel level`

> **Note about lambda parameters:**
> 
> Currently, there is no fullly automated solution for verifying that mapped lambda parameters do not conflict with 
> parameters (both method and other lambdas) or local variables. Care should be taken when naming and reviewing these.
> 
> As a workaround, Parchment has a 'checked' export which, among other things, strips out names for lambda parameters,
> so projects which require non-conflicting parameter names (such as for recompilation of decompiled source) may use 
> that instead.

## Javadocs

When documenting, try to keep explanations simple and concise without sacrificing accuracy. Avoid use of overly complex
or lengthy words where simple and short words are sufficient.

Documenting members should be prioritized into the following: public members, then important members, then non-obvious 
members (commonly, getters which return numbers or opaque objects, such as NBT tags.) Methods should be documented over
their corresponding fields.

{:.list-separation}

1. **Use fully qualified class names in javadoc tags which link to classes or their members.**
    - Some of these javadoc tags are `{@link}` and `@see`.
    - {:.small-text} _Example:_ `{@link net.minecraft.math.BlockPos}` instead of `{@link BlockPos}`.

1. **Avoid adding overly simple information or "expected knowledge".**
    - "Expected knowledge" means any fundamental knowledge of either Java or Minecraft which is assumed to be known by
      any developer.
        - {:.small-text} _Example:_ 

          ```java
          /**
           * Constructor for a BlockPos
           */
          public BlockPos(...) { ... }
          ```

          This is expected knowledge; developers are expected to be able to identify a constructor in Java.
          {:.small-text} 

    - Overly simple information means javadocs which does not give any information that cannot be immediately inferred 
      from the code. This explicity excludes javadocs which gives information that is not immediately inferrable, such
      as the valid range of a number from a getter.
        - {:.small-text} _Example:_ 

          ```java
          /**
           * Returns the level.
           *
           * @return the level
           */
          public Level getLevel() { return this.level; }
          ```

          The knowledge of what the getter returns is immediately inferrable from the code and the getter name.
          {:.small-text} 

1. **Do not use the following javadoc tags:** `@author`, `@since`, `@param`.
    - Due to the nature of the mapping data being made for Minecraft, a game made by Mojang Studios, it is inapproriate
      to use the `@author` to mark the contributor for that javadoc.
    - Because of the dynamic nature of the game code, it would be difficult to determine and maintain the approriate
      `@since` tags for javadocs.
    - Parameter javadocs should be specified at the parameter level. It is up to consumers of the mapping data to insert
      `@param` entries for each named and documented parameter.

1. **Avoid including overly specific code examples of game code.**
    - These code examples may become out-of-date and incorrect in future Minecraft versions as the code they reference 
      is moved, refactored, or deleted.

*[mojmap]: portmanteau of 'Mojang' and 'mappings'
[nbt]: https://minecraft.fandom.com/wiki/NBT_format

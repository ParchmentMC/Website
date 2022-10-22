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

    Alphanumeric characters mean the characters in the ranges `A-Z`, `a-z`, and `0-9`.

    > _Examples:_ `someVariable`, not `delta$` or `Delta`.
    {:.note.icon.note-example}

1. **Names must be in lower camel case.**

    Lower camel case is written by joining together words and capitalizing the first character of each word except the first.

    > _Examples:_ `lowerCamelCase`, `areaTransformer`, `generatedItem`.
    {:.note.icon.note-example}

1. **Names should be named based on the parameter types and context of use.**

    They should be verbose and use complete words. Avoid omitting essential information for the purpose of keeping the name
    compact.

    > _Examples:_ `BlockPos adjacentPos, BlockPos currentPos`, not `BlockPos pos1, BlockPos pos2`.
    {:.note.icon.note-example}

    Use the surrounding Mojang class, field, and method names to infer parameter names. Prefer matching the Mojang naming
    rather than trying to improve on it. If matching the mojang name leaves a parameter's usage unclear, consider adding a
    parameter javadoc with an explanation of that parameter.

    > _Example:_
    >
    > ```java
    > private boolean cantTouchThis;
    > 
    > /**
    >   * @param cantTouchThis If the parameter name is unclear, a parameter javadoc could be added to explain the
    >   *                      usage in more detail.
    >   */
    > public Foo(boolean cantTouchThis) { // Note this parameter is named to match the field name
    >   this.cantTouchThis = cantTouchThis;
    > } 
    > ```
    >
    {:.note.icon.note-example}

1. **Avoid abbreviations or acronyms.**

    _Exception:_ Common or well-known abbreviations can be used: `IO` (input-output), `Id` (identifier).

    _Exception:_ Names for common classes can be shortened: `BlockPos pos`, `BlockState state`, `WorldGenLevel level`.

## Javadocs

{:.list-separation}

1. **Use complete, meaningful, concise sentences.**

    Try and keep explanations simple and concise without sacrificing accuracy. Avoid the use of overly complicated
    words where short and simple descriptions are sufficient.

    Avoid the use of domain specific knowledge that the reader would not be expected to know if a simpler or clearer
    explanation can be found.

    Write complete sentences for documentation, starting with an uppercase letter and ending with a period.

    _Exception:_ Descriptions in `@return`, `@param`, or `@throws` may use short phrases that are not sentences.

    > _Example:_
    >
    > ```java
    > /**
    >   * This is a full sentence. It begins with a capital letter and ends with a period.
    >   * Note that the below two lines may use short phrases rather than complete sentences.
    >   * @param foo the current foo
    >   * @return the modified foo
    >   */
    > ```
    >
    {:.note.icon.note-example}

1. **Do not insert unnecessary line breaks.**

    Do _not_ manually insert line breaks for long lines, or explicitly hard wrap sentences. Each new `COMMENT` line
    will insert a line break in the comment, and column limits are enforced by end mapping consumers.

    Do use line breaks if there is a logical need to start a paragraph in the javadoc comment.

    > _Example:_
    >
    > ```text
    > FIELD foo Foo
    >   COMMENT This is a comment, it is not wrapped, even though the sentence may be very long.
    >   COMMENT This is a second sentence, which starts a new line in the comment.
    > ```
    >
    {:.note.icon.note-example}

    If a new paragraph in the _compiled javadoc_ is desired, use the `<p>` tag on empty lines. This is up to the writer's
    choice and not enforced. Stay consistent with nearby existing documentation.

    > _Example:_
    >
    > ```java
    > /**
    >   * This is a first paragraph.
    >   * <p>
    >   * This is the second paragraph.
    >   */
    > ```
    >
    {:.note.icon.note-example}

1. **Linking to other parts of the code.**

    Use `@link`, `@see` and `@linkplain` to link to other parts of the code. When linking to other classes, use the
    fully qualified class name unless you can assume the class will be imported. This can happen under the following cases:

      - The class is from the `java.lang` package.
      - The class is in the same package as the current class.
      - The class is _used_ by this class, as in, it is used as a field type, or method parameter within this class.

    > _Example:_
    >
    > ```java
    > /**
    >   * Use the fully qualified name to reference classes from another package.
    >   * @see other.package.Foo
    >   * Classes from java.lang or the same package can be referenced without fully qualified names.
    >   * @see String
    >   * This class, or classes used by this class can be referenced without fully qualified names.
    >   * @see #someMethod(Baz, Bar)
    >   */
    > ```
    >
    {:.note.icon.note-example}

1. **Avoid adding overly simple information or "expected knowledge".**

    "Expected knowledge" means any fundamental knowledge of either Java or Minecraft which is assumed to be known by
    any developer.

    > _Example:_
    >
    > ```java
    > /**
    >  * Constructor for a BlockPos
    >  */
    > public BlockPos(...) { ... }
    > ```
    >
    > This is expected knowledge; developers are expected to be able to identify a constructor in Java.
    {:.note.icon.note-example}

    Overly simple information means javadocs which does not give any information that cannot be immediately inferred
    from the code. This explicitly excludes javadocs which gives information that cannot be inferred immediately, such
    as the valid range of a number from a getter.

    > _Example:_
    >
    > ```java
    > /**
    >  * Returns the level.
    >  *
    >  * @return the level
    >  */
    > public Level getLevel() { return this.level; }
    > ```
    >
    > The knowledge of what the getter returns can be inferred immediately from the code and the getter name.
    {:.note.icon.note-example}

1. **Do not use the following javadoc tags:** `@author`, `@since`, `@param`.

    Due to the nature of the mapping data being made for Minecraft, a game made by Mojang Studios, it is inappropriate
    to use the `@author` to mark the contributor for that javadoc.

    Because of the dynamic nature of the game code, it would be difficult to determine and maintain the appropriate
    `@since` tags for javadocs.

    Parameter javadocs should be specified at the parameter level. It is up to consumers of the mapping data to insert
    `@param` entries for each named and documented parameter.

1. **Avoid including overly specific code examples of game code.**

    These code examples may become out-of-date and incorrect in future Minecraft versions as the code they reference
    is moved, refactored, or deleted.

*[mojmap]: portmanteau of 'Mojang' and 'mappings'

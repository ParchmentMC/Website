---
layout: page
title: ParchmentMC
subtitle: Open community-sourced parameter names and javadocs.
nav-short: false
---

<style>
.center-text {
    text-align: center;
}

.center-box {
    max-width: fit-content;
    margin-left: auto;
    margin-right: auto;
}

.getting-started {
    background-color: rgba(2, 138, 15, 0.1);
}

.features-container {
    gap: 1em;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 1em auto;
}

.feature-item {
    margin: 0;
    padding-left: 0.6em;
    padding-right: 0.6em;
    font-size: 0.9em;
    background-color: rgba(247, 235, 90, 0.1);
}

.feature-item * {
    margin-top: 0.5em;
    margin-bottom: 0.5em;
}

.item-header {
    font-size: 1.1em;
}

@media (max-width: 719px) {
    .features-container {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(3, 1fr);
    }
}
</style>

Parchment is an open community-sourced modloader-neutral set of mappings of _parameter names_ and _javadocs_, to augment the official names released by Mojang.

<div class="features-container" markdown="1">

> <i class="fas fa-door-open"></i> **Open Source**{:.item-header}
>
> Parchment mappings are open source and hosted publicly in the [GitHub repository][mappings-repo].
{:.note.center-text.feature-item}
^

> <i class="fas fa-th-large"></i> **Platform Neutral**{:.item-header}
>
> You can use Parchment mappings on your modding platform of choice: Forge, Fabric, Quilt, etc.
{:.note.center-text.feature-item}
^

> <i class="fas fa-sync-alt"></i> **Mojmaps Compatible**{:.item-header}
>
> Our mappings are fully compatible with Mojmap mappings, making switching between them painless.
{:.note.center-text.feature-item}

</div>

> **Want to use Parchment in your workspace?** \
> _Head over the [Getting Started][getting-started] page._
{:.note.getting-started.center-box.center-text}

[getting-started]: /docs/getting-started
[mappings-repo]: https://github.com/ParchmentMC/Parchment

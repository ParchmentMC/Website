---
layout: default
title: About
---

**ParchmentMC** is a community project to provide a cohesive set of mappings of parameter names and javadocs, to augment the official names released by Mojang.

## The Team

<style>
.team-container {
  margin: 1em;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 1em;
  row-gap: 1em;
  text-align: center;
}

.team-container .avatar {
  width: 100%;
  border: 2px solid black;
  border-radius: 100%;
}

.team-container .name {
  font-weight: bold;
  font-size: 1.1em;
}

.team-container .role {
  font-weight: 500;
  text-decoration: underline;
  font-size: 0.9em;
}

.team-container .teams {
  font-style: italic;
  font-size: 0.8em;
}

</style>

<div class="team-container">
{% for team_member in site.team_members %}
  <div class="member">
    {% capture avatar %}
    https://github.com/{{ team_member.github }}.png
    {% endcapture %}
    {% if team_member.avatar %} {% assign avatar = team_member.avatar %} {% endif %}
    <img class="avatar" src="{{ avatar }}">
    <div class="name">{{ team_member.name }}</div>
    <div class="role">{{ team_member.role }}</div>
    <div class="teams">{{ team_member.teams }}</div>
  </div>
{% endfor %}
</div>
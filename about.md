---
layout: page
title: About
---

**ParchmentMC** is a community project to provide a cohesive set of mappings of parameter names and javadocs, to augment the official names released by Mojang.

## The Team

<div class="team-container">
{% for team_member in site.team_members %}
  <div class="member">
    {% capture avatar %}https://github.com/{{ team_member.github }}.png{% endcapture %}
    {% if team_member.avatar %} {% assign avatar = team_member.avatar %} {% endif %}
    <img class="avatar" src="{{ avatar }}">
    <div class="name">
    {% if team_member.github %} <a href="https://github.com/{{ team_member.github }}"> {% endif %}
    {{ team_member.name }}
    {% if team_member.github %} </a> {% endif %}
    </div>
    <div class="role">{{ team_member.role }}</div>
    <div class="teams">{{ team_member.teams }}</div>
  </div>
{% endfor %}
</div>

<style>
.team-container {
  margin: 1em auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-content: space-around;
  text-align: center;
}

.team-container .member {
  margin: 0.25em;
  flex: 1 0 8.1em;
}

.team-container .avatar {
  width: 7em;
  height: 7em;
  border: 2px solid black;
  border-radius: 100%;
}

.team-container .name {
  font-weight: bold;
  font-size: 1.0em;
}

.team-container .name a {
  text-decoration: none;
  color: inherit;
}

.team-container .role {
  font-weight: 500;
  text-decoration: underline;
  font-size: 0.8em;
}

.team-container .teams {
  font-style: italic;
  font-size: 0.8em;
}

@media (max-width)
</style>

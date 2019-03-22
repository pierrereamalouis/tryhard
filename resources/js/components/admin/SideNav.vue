<template>
  <div class="sidenav sidenav-bg">
    <a class="sidenav-brand" href="/">Tryhard Keeperspool Admin</a>
    <a id="collapse-brand" href="/" class="sidenav-brand">
      <strong>THK</strong>
    </a>

    <ul class="sidenav-items">
      <li class="sidenav-link">
        <a href="/" id="dashboard-sidenav-link">
          <i class="fas fa-tachometer-alt"></i>Dashboard
        </a>
      </li>
      <li id="first-dropdown" class="sidenav-link">
        <a v-b-toggle.league-submenu role="button">
          <i class="fas fa-trophy"></i>League
          <span class="caret"></span>
        </a>
        <b-collapse class="submenu px-3" id="league-submenu">
          <li>
            <a href="/leagues/create" id="new-league-subnav-link">Create New</a>
          </li>
          <li>
            <a href="/leagues" id="leagues-subnav-link">All Leagues</a>
          </li>
        </b-collapse>
      </li>
      <li class="sidenav-link">
        <a v-b-toggle.pooler-submenu role="button">
          <i class="fas fa-users"></i>Poolers
          <span class="caret"></span>
        </a>
        <b-collapse class="submenu px-3" id="pooler-submenu">
          <li>
            <a href="/poolers/create">Create New</a>
          </li>
          <li>
            <a href="#" id="edit-league-subnav-link">Edit</a>
          </li>
          <li>
            <a href="#" id="delete-league-subnav-link">Delete</a>
          </li>
          <li>
            <a href="#" id="leagues-subnav-link">All Poolers</a>
          </li>
        </b-collapse>
      </li>
      <li class="sidenav-link">
        <a v-b-toggle.pooler-teams-submenu role="button">
          <i class="fas fa-sitemap"></i>Poolers Teams
          <span class="caret"></span>
        </a>
        <b-collapse class="submenu px-3" id="pooler-teams-submenu">
          <li>
            <a href="/pooler-teams/create">Create New</a>
          </li>
          <li>
            <a href="#" id="leagues-subnav-link">All Leagues</a>
          </li>
        </b-collapse>
      </li>
      <li class="sidenav-link">
        <a v-b-toggle.player-submenu role="button">
          <i class="fas fa-hockey-puck"></i>Players
          <span class="caret"></span>
        </a>
        <b-collapse class="submenu px-3" id="player-submenu">
          <li>
            <a href="/players/create">Add New</a>
          </li>
          <li>
            <a href="#" id="leagues-subnav-link">All Players</a>
          </li>
        </b-collapse>
      </li>
      <li class="sidenav-link">
        <a href="#">
          <i class="fas fa-cogs"></i>3rd-Party API
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    // Listen on bootstrap collaspe state
    this.$root.$on("bv::collapse::state", (collapseId, isJustShown) => {
      const element = document.getElementById(collapseId);

      if (isJustShown) {
        // Add active class on the li element targeted
        element.parentElement.classList.add("active");
        // Add active class on the a element targeted
        element.parentElement.firstChild.classList.add("active");
      } else {
        // Remove active class on the li element targeted
        element.parentElement.classList.remove("active");
        // Remove active class on the a element targeted
        element.parentElement.firstChild.classList.remove("active");
      }
    });
  }
};
</script>

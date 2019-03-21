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
        <a
          href="#league-submenu"
          id="league-sidenav-link"
          data-toggle="collapse"
          aria-expanded="false"
          aria-controls="league-submenu"
          role="button"
        >
          <i class="fas fa-trophy"></i>League
          <span class="caret"></span>
        </a>
        <ul class="collapse submenu px-3" id="league-submenu">
          <li>
            <a href="/leagues/create" id="new-league-subnav-link">Create New</a>
          </li>
          <li>
            <a href="/leagues" id="leagues-subnav-link">All Leagues</a>
          </li>
        </ul>
      </li>
      <li class="sidenav-link">
        <a
          id="poolers-sidenav-link"
          href="#pooler-submenu"
          data-toggle="collapse"
          aria-expanded="false"
          aria-controls="pooler-submenu"
          role="button"
        >
          <i class="fas fa-users"></i>Poolers
          <span class="caret"></span>
        </a>
        <ul class="collapse submenu px-3" id="pooler-submenu">
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
          <li class="sidenav-link">
            <a
              href="#pooler-teams-submenu"
              data-toggle="collapse"
              aria-expanded="false"
              aria-controls="pooler-teams-submenu"
              role="button"
              id="pooler-teams-subnav-link"
            >
              Poolers Teams
              <span class="caret"></span>
            </a>
            <ul class="collapse submenu px-3" id="pooler-teams-submenu">
              <li>
                <a href="/pooler-teams/create">Create New</a>
              </li>
              <li>
                <a href="#" id="leagues-subnav-link">All Leagues</a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li class="sidenav-link">
        <a
          href="#player-submenu"
          data-toggle="collapse"
          aria-expanded="false"
          aria-controls="player-submenu"
          role="button"
          id="players-sidenav-link"
        >
          <i class="fas fa-hockey-puck"></i>Players
          <span class="caret"></span>
        </a>
        <ul class="collapse submenu px-3" id="player-submenu">
          <li>
            <a href="/players/create">Add New</a>
          </li>
          <li>
            <a href="#" id="leagues-subnav-link">All Players</a>
          </li>
        </ul>
      </li>
      <li class="sidenav-link">
        <a
          id="pooler-teams-subnav-link"
          href="#api-submenu"
          data-toggle="collapse"
          aria-expanded="false"
          aria-controls="pooler-submenu"
          role="button"
        >
          <i class="fas fa-cogs"></i>3rd-Party API
        </a>
      </li>
    </ul>
  </div>
</template>

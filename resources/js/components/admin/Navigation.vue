<template>
  <div>
    <nav class="nav-bar">
      <!-- <ol class="breadcrumb">
            <li class="breadcrumb-item active">Home</li>
        </ol>
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item active">Library</li>
        </ol>
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item"><a href="#">Library</a></li>
            <li class="breadcrumb-item active">Data</li>
      </ol>-->
      <p class id="breadcrumb">League / Create New</p>
      <ul class="nav-bar-items">
        <li class="nav-bar-link">
          <a href="/">
            <span>
              <i class="fas fa-sign-out-alt"></i>
            </span>Logout
          </a>
        </li>
      </ul>
    </nav>

    <div class="sidenav sidenav-bg">
      <a class="sidenav-brand" href="/">Tryhard Keeperspool Admin</a>

      <ul class="sidenav-items">
        <li class="sidenav-link">
          <a href="/" id="dashboard-sidenav-link">
            <i class="fas fa-tachometer-alt"></i>Dashboard
          </a>
        </li>
        <li id="first-dropdown" class="sidenav-link sidenav-link-dropdown">
          <a href="/leagues" id="league-sidenav-link">
            <i class="fas fa-trophy"></i>League
            <span class="caret"></span>
          </a>
          <ul class="sidenav-second-level">
            <li>
              <a href="/leagues/create" id="new-league-subnav-link">Create New</a>
            </li>
            <li>
              <a href="#" id="edit-league-subnav-link">Edit League</a>
            </li>
            <li>
              <a href="#" id="delete-league-subnav-link">Delete League</a>
            </li>
            <li>
              <a href="/leagues" id="leagues-subnav-link">All Leagues</a>
            </li>
          </ul>
        </li>
        <li class="sidenav-link sidenav-link-dropdown">
          <a href="#" id="poolers-sidenav-link">
            <i class="fas fa-users"></i>Poolers
            <span class="caret"></span>
          </a>
          <ul class="sidenav-second-level">
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
            <li class="sidenav-link sidenav-link-dropdown">
              <a href="#" id="pooler-teams-subnav-link">
                Poolers Teams
                <span class="caret"></span>
              </a>
              <ul class="sidenav-second-level">
                <li>
                  <a href="/pooler-teams/create">Create New</a>
                </li>
                <li>
                  <a href="#" id="edit-league-subnav-link">Edit League</a>
                </li>
                <li>
                  <a href="#" id="delete-league-subnav-link">Delete League</a>
                </li>
                <li>
                  <a href="#" id="leagues-subnav-link">All Leagues</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li class="sidenav-link sidenav-link-dropdown">
          <a href="#" id="api-sidenav-link">
            <i class="fas fa-cogs"></i>3rd-Party API
            <span class="caret"></span>
          </a>
          <ul id="second-dropdown" class="sidenav-second-level">
            <li>
              <a href="#">Connection</a>
            </li>
            <!-- Manage third party api connections -->
            <li>
              <a href="#">Teams</a>
            </li>
            <!-- Page for Teams edit, delete and load team info from thrid party api -->
            <li>
              <a href="#">Players</a>
            </li>
            <!-- Page for Players edit, delete and load players data from third party api -->
            <li>
              <a href="#">Stats</a>
            </li>
            <!-- Page for players stats edit, delete and load stats data from third party api -->
          </ul>
        </li>
        <li class="sidenav-link sidenav-link-dropdown">
          <a href="#" id="players-sidenav-link">
            <i class="fas fa-hockey-puck"></i>Players
            <span class="caret"></span>
          </a>
          <ul class="sidenav-second-level">
            <li>
              <a href="/players/create">Add New</a>
            </li>
            <li>
              <a href="#" id="edit-league-subnav-link">Edit</a>
            </li>
            <li>
              <a href="#" id="delete-league-subnav-link">Delete</a>
            </li>
            <li>
              <a href="#" id="leagues-subnav-link">All Players</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {}
};
</script>


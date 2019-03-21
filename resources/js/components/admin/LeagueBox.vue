<template>
  <div class="content-box content-box-dashboard-league">
        <div class="content-box-header">
        <img src="img/cup.png" alt>Leagues
        </div>
    <div class="content-box-nav">
      <ul>
        <li>
          <i class="fas fa-plus-square create-new-league-icon"></i> Create New
        </li>
      </ul>
    </div>
    <div class="content-box-body">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">League Name</th>
            <th scope="col">Season</th>
            <th scope="col"># Poolers</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tryhard Pool League</td>
            <td>2016-2017</td>
            <td>10 Poolers</td>
            <td>
              <ul class="manage-league-icons">
                <li class="edit-league-icon">
                  <i class="fas fa-pen-square"></i>
                </li>
                <li class="delete-league-icon">
                  <i class="fas fa-minus-square"></i>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Tryhard Pool League</td>
            <td>2017-2018</td>
            <td>10 Poolers</td>
            <td>
              <ul class="manage-league-icons">
                <li class="edit-league-icon">
                  <i class="fas fa-pen-square"></i>
                </li>
                <li class="delete-league-icon">
                  <i class="fas fa-minus-square"></i>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="content-box-footer"></div>
  </div>
</template>
<script>
export default {
  mounted() {
    console.log('Component mounted.');
  }
};
</script>

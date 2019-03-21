<template>
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
</template>
<script>
export default {
  mounted() {
    console.log('Component mounted.');
  }
};
</script>

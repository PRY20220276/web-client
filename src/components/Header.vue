<template>
  <div id="header">
    <div class="project-logo">
      <img alt="project logo" src="../assets/logo.png" width="40" height="40">
      <h2>Project</h2>
    </div>
    <div class="items">
      <router-link to="/services">Services</router-link>
      <a href="#">Pricing</a>
      <router-link to="/gallery">Gallery</router-link>
      <a href="#">My Account</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
#header {
  display: flex;
  height: 10vh;
  align-items: center;
  border-bottom: 1px solid #cbccce;
}

a.router-link-exact-active {
  border-bottom: 1px solid black;
  }
.project-logo {
  display: flex;
  align-items: center;
  margin-left: 50px;
}
.items {
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  column-gap: 50px;
  margin-right: 50px;
}

</style>
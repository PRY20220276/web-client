<template>
  <div id="header">
    <div class="project-logo">
      <img alt="project logo" src="../../shared/assets/logo.png" width="40" height="40">
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

<script scope lang="ts">
export default {
  name: "Header"
}
</script>

<style scoped>
#header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #cbccce;
  padding: 10px 50px;
}
a.router-link-exact-active { border-bottom: 1px solid black; }
.project-logo {
  display: flex;
  align-items: center;  
}
.items {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  column-gap: 50px;
  transition: all .6s ease;
  font-weight: bold;
}
.items a { transition: all .2s ease; }
.items a:hover { color: var(--blue-600); }
@media (max-width: 740px) {
  #header { flex-direction: column; }
  .project-logo { margin-left: 0; }
  .items {
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    font-size: 20px;
  }
}
</style>
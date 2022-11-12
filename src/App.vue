<template>
  <Header v-if="headerVisible"/>
  <router-view></router-view>
</template>

<script>
import Header from "./shared/components/Header.component.vue"

export default {
  name: 'App',
  components: {
    Header
  },
  computed: {
    headerVisible() {
      if (this.$router.currentRoute.value.path == "/") return false;
      if (this.$router.currentRoute.value.path == "/login") return false;
      if (this.$router.currentRoute.value.path == "/register") return false;
      return true;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0px;
  padding: 0px;
}

a {
  text-decoration:none;
  color: black;
}

</style>

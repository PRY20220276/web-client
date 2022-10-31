<template>
  <login />  
</template>

<script>
import Login from './components/Register.vue';

export default {
  name: 'App',
  components: {
    Login
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

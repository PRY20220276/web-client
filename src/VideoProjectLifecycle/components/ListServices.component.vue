<template>
  <section class="services">
    <div class="services-title">
      <h2>LIST OF SERVICES</h2>
      <h3>Start making the content you wished for, all posible by AI.</h3>
    </div>

    <div class="services-items">
      <router-link to="/steps" class="item">Service 1</router-link>
      <router-link to="/steps" class="item">Service 2</router-link>
      <router-link to="/steps" class="item">Service 3</router-link>
      <router-link to="/steps" class="item">Service 4</router-link>
      <router-link to="/steps" class="item">Service 5</router-link>
      <router-link to="/steps" class="item">Service 6</router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "ListServices",
};
</script>

<style scoped>
h2 { font-size: 30px; }
h3 { font-weight: 400; }
.services {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.services-title { text-align: center; }
.services-items {
  max-width: 1200px;
  margin-top: 60px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.item {
  width: 320px;
  height: 140px;
  color: white;
  background-color: var(--blue-600);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  transition: all 0.4s ease;
}
.item:hover { transform: scale(1.1); }
</style>
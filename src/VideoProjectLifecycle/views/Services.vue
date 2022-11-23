<template>
  <Services />
  <PitchMessage />
  <Footer />
</template>

<script lang="ts">
import PitchMessage from '../components/PitchMessage.component.vue'
import Footer from '../components/Footer.component.vue'
import Services from '../components/ListServices.component.vue'

export default {
  components: {
    PitchMessage,
    Footer,
    Services,
  }
}
</script>

<style scoped>

</style>
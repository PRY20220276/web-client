<template>
  <div id="gallery">
    <div class="title">
      <h1>YOUR GALLERY</h1>
      <h2>All your content, in one place</h2>
    </div>
    
    <div class="gallery-container">
      <img src="../../shared/assets/galleria1.jpg" width="250" height="150">
      <img src="../../shared/assets/galleria1.jpg" width="250" height="150">
      <img src="../../shared/assets/galleria1.jpg" width="250" height="150">
      <img src="../../shared/assets/galleria1.jpg" width="250" height="150">
      <img src="../../shared/assets/galleria1.jpg" width="250" height="150">
      <img src="../../shared/assets/galleria1.jpg" width="250" height="150">
      <img src="../../shared/assets/galleria1.jpg" width="250" height="150">
      <img src="../../shared/assets/galleria1.jpg" width="250" height="150">
      <img src="../../shared/assets/galleria1.jpg" width="250" height="150">
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Gallery"
}
</script>

<style scoped>
#gallery {
  display: flex;
  flex-direction: column;
  align-items: center;
}
/* gallery container */
.gallery-container {
  max-width: 1300px;
  margin-top: 45px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}
.title {
  text-align: center  ;
}
.title h2 {
  color: #75777b; 
}



</style>
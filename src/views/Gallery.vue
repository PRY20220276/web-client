<template>
  <div id="gallery">
    <div class="title">
      <h1>YOUR GALLERY</h1>
      <h2>All your content, in one place</h2>
    </div>
    
    
    <div class="gallery-container">
      <img src="../assets/galleria1.jpg" width="250" height="150">
      <img src="../assets/galleria1.jpg" width="250" height="150">
      <img src="../assets/galleria1.jpg" width="250" height="150">
      <img src="../assets/galleria1.jpg" width="250" height="150">
      <img src="../assets/galleria1.jpg" width="250" height="150">
      <img src="../assets/galleria1.jpg" width="250" height="150">
      <img src="../assets/galleria1.jpg" width="250" height="150">
      <img src="../assets/galleria1.jpg" width="250" height="150">
      <img src="../assets/galleria1.jpg" width="250" height="150">
    </div>
    
    
  </div>
</template>

<script>
export default {
  name: "Gallery"
}
</script>

<style scoped>


#gallery {
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  
}
.title, .gallery-container {
  max-width: 1300px;
}
.title {
  display: flex;
  flex-direction: column;
  align-items: center;
}
/* gallery container */

.gallery-container {
  margin-top: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}
.title h2 {
  color: #75777b; /* TODO: create secondary color */
  padding: 0;
  margin: 0;
}

</style>
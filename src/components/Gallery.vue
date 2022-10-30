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
  margin: 20px; /* TODO: remove */
}

/* title */
.title h2 {
  color: #75777b; /* TODO: create secondary color */
}

/* gallery container */
.gallery-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px 20px;
  width: 1000px;
}

</style>
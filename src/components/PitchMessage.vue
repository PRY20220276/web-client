<template>
  <div id="pitch-message">

    <h1>SACA EL PROVECHO MÁXIMO A TUS VIDEOS</h1>

    <div class="video-container">
      <video src="" mediagroup="">
      </video>

    </div>

    <div class="options">
      <Chip class="item-option" label="opcion uno" />
      <Chip class="item-option" label="opcion dos" />
      <Chip class="item-option" label="opcion tres" />
      <Chip class="item-option" label="opcion cuatro" />
      <Chip class="item-option" label="opcion cinco" />
    </div>
  </div>
  
</template>

<script>
export default {
  name: "PitchMessage"
}
</script>

<style scoped>
#pitch-message {
  display: flex;
  flex-direction: column;
  align-items: center;
}
h1 {
  text-align: center;
  padding: 2px 10px;
}

/* video container */
.video-container {
  display: flex;
  margin-top: 20px;
  width: 60vw;
  height: auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 10px;
  padding: 20px;
}
@media (max-width: 760px) {
  .video-container {
    width: 80vw;
  }
}
.video-container video {
  width: 100%;
  border: 1px solid #cbccce;
}

/* options */
.options {
  margin-top: 30px;
  display: flex;
  column-gap: 20px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.item-option {
  padding: 4px 13px;
  font-weight: bold;
  transition: all 0.4s ease;
  text-align: center;
  margin-bottom: 10px;
}
.item-option:hover {
  background-color: var(--blue-600);
  color: white;
}

</style>
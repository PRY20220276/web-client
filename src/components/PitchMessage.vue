<template>
  <div id="pitch-message">

    <h1>SACA EL PROVECHO MÁXIMO A TUS VIDEOS</h1>

    <div class="video-container">
      <video src="" mediagroup="">
      </video>

    </div>

    <div class="options">
      <Chip label="opcion uno" />
      <Chip label="opcion dos" />
      <Chip label="opcion tres" />
      <Chip label="opcion cuatro" />
      <Chip label="opcion cinco" />
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

/* video container */
.video-container {
  display: flex;
  margin-top: 20px;
  width: 60vw;
  height: 60vh;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 10px;
  padding: 20px;
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
}

</style>
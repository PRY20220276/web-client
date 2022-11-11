<template>
  <div id="load-video">
    <div class="file-container">
      <label class="custom-file">
      <input type="file" /> Select a video
    </label>
    </div>

    <Button label="Next Step" class="p-button-outlined button-next" @click="handelButtonNext()"/>
    
  </div>
</template>

<script>
export default {
  methods: {
    handelButtonNext() {
      this.$router.push('/steps/information')
    }
  }
};
</script>

<style>
#load-video {
  margin: 20px;
}

input[type="file"] {
  display: none;
}

.file-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45vw;
  height: 40vh;
  border-radius: 5px;
  background-color: lightgray;
}

.custom-file {
  cursor: pointer;
  padding: 5px;
  border-bottom: 1px solid black;
}

.button-next {
  margin-top: 2%;
}

</style>
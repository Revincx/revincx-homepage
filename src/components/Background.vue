<template>
  <div class="web-bg bg-scaled" :style="styleObject">
  </div>
</template>

<script>
export default {
  name: "Background",
  props: {
    config: Object
  },
  created() {
    // console.log(this.config)
  },
  data() {
    return {
      styleObject: {
        backgroundImage: "url( " + this.config.pageBackground + " )"
        // background: "red"
      }
    }
  }
}
</script>

<style scoped>

.web-bg {
  width: 100%;
  height: 100%;
  position: fixed;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: brightness(0.6);
}

</style>
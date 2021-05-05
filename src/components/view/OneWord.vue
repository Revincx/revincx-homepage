<template>
  <div class="one-word">
    {{ oneWord }}
  </div>
</template>

<script>
export default {
  name: "OneWord",
  props: {
    config: Object
  },
  created() {

  },
  computed: {
    oneWord() {
      if (this.config.oneWord.type === "array"){
        let length = this.config.oneWord.array.length;
        let index = Math.floor(Math.random() * length)
        return this.config.oneWord.array[index]
      }
    }
  }
}
</script>

<style scoped>

.one-word {
  padding: 20px;
  border-top: white solid 1px;
  border-bottom: white solid 1px;
}

</style>
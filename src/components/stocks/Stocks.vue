<template>
  <div>
    <div class="columns is-multiline is-mobile is-centered">
      <stock class="column is-3" v-for="(stock, index) in stocks" :key="index" :stock="stock"></stock>
    </div>
  </div>
</template>

<script>
  import Stock from './Stock.vue'

  export default {
    components: {
      Stock
    },
    computed: {
      stocks() {
        return this.$store.getters.stocks
      }
    }
  }
</script>

<style scoped>
  .column {
    margin: 10px
  }
</style>

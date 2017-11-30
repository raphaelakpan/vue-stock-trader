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
    data() {
      return {
        stocks: [
          { id: 1, name: 'BMW', price: 120 },
          { id: 2, name: 'Facebook', price: 200 },
          { id: 3, name: 'Google', price: 190 },
          { id: 4, name: 'IBM', price: 100 },
          { id: 5, name: 'Andela', price: 90 }
        ]
      }
    }
  }
</script>

<style scoped>
  .column {
    margin: 10px
  }
</style>

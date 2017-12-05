<template>
  <div>
    <h1 class="title">Your Portfolio</h1>
    <div class="columns is-multiline is-mobile is-centered">
      <stock class="column is-3" v-for="(stock, index) in stocks" :key="index" :stock="stock"></stock>
      <div class="card" v-if="stocks.length == 0">
        <p class="card-content"> You have no stocks in your portfolio </p>
      </div>
    </div>
  </div>
</template>

<script>
  import Stock from './Stock.vue'
  import { mapGetters } from 'vuex'

  export default {
    components: {
      Stock
    },
    computed: {
      ...mapGetters({
        stocks: 'stockPortfolio'
      })
    }
  }
</script>

<style scoped>
  .column {
    margin: 10px
  }
</style>

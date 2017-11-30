<template>
  <div id="app">
    <app-header> </app-header>
    <div class="container">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header.vue'

  export default {
    components: {
      'app-header': Header
    },
    data () {
      return {
        numbers: [1,2,3]
      }
    }
  }
</script>


<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
     background: #efefef;
     min-height: 100vh;
  }

  .container {
    margin-top: 20px;
  }

</style>

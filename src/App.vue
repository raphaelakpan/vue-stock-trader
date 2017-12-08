<template>
  <div id="app" class="bg-grey">
    <app-header> </app-header>
    <loading v-if="loading"></loading>
    <div class="container">
        <transition name="slide" mode="out-in">
          <router-view></router-view>
        </transition>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Loading from './components/Loading.vue'
  import { mapGetters } from 'vuex'

  import api from './api'

  export default {
    components: {
      'app-header': Header,
      Loading
    },
    created() {
      this.$store.dispatch('initStocks')
    },
    computed: {
      ...mapGetters(['loading'])
    }
  }
</script>


<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
     min-height: 100vh;
  }

  .bg-grey {
    background: #efefef;
  }

  .container {
    margin-top: 20px;
  }

  .slide-enter-active {
    animation: slide-in 0.3s ease-in forwards;
  }

  .slide-leave-active {
    animation: slide-out 0.3s ease-in forwards;
  }

  @keyframes slide-in {
    from {
      transform: translateY(30px);
      opacity: 0;
    }

    to {
      transform: translateY(0px);
      opacity: 1;
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }

    to {
      transform: translateY(-30px);
      opacity: 0;
    }
  }
</style>

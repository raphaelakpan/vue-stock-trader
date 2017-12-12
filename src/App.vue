<template>
  <div id="app" class="bg-grey">
    <app-header> </app-header>

    <loading v-if="loading"></loading>
    <vue-snotify></vue-snotify>

    <div class="contents">
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
  import { mapActions } from 'vuex'

  import api from './api'

  export default {
    components: {
      'app-header': Header,
      Loading
    },
    methods: {
      ...mapActions([
        'logoutUser',
        'setLogoutTimer'
      ])
    },
    created() {
      const expiresIn = localStorage.getItem('expirationDate')
      if (!expiresIn) { return }

      const expirationDate = new Date(Number(expiresIn))
      const now = new Date()

      if (now >= expirationDate) {
        this.logoutUser()
      } else {
        this.setLogoutTimer((expirationDate - now) / 1000)
      }
    },
    computed: {
      ...mapGetters([
        'loading',
        'notice'
      ])
    },
    watch: {
      notice(value) {
        if (value.type == 'success') {
          this.$snotify.info(value.message, 'Success')
        } else if (value.type == 'warning') {
          this.$snotify.warning(value.message, 'Warning')
        } else if (value.type == 'error') {
          this.$snotify.error(value.message, 'Error')
        }
      }
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

  .contents {
    /* margin: 0 20px; */
    padding: 2rem 5rem
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

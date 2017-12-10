<template>
  <nav class="navbar is-info" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item"> Stock Trader </router-link>

        <button class="button navbar-burger" :class="{ 'is-active': active }" @click="active = !active">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div class="navbar-menu" :class="{ 'is-active': active, 'is-info': active }">
        <div class="navbar-start">
          <router-link to="/stocks" class="navbar-item" active-class="is-active" v-if="isAuthenticated">Stocks</router-link>
          <router-link to="/portfolio" class="navbar-item" active-class="is-active" v-if="isAuthenticated">Portfolio</router-link>
        </div>

        <div class="navbar-end">
          <router-link to="/signin" class="navbar-item" v-if="!isAuthenticated">Sign In</router-link>
          <router-link to="/register" class="navbar-item" v-if="!isAuthenticated">Sign Up</router-link>

          <b-dropdown v-if="isAuthenticated">
            <button class="button navbar-item" slot="trigger" :class="{ 'is-info': !active }">
                <span><i class="fas fa-user  fa-lg"></i></span>
            </button>

            <span class="dropdown-item"> {{ user.email }} </span>
            <a class="dropdown-item" @click="logout"> Logout </a>
          </b-dropdown>
          <a class="navbar-item" @click.prevent="endDay" v-if="isAuthenticated"> End Day </a>
          <b-dropdown v-if="isAuthenticated">
            <button class="button navbar-item" slot="trigger" :class="{ 'is-info': !active }">
                <span>Load & Save</span>
            </button>

            <b-dropdown-item @click="load">Load Data</b-dropdown-item>
            <b-dropdown-item @click="save">Save Data</b-dropdown-item>
          </b-dropdown>
          <span class="navbar-item">
            <strong :class="{ 'col-green': active, 'col-yellow': !active }" v-if="isAuthenticated">
              Funds: {{ funds | currency }}
            </strong>
          </span>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'
  import api from '../api'

  export default {
    data() {
      return {
        active: false
      }
    },
    computed: {
      ...mapGetters([
        'funds',
        'stocks',
        'stockPortfolio',
        'user',
        'isAuthenticated'
      ])
    },
    methods: {
      ...mapActions([
        'randomizeStocks',
        'loadData',
        'setLoading',
        'logOutUser'
      ]),

      endDay() {
        this.randomizeStocks()
      },

      save() {
        const token = this.user.token
        if (!token) { return }

        const data = {
          funds: this.funds,
          stocks: this.stocks,
          stockPortfolio: this.stockPortfolio
        }

        this.setLoading(true)
        api.put('/data.json?auth=' + token, data).then((response) => {
          this.setLoading(false)
        })
      },

      load() {
        this.loadData();
      },

      logout() {
        this.logOutUser()
      }
    }
  }
</script>

<style scoped>
  .col-yellow {
    color: yellow;
  }

  .col-green {
    color: green;
  }
</style>

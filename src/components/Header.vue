<template>
  <nav class="navbar is-info" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item"> Stock Trader </router-link>

        <button class="button navbar-burger">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link to="/stocks" class="navbar-item" active-class="is-active">Stocks</router-link>
          <router-link to="/portfolio" class="navbar-item" active-class="is-active">Portfolio</router-link>
        </div>

        <div class="navbar-end">
          <a class="navbar-item" @click.prevent="endDay"> End Day </a>
          <b-dropdown hoverable>
            <button class="button is-info navbar-item" slot="trigger">
                <span>Load & Save</span>
                <b-icon icon="menu-down"></b-icon>
            </button>

            <b-dropdown-item @click="load">Load Data</b-dropdown-item>
            <b-dropdown-item @click="save">Save Data</b-dropdown-item>
          </b-dropdown>
          <span class="navbar-item"> <strong style="color: yellow"> Funds: {{ funds | currency }} </strong> </span>
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
    computed: {
      ...mapGetters([
        'funds',
        'stocks',
        'stockPortfolio'
      ])
    },
    methods: {
      ...mapActions([
        'randomizeStocks',
        'loadData',
        'setLoading'
      ]),

      endDay() {
        this.randomizeStocks()
      },

      save() {
        const data = {
          funds: this.funds,
          stocks: this.stocks,
          stockPortfolio: this.stockPortfolio
        }

        this.setLoading(true)
        api.put('/data.json', data).then((response) => {
          this.setLoading(false)
        })
      },

      load() {
        this.loadData();
      }
    }
  }
</script>

<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        {{ stock.name }} &nbsp; <small> (Price: ${{ stock.price }}) </small>
      </p>
    </header>
     <footer class="card-footer">
      <p class="card-footer-item">
        <span>
          <b-field>
            <b-input
              v-model="quantity"
              placeholder="Quantity"
              type="number"
              min="0">
            </b-input>
              <button
                class="button is-warning"
                :disabled="quantity <= 0 || insufficientFunds"
                @click="buy">Buy</button>
          </b-field>
        </span>
      </p>
    </footer>
    <div style="color: red" v-if="insufficientFunds">Insufficient Funds</div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import { mapGetters } from 'vuex';

  export default {
    props: {
      stock: Object
    },
    data() {
      return {
        quantity: 0
      }
    },
    computed: {
      ...mapGetters(['funds']),

      insufficientFunds() {
        return this.quantity * this.stock.price > this.funds
      }
    },
    methods: {
      ...mapActions(['buyStock']),

      buy() {
        const order = {
          id: this.stock.id,
          price: this.stock.price,
          quantity: Number(this.quantity)
        }

        this.buyStock(order)
        this.quantity = 0
      }
    }
  }
</script>

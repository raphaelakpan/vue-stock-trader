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
                :disabled="quantity <= 0"
                @click="buyStock">Buy</button>
          </b-field>
        </span>
      </p>
    </footer>
  </div>
</template>

<script>
  export default {
    props: {
      stock: Object
    },
    data() {
      return {
        quantity: 0
      }
    },
    methods: {
      buyStock() {
        const order = {
          id: this.stock.id,
          price: this.stock.price,
          quantity: Number(this.quantity)
        }
        console.log(order)
        this.quantity = 0
      }
    }
  }
</script>

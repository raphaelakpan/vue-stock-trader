<template>
  <div>
    <h1 class="title">Trade or View your Portfolio</h1>
    <div class="card home-card">
      <div class="card-content">
        <li>You may Save & Load your data </li>
        <li>Click on 'End day' to beging a new Day </li>
      </div>

      <footer class="card-footer" v-if="isAuthenticated">
        <div class="card-footer-item">
          Your Funds: &nbsp; <strong>{{ funds | currency }} </strong>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        'funds',
        'isAuthenticated'
      ])
    }
  }
</script>


<style scoped>
  .home-card {
    width: 40%;
    margin: auto;
  }
</style>

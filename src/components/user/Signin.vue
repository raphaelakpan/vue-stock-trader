<template>
  <div class="container">
    <h2 class="subtitle" style="text-align: center">Log In</h2>
    <section>
      <b-field>
        <b-input type="email" placeholder="Email" v-model="user.email"></b-input>
      </b-field>

      <b-field>
        <b-input type="password" placeholder="Password" v-model="user.password"></b-input>
      </b-field>

      <button class="button is-info" style="width: 100%" @click="signIn">Log In</button>
    </section>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    data() {
      return {
        user: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
      ...mapActions(['signInUser']),

      signIn() {
        const data = {
          email: this.user.email,
          password: this.user.password
        }

        this.signInUser(data)
      }
    }
  }
</script>


<style scoped>
  .container {
    width: 30%;
    background: #fff;
    padding: 20px;
    border: 1px solid #bbb;
  }

  @media(max-width: 700px) {
    .container {
      width: 100%;
    }
  }
</style>


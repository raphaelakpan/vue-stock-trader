<template>
  <div class="container">
    <h2 class="subtitle" style="text-align: center">Register</h2>
    <section>
      <b-field>
        <b-input placeholder="Name" v-model="user.name" required> </b-input>
      </b-field>

      <b-field>
        <b-input type="email" placeholder="Email" v-model="user.email" required></b-input>
      </b-field>

      <b-field>
        <b-input type="password" placeholder="Password" v-model="user.password" required></b-input>
      </b-field>

      <b-field>
        <b-input type="password" placeholder="Confirm Password" v-model="user.confirmPassword" required></b-input>
      </b-field>

      <button type="submit" class="button is-info" style="width: 100%" @click="register">Register</button>
    </section>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    data() {
      return {
        user: {
          name: '',
          email: '',
          password: '',
          confirmPassword: ''
        }
      }
    },
    methods: {
      ...mapActions(['registerUser']),

      register() {
        const user = {
          email: this.user.email,
          password: this.user.password
        }

        this.registerUser(user);
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


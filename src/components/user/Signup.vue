<template>
  <div class="container">
    <h2 class="subtitle" style="text-align: center">Register</h2>
    <p class="error" style="text-align: center"> {{ error.password }} </p>
    <p class="error" style="text-align: center"> {{ error.server }} </p>
    <form @submit.prevent="register">
      <section>
        <b-field>
          <b-input placeholder="Name" v-model="user.name" required> </b-input>
        </b-field>

        <b-field>
          <b-input type="email" placeholder="Email" v-model="user.email" required></b-input>
        </b-field>

        <b-field>
          <b-input type="password" placeholder="Password" v-model="user.password" minlength="6" required></b-input>
        </b-field>

        <b-field>
          <b-input type="password" placeholder="Confirm Password" v-model="user.confirmPassword" minlength="6" required></b-input>
        </b-field>

        <button type="submit" class="button is-info" style="width: 100%">Register</button>
      </section>
    </form>
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
        },
        error: {}
      }
    },
    methods: {
      ...mapActions(['registerUser', 'setLoading']),

      register() {
        this.error = {};
        if(!this.validatePassword()) return;

        const user = {
          email: this.user.email,
          password: this.user.password
        }

        this.setLoading(true);
        this.registerUser(user).then(() => {

        }).catch(error => {
          this.error.server = 'There was an error registering your account! Try again'
          this.setLoading(false);
        });
      },

      validatePassword() {
        let valid = true;
        if (this.user.password !== this.user.confirmPassword) {
          this.error.password = 'Passwords do not match!'
          valid = false
        }

        return valid;
      }
    },
  }
</script>

<style scoped>
  .container {
    width: 30%;
    background: #fff;
    padding: 20px;
    border: 1px solid #bbb;
  }

 .error {
    color: rgb(237, 55, 55);
  }

  @media(max-width: 700px) {
    .container {
      width: 100%;
    }
  }
</style>


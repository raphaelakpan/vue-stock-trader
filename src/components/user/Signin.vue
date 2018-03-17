<template>
  <div class="container">
    <h2 class="subtitle" style="text-align: center">Log In</h2>
    <p class="error" style="text-align: center" v-if="error">Invalid Username or Password! </p>
    <form @submit.prevent="signIn">
      <section>
        <b-field>
          <b-input type="email" placeholder="Email" v-model="user.email" required></b-input>
        </b-field>

        <b-field>
          <b-input type="password" placeholder="Password" v-model="user.password" required></b-input>
        </b-field>

        <button class="button is-info" style="width: 100%">Log In</button>
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
          email: '',
          password: ''
        },
        error: false
      }
    },
    methods: {
      ...mapActions(['signInUser', 'setLoading']),

      signIn() {
        const data = {
          email: this.user.email,
          password: this.user.password
        }

        this.error = false
        this.setLoading(true);
        this.signInUser(data).then(() => {
          this.resetFields();
        }).catch(error => {
          this.error = true
          this.setLoading(false);
        })
      },

      resetFields() {
        this.user.email = ''
        this.user.password = ''
        this.error = true
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

  .error {
    color: rgb(237, 55, 55);
  }

  @media(max-width: 700px) {
    .container {
      width: 100%;
    }
  }
</style>


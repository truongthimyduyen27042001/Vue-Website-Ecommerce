<template lang="">
  <div class="container">
    {{/*  logo  */}}
    <div class="row">
      <div class="col-12 text-center pt-3">
        <router-link :to="{ name: 'Home' }">
          <img id="logo" src="../../assets/icon.png" />
        </router-link>
      </div>
    </div>
    {{/*  login form  */}}
    <div class="row">
      <div class="col-12 justify-content-center d-flex flex-row pt-5">
        <div id="login-div">
          <h1 class="pt-4 pl-4 text-left">Login Form</h1>
          <form @submit.prevent class="pt-4 pl-4 pr-4">
            <div class="form-group text-left">
              <label>Email</label>
              <input
                type="email"
                class="form-control"
                v-model="email"
                required
              />
            </div>
            <div class="form-group text-left">
              <label>Password</label>
              <input
                type="password"
                class="form-control"
                v-model="password"
                required
              />
            </div>
            <p
              v-show="errorLogin"
              class="msg-error text-left"
              style="color: red"
            >
              *Login fail
            </p>
            <small class="form-text text-muted"
              >By continuing, you agree to Simplecoding's Conditions of Use and
              Privacy Notice.</small
            >
            <button
              class="btn btn-primary mt-2 py-0"
              type="submit"
              @click="login()"
            >
              Login
              <!--  loading bar will appear when we are making the API call and saveing the token -->
              <div
                v-if="loading"
                class="spinner-border spinner-border-sm"
                role="status"
              >
                <span class="sr-only">Loading...</span>
              </div>
            </button>
          </form>
          <hr />
          <small class="form-text text-muted pt-2 pl-4 text-center mb-2"
            >New to Simplecoding?</small
          >
          <p class="text-center">
            <router-link
              :to="{ name: 'Signup' }"
              class="btn btn-dark text-center mx-auto px-5 py-1 mb-2"
              >Create Your Simplecoding Account</router-link
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  async created() {
    await axios
      .get("https://634f7b84df22c2af7b52462f.mockapi.io/user")
      .then((res) => (this.users = res.data));
  },
  data() {
    return {
      loading: false,
      users: [],
      currentUser: null,
      errorLogin: false,
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      this.users.find((user) => {
        if (
          (user["email"] == this.email) &
          (user["password"] == this.password)
        ) {
          this.currentUser = user;
          this.errorLogin = false;
          localStorage.setItem("currentUser", JSON.stringify(this.currentUser));
          this.$swal({
            text: "Login Successful",
            icon: "success",
            closeOnClickOutside: false,
          });
          this.$router.replace("/");
          return true;
        } else {
          this.$swal({
            text: "Login Faultful",
            icon: "error",
            closeOnClickOutside: false,
          });
          this.errorLogin = true;
          return false;
        }
      });
    },
  },
};
</script>
<style>
.container {
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

#login-div {
  border: 1px solid #dee2e6 !important;
}

.btn-primary {
  padding: 5px 10px;
}

hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
</style>

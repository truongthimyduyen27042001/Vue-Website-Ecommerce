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
            <small class="form-text text-muted"
              >By continuing, you agree to Simplecoding's Conditions of Use and
              Privacy Notice.</small
            >
            <small class="form-text text-error text-left" v-show="isLoginFalse"
              >*Login failed</small
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
export default {
  data() {
    return {
      loading: false,
      users: [],
      currentUser: null,
      isLoginFalse: null,
      email: null,
      password: null
    };
  },
  methods: {
    async login() {
      const result = await this.$store.getters.db.collection("users")
        .where("email", "==", this.email)
        .where('password', "==", this.password)
        .get()
      if (!result.empty) {
        const docId = result.docs[0].id
        const userInfo = await this.$store.getters.db.collection("users").doc(docId).get()
        this.currentUser = {
          id: docId,
          ...userInfo.data()
        }
        localStorage.setItem('currentUser', JSON.stringify(this.currentUser))
        this.$swal({
          text: "Login Successful",
          icon: "success",
          closeOnClickOutside: false,
        })
        await this.$store.dispatch("login", this.currentUser).then(() => {
          this.$router.replace("/");
        })
      }
      else {
        console.log('dang nhap sai')
        this.isLoginFalse = true
      }
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

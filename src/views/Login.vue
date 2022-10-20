<template lang="">
  <div class="container">
    {{/*  logo  */}}
    <div class="row">
      <div class="col-12 text-center pt-3">
        <router-link :to="{ name: 'Home' }">
          <img id="logo" src="../assets/icon.png" />
        </router-link>
      </div>
    </div>
    {{/*  login form  */}}
    <div class="row">
      <div class="col-12 justify-content-center d-flex flex-row pt-5">
        <div id="login-div">
          <h1 class="pt-4 pl-4 text-left">Login Form</h1>
          <form @submit="signin" class="pt-4 pl-4 pr-4">
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
            <button type="submit" class="btn btn-primary mt-2 py-0">
              Continue
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
  name: "SignIn",
};
</script>
<style>
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

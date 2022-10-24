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
    {{/*  register form  */}}
    <div class="row">
      <div class="col-12 justify-content-center d-flex flex-row pt-5">
        <div id="register-div">
          <h1 class="pt-4 pl-4 text-left">Create Account</h1>
          <form class="pt-4 pl-4 pr-4">
            <div class="form-group text-left">
              <label>Email</label>
              <input type="email" class="form-control" required />
            </div>
            <div class="row">
              <div class="col-6">
                <div class="form-group text-left">
                  <label>First Name</label>
                  <input type="text" class="form-control" required />
                </div>
              </div>
              <div class="col-6">
                <div class="form-group text-left">
                  <label>Last Name</label>
                  <input type="text" class="form-control" required />
                </div>
              </div>
            </div>
            <div class="form-group text-left">
              <label>Password</label>
              <input type="password" class="form-control" required />
            </div>
            <div class="form-group text-left">
              <label>Confirm Password</label>
              <input type="password" class="form-control" required />
            </div>
            <button type="submit" class="btn btn-primary mt-2 py-0">
              Create Account
              <!--  loading bar will appear when we are making the API call and saveing the token -->
              <div class="spinner-border spinner-border-sm" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </button>
          </form>
          <hr />
          <small class="form-text text-muted pt-2 pl-4 text-center mb-2"
            >Already Have an Account?</small
          >
          <p class="text-center">
            <router-link
              :to="{ name: 'Signup' }"
              class="btn btn-dark text-center mx-auto px-5 py-1 mb-2"
              >Login Here</router-link
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.container {
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
#register-div {
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

<template>
  <div class="container">
    {{/* logo */}}
    <div class="row">
      <div class="col-12 text-center pt-3">
        <router-link :to="{ name: 'Home' }">
          <img id="logo" src="../../assets/icon.png" />
        </router-link>
      </div>
    </div>
    {{/* register form */}}
    <div class="row">
      <div class="col-12 justify-content-center d-flex flex-row pt-5">
        <div id="register-div" class="col-8">
          <h1 class="pt-4 pl-4 text-left">Create Account</h1>
          <form @submit.prevent class="pt-4 pl-4 pr-4">
            <div class="form-group text-left">
              <label>Email</label>
              <input type="email" v-model="user.email" class="form-control" required />
            </div>
            <div class="row">
              <div class="col-6">
                <div class="form-group text-left">
                  <label>First Name</label>
                  <input type="text" v-model="user.firstname" class="form-control" required />
                </div>
              </div>
              <div class="col-6">
                <div class="form-group text-left">
                  <label>Last Name</label>
                  <input type="text" v-model="user.lastname" class="form-control" required />
                </div>
              </div>
            </div>
            <div class="form-group text-left">
              <label>Address</label>
              <input type="text" v-model="user.address" class="form-control" required />
            </div>
            <div class="form-group text-left">
              <label>Phone</label>
              <input type="text" v-model="user.phone" class="form-control" required />
            </div>
            <div class="row">
              <div class="col-4">
                <div class="form-group text-left">
                  <label>Age</label>
                  <input type="number" name="quantity" min="1" max="100" class="form-control" v-model="user.age"
                    required />
                </div>
              </div>
              <div class="col-8">
                <div class="form-group text-left">
                  <label>Image</label>
                  <input type="file" id="image-input" ref="myFiles" @change="previewFiles"
                    accept="image/jpeg, image/png, image/jpg" multiple />
                  <div id="display-image" :style="{ backgroundImage: 'url(' + imageData + ')' }"></div>
                </div>
              </div>
            </div>
            <div class="form-group text-left">
              <label>Password</label>
              <input type="password" v-model="user.password" class="form-control" required />
            </div>
            <div class="form-group text-left">
              <label>Confirm Password</label>
              <input type="password" class="form-control" required />
            </div>
            <button type="submit" class="btn btn-primary mt-2 py-0" @click="register()">
              Create Account
              <div class="spinner-border spinner-border-sm" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </button>
          </form>
          <hr />
          <small class="form-text text-muted pt-2 pl-4 text-center mb-2">Already Have an Account?</small>
          <p class="text-center">
            <router-link :to="{ name: 'Signup' }" class="btn btn-dark text-center mx-auto px-5 py-1 mb-2">Login Here
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Loading from "../../components/Loading.vue";
import { getDownloadURL } from "firebase/storage";

export default {
  components: {
    Loading,
  },
  setup() {

    // getDownloadURL(imagesRef).then((url) => {
    //   // Insert url into an <img> tag to "download"
    //   console.log(url);
    // });
  },
  data() {
    return {
      imageUrl: [],
      imageDisplay: null,
      isLoading: false,
      user: {
        image: null,
        email: null,
        phone: null,
        password: null,
        firstname: null,
        lastname: null,
        address: null,
        age: null,
      },
      imageData: null,
    };
  },
  methods: {
    async register() {
      //step 0: set loading true
      this.isLoading = true;

      //step 1: uploading image to storage  + getUrl 

      this.imageData = this.$refs.myFiles.files[0];
      var thisRef = this.$store.getters.storageRef.child(this.imageData.name);

      const task = thisRef.put(this.imageData)
      task.on('state_changed', snapshot => {
        console.log('uploading....')
      }, error => {
        console.log('error', error)
      }, () => {
        //dowmload URL 
        task.snapshot.ref.getDownloadURL().then(url => {
          this.user.image = url
          console.log('@@@@@@@')
        }).then(() => {
          console.log('done load image')
          const userInfo = {
            email: this.user.email || null,
            password: this.user.password || null,
            phone: this.user.phone || null,
            firstname: this.user.firstname || null,
            lastname: this.user.lastname || null,
            address: this.user.address || null,
            image: this.user.image || null,
            age: this.user.age || null,
          };
          console.log(userInfo);
          this.$store.dispatch("register", userInfo);
        }).then(() => {
          alert("File Uploaded");
          console.log("Uploaded a blob or file!");
          this.$swal({
            text: "Register Successful",
            icon: "success",
            closeOnClickOutside: false,
          });
          this.$router.replace("/login");
        }).then(() => {
          this.isLoading = false;
        })
      })
     
      // await this.$store.dispatch("register", userInfo);
      // console.log("thanmh cong");
    },
    previewFiles(e) {
      let imageFile = e.target.files[0];
      this.imageData = URL.createObjectURL(imageFile);
    },
  },
};
</script>
<style>
.container {
  height: fit-content !important;
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

#display-image {
  width: 100px;
  height: 100px;
  border: 1px solid black;
  background-position: center;
  background-size: cover;
  margin-top: 10px;
}
</style>

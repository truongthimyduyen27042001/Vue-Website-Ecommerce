<!-- eslint-disable vue/no-unused-components -->
<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <component :is="layout">
        <transition name="slide-fade" mode="out-in">
          <router-view />
        </transition>
      </component>
    </transition>
  </div>
</template>
<script>
import defaultLayout from "./layout/Default.vue";
import unauthLayout from "./layout/UnAuth.vue";
import secretLayout from "./layout/Secret.vue";
export default {
  name: "App",
  components: {
    defaultLayout,
    unauthLayout,
    secretLayout,
  },
  computed: {
    layout() {
      if (this.$route.meta.layout === "unauth") return "unauthLayout";
      else if (this.$route.meta.layout === "secret") return "secretLayout";
      else return "defaultLayout";
    },
  },
};
</script>
<style lnag="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
}

* {
  margin: 0;
  padding: 0;
}
.row {
  margin: 0;
}
p,
h1,
h2,
h3,
ol
ul {
  margin: 0 !important;
}

.pt-10 {
  padding-top: 10px!important;
}

.pt-30 {
  padding-top: 30px!important;
}
.mb-30 {
  margin-bottom: 30px;
}
.pb-30 {
  padding-bottom: 30px;
}

.w-100 {
  width: 100% !important;
}

nav {
  padding: 30px;
}

/* .navbar div {
  width: 100%;
} */
nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

a {
  text-decoration: none;
}

a:hover {
  text-decoration: none !important;
}

ul {
  list-style: none;
}

pt-30 {
  padding-top: 30px !important;
}

pb-30 {
  padding-bottom: 30px !important;
}
.ml-auto {
  margin-left: auto;
}
/* LOADING CSS */
.loading {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: white;
  z-index: 25;
}

.lds-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 340px;
  height: 340px;
  background-color: transparent;
  border-radius: 50%;
}

.lds-ring img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 8px solid #ff9a61;
  border-color: #ff9a61 transparent transparent transparent;
  animation: lds-ring 1.5s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-radius: 50%;
}

.lds-ring div:nth-child(1) {
  animation-delay: -0.2s;
  border-color: #ff9a61 transparent transparent transparent;
}

.lds-ring div:nth-child(2) {
  animation-delay: -1s;
  animation: none;
  border-color: rgba(101, 101, 101, 0.3);
}

@keyframes lds-ring {
  0% {
    transform: rotate(45deg);
  }

  100% {
    transform: rotate(405deg);
  }
}

.text-error {
  color: red !important;
}

.container {
  max-width: 90%;
}
.pb-60 {
  padding-bottom: 60px;
}
</style>

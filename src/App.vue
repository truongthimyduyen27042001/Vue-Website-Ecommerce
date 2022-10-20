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
<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: "Lato", sans-serif;
}
* {
  margin: 0;
  padding: 0;
}
nav {
  padding: 30px;
}

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
</style>

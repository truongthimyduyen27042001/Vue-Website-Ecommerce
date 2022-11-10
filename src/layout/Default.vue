<template>
  <div class="default-inner">
    <Navbar :isShowNavLeft="isShowNavLeft" @toggleNavLeft="toggleNavLeft"  />
    <NavbarLeftVue v-show="isShowNavLeft"  @toggleNavLeft="toggleNavLeft"/>
    <slot></slot>
    <Footer />

  </div>
</template>
<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import SlideBar from "@/components/SlideBar.vue"
import NavbarLeftVue from "@/components/NavbarLeft.vue";
export default {
  components: {
    Navbar,
    Footer,
    SlideBar,
    NavbarLeftVue
  },
  data() {
    return {
      isShowNavLeft: false
    }
  }, 
  methods: {
    toggleNavLeft(value) {
      this.isShowNavLeft = value
    }
  }
};
</script>

<style lang="scss">

</style>

<template>
  <div class="default-inner">
    <Navbar />
    <NavbarLeftVue />
    <div style="margin-top: 74px">
      <slot></slot>
    </div>
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
};
</script>

<style lang="scss">
</style>

<template>
  <div class="secret-inner">
    <Navbar />
    <div class="dashboard" style="margin-top: 74px">
      <SlideBar />
      <slot></slot>
    </div>
    <Footer />
  </div>
</template>
<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import SlideBar from "@/components/SlideBar.vue";
export default {
  components: {
    Navbar,
    Footer,
    SlideBar
},
};
</script>

<style>
.secret-inner {
  display: flex;
  flex-direction: column;
}
.dashboard {
  display: flex;
}
</style>

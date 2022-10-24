<template>
  <div class="default-inner">
    <Navbar />
    <div style="margin-top: 8vh">
      <slot></slot>
    </div>
    <Footer />
  </div>
</template>
<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style lang="scss">
</style>

<template lang="">
  <div class="home-page">
    <ListProducts />
  </div>
</template>
<script>
import ListProducts from "../Product/ListProducts.vue";
export default {
  components: { ListProducts },
  name: "HomeView",
  async created() {
  },
  data() {
    return {
      currentUser: null,
    };
  },
};
</script>
<style>
#background-div {
  background-image: url("../../assets/home.jpg");
}
.bg-cover {
  background-size: cover !important;
}
.page-holder {
  min-height: 100vh;
}
.page-half-holder {
  min-height: 50vh;
}
#heading {
  opacity: 0.8;
}

a:hover {
  color: #0056b3;
}
#content {
  opacity: 0.8;
}
.bg-dark {
  background-color: #343a40 !important;
}
.lead {
  font-size: 1.25rem;
  font-weight: 300;
}
</style>

<template lang="">
  <div class="home-page">
    <div id="background-div" class="page-half-holder bg-cover">
      <div class="container py-5">
        <header class="text-left text-white py-5">
          <h3 class="mb-4 rounded">
            <a
              href="#start-shopping"
              class="bg-white px-2 py-2 rounded"
              id="heading"
              >Start Shopping</a
            >
          </h3>
          <p id="content" class="lead mb-0 bg-dark p-1 rounded">
            Simple Coding Market is for educational purposes only. It can be
            used by developers to learn about developing an ecommerce
            application complete with backend and frontend for Web and Android
          </p>
        </header>
      </div>
    </div>
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

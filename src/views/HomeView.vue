<template lang="">
  <div class="home-page">
    <div id="background-div" class="page-holder bg-cover">
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
    <div class="container">
      <div class="row">
        <h1 class="heading-1 p-3">Top Products</h1>
      </div>
      <div class="row gx-5">
        <div
          v-for="category of categories"
          :key="category.id"
          class="col-xl-4 col-md-6 col-12 d-flex p-3"
          @click="$router.push('/products/' + category.id)"
        >
          <CategoryBox :category="category" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import CategoryBox from "../components/Category/CategoryBox.vue";
export default {
  components: { CategoryBox },
  name: "HomeView",
  data() {
    return {
      baseURL: "https://fakestoreapi.com/",
      categories: [],
    };
  },
  methods: {
    async getCategories() {
      await axios
        .get(this.baseURL + "products")
        .then((res) => {
          this.categories = res.data;
          console.log("@@@@");
          console.log(this.categories);
        })
        .catch((err) => console.log(err));
    },
  },
  mounted() {
    this.getCategories();
  },
};
</script>
<style>
#background-div {
  background-image: url("../assets/home.jpg");
}
.bg-cover {
  background-size: cover !important;
}
.page-holder {
  min-height: 100vh;
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

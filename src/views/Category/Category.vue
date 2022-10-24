<template lang="">
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h3 class="pt-3">Our Categories</h3>
        <router-link id="edit-category" :to="{name: 'AddCategory'}"><button class="btn"> Add Category</button> </router-link>
      </div>
    </div>
    <div class="row gx-5">
      <div v-for="category of categories" :key="category.id" class="col-xl-4 col-md-6 col-12 d-flex p-3">
        <CategoryBox :category="category"/>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import CategoryBox from '../../components/Category/CategoryBox.vue'
export default {
  components : {CategoryBox},
  name: "Category",
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
        })
        .catch((err) => console.log(err));
    },
  },
  mounted() {
    this.getCategories();
  },
};
</script>
<style lang=""></style>

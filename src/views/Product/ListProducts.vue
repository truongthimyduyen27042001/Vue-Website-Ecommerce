<template lang="">
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
</template>
<script>
import axios from "axios";
import CategoryBox from "../../components/Category/CategoryBox.vue";
export default {
  components: { CategoryBox },
  created() {
    this.getCategories();
  },
  data() {
    return {
      baseURL: "https://634f7b84df22c2af7b52462f.mockapi.io/",
      categories: [],
    };
  },
  methods: {
    async getCategories() {
      await axios
        .get(this.baseURL + "product")
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

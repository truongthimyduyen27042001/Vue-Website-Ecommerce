<template>
  <div class="thumbnail-container">
    <div class="row">
      <h1 class="heading-1 p-3">Top Products {{ products.length }}</h1>
    </div>
    <div class="row gx-5">

      <div v-for="product of products" :key="product.id" class="col-xl-4 col-md-6 col-12 d-flex p-3"
        @click="$router.push('/products/' + product.id)">
        <ProductBox :product="product" />
      </div>
    </div>
  </div>
</template>
<script>
import ProductBox from "../../components/Product/ProductBox.vue";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  components: { ProductBox },
  async created() {
    this.fetchUsers();
    this.fetchProducts();
  },
  data() {
    return {
      baseURL: "https://634f7b84df22c2af7b52462f.mockapi.io/",
    };
  },
  methods: {
    ...mapActions(["fetchUsers", "fetchProducts"]),
  },
  mounted() {
    // this.getCategories();
  },
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters(["listUsers", "products"]),
  },
};
</script>
<style lang=""></style>

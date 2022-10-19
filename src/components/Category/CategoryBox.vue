<template>
  <div class="card h-100 w-10">
    <div class="embed-responsive embed-responsive-16by9">
      <img
        class="card-img-top embed-responsive-item"
        :src="category.image"
        alt="Category Image"
      />
    </div>

    <div class="card-body">
      <h5 class="card-title">{{ category.category }}</h5>
      <p class="card-text font-italic">
        {{ category.description.substring(0, 65) }}...
      </p>
      <router-link id="edit-category" :to="{name: 'AddCategory'}"> Edit </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryBox",
  props: ["category"],
  methods: {},
};
</script>

<style scoped>
.card {
  width: 20rem;
  height: 24rem;
  cursor: pointer;
}
.embed-responsive .card-img-top {
  object-fit: cover;
}
a {
  text-decoration: none;
}
.card-body {
  text-align: left;
}
.card-title {
  color: #484848;
  font-size: 1.2rem;
  font-weight: bold;
}
.card-title:hover {
  font-weight: bold;
}
.card-text {
  font-size: 0.9rem;
}
#edit-category {
  float: right;
}
</style>

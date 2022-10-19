<template lang="">
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h3 class="pt-3">Add Category</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6">
        <form>
          <div class="form-group">
            <label>Name</label>
            <input type="text" class="form-control" v-model="categoryName" />
          </div>
          <div class="form-group">
            <label>Description</label>
            <textarea type="text" class="form-control" v-model="description" />
          </div>
          <div class="form-group">
            <label>Image</label>
            <input type="text" class="form-control" v-model="imageUrl" />
          </div>
          <button type="button" class="btn btn-primary" @click="addCategory">
            Submit
          </button>
        </form>
      </div>
      <div class="col-3"></div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      categoryName: "",
      description: "",
      imageUrl: "",
      joke: "",
    };
  },
  methods: {
    async addCategory() {
      const newCategory = {
        categoryName: this.categoryName,
        description: this.description,
        imageUrl: this.imageURL,
      };
      const baseURL = "https://634f7b84df22c2af7b52462f.mockapi.io/";
      await axios({
        method: "post",
        url: baseURL + "category",
        data: JSON.stringify(newCategory),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(() => {
          this.$swal({
            text: "Category Added Successfully",
            icon: "success",
            closeOnClickOutside: false,
          });
          console.log("Runm ok ");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style lang=""></style>

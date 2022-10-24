<template lang="">
  <div class="container">
    <div class="row pt-5">
      <div class="col-md-1"></div>
      <div class="col-md-4 col-12">
        <div class="product-image img-fluid">
          <img
            :src="product.image"
            alt="hinh anh"
          />
        </div>
      </div>
      <div class="col-md-6 col-12 pt-3">
        <div class="product-info">
          <h3 class="product-name">{{product.title}}</h3>
          <h6 class="category font-italic">Smart device</h6>
          <h6 class="font-weight-bold">$ {{product.price}}</h6>
          <p>{{product.category}}</p>
          <div class="product-quantity">
            <button class="btn btn-card btn-minus">
              <font-awesome-icon icon="fa-solid fa-minus" /></button
            ><input
              class="product-quanlity"
              type="text"
              aria-valuenow="1"
              value="1"
              disabled
            /><button class="btn btn-card btn-plus">
              <font-awesome-icon icon="fa-solid fa-plus" />
            </button>
          </div>
          <div class="features pt-3">
            <h5><strong>Features</strong></h5>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Officia quas, officiis eius magni error magnam voluptatem</li>
              <li>
                nesciunt quod! Earum voluptatibus quaerat dolorem doloribus
              </li>
              <li>molestias ipsum ab, ipsa consectetur laboriosam soluta et</li>
              <li>ut doloremque dolore corrupti, architecto iusto beatae.</li>
            </ul>
          </div>
          <div class="btn-control-card d-flex">
            <button id="wishlist-button" class="btn mr-3 p-1 py-0">
              <font-awesome-icon icon="fa-solid fa-cart-shopping" />
              Thêm Vào Giỏ Hàng
            </button>
            <button
              id="show-cart-button"
              type="button"
              class="btn mr-3 p-1 py-0"
            >
              Mua Ngay
            </button>
          </div>
        </div>
      </div>
      <div class="col-md-1"></div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  created() {
  },
  data() {
    return {
      product: null,
      baseURL: "https://fakestoreapi.com/",
    };
  },
  methods: {
    async getProduct() {
      await axios
        .get(`${this.baseURL}products/${this.$route.params.id}`)
        .then((res) => (this.product = res.data))
        .catch((err) => console.log(err));
    },
  },
  mounted() {
    this.getProduct();
  },
};
</script>
<style lang="scss">
.product-image {
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
.product-info {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  .product-quantity {
    display: flex;
    .btn {
      outline: none;
      cursor: pointer;
      letter-spacing: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color 0.1s cubic-bezier(0.4, 0, 0.6, 1);
      width: 32px;
      height: 32px;
      background: transparent !important;
      border: 1px solid rgba(0, 0, 0, 0.09) !important;
    }
    .btn-minus {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      border-right: none;
    }
    .btn-plus {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      border-left: none;
    }
    .btn:focus {
      visibility: hidden;
    }
    input {
      width: 50px;
      height: 32px;
      border-left: 0;
      border-right: 0;
      font-size: 16px;
      font-weight: 400;
      text-align: center;
      line-height: 1;
      letter-spacing: 0;
      transition: background-color 0.1s cubic-bezier(0.4, 0, 0.6, 1);
      border: 1px solid rgba(0, 0, 0, 0.09);
      background: transparent;
      color: rgba(0, 0, 0, 0.8);
    }
    input:focus {
    }
  }
  .features {
    text-align: left;

    h5 {
      font-size: 1.4rem;
      font-weight: bold;
    }
    ul {
      padding-left: 1.5rem;
      li {
        text-align: left;
      }
    }
  }
}
</style>

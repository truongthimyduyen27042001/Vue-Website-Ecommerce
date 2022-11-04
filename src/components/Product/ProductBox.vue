<template>
  <div class="card h-100 w-10">
    <div class="embed-responsive embed-responsive-16by9">
      <img
        class="card-img-top embed-responsive-item"
        :src="product.images[0]"
        alt="product Image"
      />
    </div>

    <div class="card-body">
      <h5 class="card-title">{{ product.product }}</h5>
      <p class="card-text font-italic">
        {{ product.description.substring(0, 65) }}...
      </p>
      <div class="btn-control-card d-flex justify-content-end">
        <button id="show-cart-button" type="button" class="btn mr-3 p-1 py-0">
          Xem chi tiết
        </button>
        <button id="wishlist-button" class="btn mr-3 p-1 py-0">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="cart-shopping"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            class="svg-inline--fa fa-cart-shopping"
          >
            <path
              fill="currentColor"
              d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H76.1l60.3 316.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H179.9l-9.1-48h317c14.3 0 26.9-9.5 30.8-23.3l54-192C578.3 52.3 563 32 541.8 32H122l-2.4-12.5C117.4 8.2 107.5 0 96 0H24zM176 512c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm336-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48z"
              class=""
            ></path>
          </svg>
          Mua hàng
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductBox",
  props: ["product"],
  methods: {},
};
</script>

<style lang="scss" scoped>
.card {
  width: 20rem;
  height: 24rem;
  cursor: pointer;
  img {
    object-fit: contain;
  }
  svg {
    width: 20px !important;
  }
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
#edit-product {
  float: right;
}
</style>

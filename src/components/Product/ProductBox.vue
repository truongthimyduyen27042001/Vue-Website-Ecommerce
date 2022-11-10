<template>
  <div class="card h-100 w-10">
    <!-- <div class="embed-responsive embed-responsive-16by9">
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
    </div> -->
    <div class="item-product">
      <div class="thumbnail-container has-multiimage has_variants">
        <a :href="'/products/' + product.id" class="w-100">
          <img class="img-fluid product__thumbnail w-100 ls-is-cached lazyloaded"
            :src="product.images[0]">
          <img class="img-fluid product__thumbnail-second w-100 ls-is-cached lazyloaded"
            data-src="//cdn.shopify.com/s/files/1/0106/2721/9522/products/16_7ddf94ee-ae5c-44ed-8d85-3cb692e082bf_410x.jpg?v=1598340377"
            alt="Diamond Halo Stud Eget"
            :src="product.images[1]">
        </a>

        <div class="group-buttons d-flex justify-content-center">

          <div class="productWishList">
            <a class="wishlist btn btnProduct btnProductWishlist" :href="'/products/' + product.id" data-toggle="tooltip" data-placement="top"
              title="Tooltip on top">
              <i class="fa-regular fa-heart"></i>
            </a>
          </div>


          <div class="productQuickView d-md-block">
            <a class="btn btnProduct btnProductQuickview" :href="'/products/' + product.id"
              data-url="/products/diamond-halo-stud-earrings-16?view=quick_view"
              data-handle="diamond-halo-stud-earrings-16" data-pid="32404330971202" data-toggle="tooltip"
              data-placement="top" title="" data-original-title="Quick view">
              <i class="fa-solid fa-magnifying-glass"></i>
            </a>
          </div>

        </div>
      </div>
      <div class="product-info">
        <div class="block_product_info">
          <div class="product__title">
            <a :href="'/products/' + product.id">{{product.title.substring(0, 30)}}...</a>
          </div>
          <div class="product__price">
            <!-- snippet/product-price.liquid -->
            <span class="product-price__price"><span class="money" data-currency-usd="$456.00">${{product.price}}</span></span>
          </div>
          <div class="product__review">
            <div class="rating"><span class="spr-badge" id="spr_badge_4670447124546" data-rating="5.0"><span
                  class="spr-starrating spr-badge-starrating"><i class="fa-solid fa-star"></i><i
                    class="spr-icon spr-icon-star" aria-hidden="true"></i><i class="spr-icon spr-icon-star"
                    aria-hidden="true"></i><i class="fa-solid fa-star"></i><i class="spr-icon spr-icon-star"
                    aria-hidden="true"></i><i class="fa-regular fa-star"></i><i
                    class="fa-regular fa-star"></i></span><span class="spr-badge-caption">({{product.rating.count}})</span>
              </span>
            </div>
          </div>
        </div>
        <div class="block_buttons_bottom">
          <div class="group_buttons">
            <form class="" method="post">
              <input type="hidden" name="id" value="32404509687874" />
              <button class="btn btnAddToCart" type="submit">
                <i class="fa-sharp fa-solid fa-bag-shopping"></i>
                <span>Add to cart</span>
              </button>
            </form>
          </div>
        </div>
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

//duyen test new ui 
.item-product {
  position: relative;
  border: 1px solid #eaeaea;
  transition: all .3s linear;
  background: white;
  overflow: hidden;

  .thumbnail-container {
    position: relative;
    overflow: hidden;
    padding: 4px;

    a {
      img {
        height: 300px!important;
        object-fit: contain;
      }
      img:not(.product__thumbnail-second) {
        opacity: 1;
        visibility: initial;
        transition: all .6s linear;
      }

      .product__thumbnail-second {
        position: absolute;
        top: 4px;
        left: 4px;
        visibility: hidden;
        transition: all .5s;
        opacity: 0;
        transform: translateY(20px);
      }
    }

    .group-buttons {
      position: absolute;
      bottom: 16px;
      left: 50%;
      transform: translate(-50%);

      .productWishList {
        margin: 0 5px 0 0;
        transform: translateY(60px);
        opacity: 1;
        visibility: visible;
        transition: all .25s linear;

        a {
          background: white;
          padding: 0;
          width: 38px;
          height: 38px;
          line-height: 38px;
          border-radius: 3px;
          border: none;
          box-shadow: 0 0 5px #00000026;
          cursor: pointer;
        }

      }

      .productQuickView {
        margin: 0 5px 0 0;
        transform: translateY(60px);
        opacity: 1;
        visibility: visible;
        transition: all .32s linear;

        a {
          background: white;
          padding: 0;
          width: 38px;
          height: 38px;
          line-height: 38px;
          border-radius: 3px;
          border: none;
          box-shadow: 0 0 5px #00000026;
          cursor: pointer;
        }
      }

      .productWishList:hover,
      .productQuickView:hover {
        a {
          background-color: #ff7038;

          i {
            color: #fff;
          }
        }
      }
    }
  }

  .product-info {
    padding-bottom: 21px;

    .block_product_info {
      padding-left: 10px;
      padding-right: 10px;
      text-align: left;

      .product__title {
        margin: 15px 0 10px;

        a {
          font-size: 16px;
          font-weight: 600;
          font-family: 'Poppins', sans-serif;
          color: #222222;
        }
      }

      .product__price {
        font-weight: 800;
        color: #ff7038;
        margin-bottom: 10px;
        font-size: 15px;
      }

      .product__review {
        i {
          color: rgb(216, 216, 48);
        }

        .spr-badge-caption {
          margin-left: 10px;
        }
      }
    }

    .block_buttons_bottom {

      form {
        .btnAddToCart {
          width: 100%;
          position: absolute;
          bottom: 0;
          left: 0;
          line-height: 40px;
          height: 40px;
          transition: all .3s ease-in-out;
          text-transform: uppercase;
          font-size: 10px;
          font-weight: 900;
          text-align: center;
          background-color: #000;
          border-radius: 0;
          color: #fff;
          padding: 0 5px;
          transform: translateY(40px);

          span {
            margin-left: 5px;
          }
        }

        .btnAddToCart:hover {
          box-shadow: 0 0 5px #0003;
          background-color: #ff7038;

        }
      }
    }
  }

}

.item-product:hover {
  box-shadow: 5px 5px 10px #0000001a;
  border-color: transparent !important;
  transition: all .35s linear;

  .thumbnail-container {
    a {
      .product__thumbnail-second {
        visibility: visible;
        transform: translateY(0px);
        opacity: 1;
      }
    }

    .group-buttons {

      .productWishList {
        transform: translateY(0px);
      }

      .productQuickView {
        transform: translateY(0px);
      }
    }
  }

  .product-info {
    .block_buttons_bottom {

      form {
        .btnAddToCart {
          transform: translateY(0px);
        }
      }
    }
  }
}
</style>

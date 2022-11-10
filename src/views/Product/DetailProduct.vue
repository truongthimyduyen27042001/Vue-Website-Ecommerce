<template>
  <div class="main-content">
    <!-- loading -->
    <Loading v-show="isLoading" />
    <section class="page-container drawer-page-content" id="PageContainer">
      <div class="page-width" >
        <div class="product-detail-template" v-if="product">
          <div class="block-info mb-90">
            <div class="container" >
              <div class="product-single row" data-product_layout_thumb="zoom" data-zoom_scroll="true"
                data-zoom_contain_lens="true" data-zoomtype="inner" data-lenssize="200" data-lensshape="square"
                data-lensborder="1" data-bordersize="2" data-bordercolour="#f9b61e" data-popup="true">
                <div class="thumb_left block_images col-md-7 col col-xs-12">
                  <div class="product-single__photos d-lg-flex">
                    <div class="proFeaturedImage w-100">
                      <div class="block_content w-100">
                        <img id="ProductPhotoImg" class="img-fluid img-responsive lazyloaded w-100"
                          alt="Kiamond Halo Stud Cum" :src="product.images[0]">
                      </div>
                    </div>
                    <div id="productThumbs">
                      <div class="thumblist" data-pswp-uid="1">
                        <div class="nov-thumb_vertical slick-initialized slick-slider slick-vertical">
                          <div class="slick-list draggable" style="height: 670px;">
                            <div class="slick-track"
                              style="opacity: 1; height: 2144px; transform: translate3d(0px, 2px, 0px);">
                              <div class="thumbItem active slick-slide slick-cloned" tabindex="-1" style="width: 118px;"
                                data-slick-index="-4" aria-hidden="true">
                                <a href="javascript:void(0)" class="product-single__thumbnail" tabindex="-1">
                                  <img :src="product.images[0]" alt="Kiamond Halo Stud Cum">
                                </a>
                              </div>
                              <div class="thumbItem slick-slide slick-cloned" tabindex="-1" style="width: 118px;"
                                data-slick-index="-3" aria-hidden="true">
                                <a href="javascript:void(0)"
                                  data-image="//cdn.shopify.com/s/files/1/0106/2721/9522/products/14_0cc98880-43fe-4dc6-a702-2a7279b44b9c_900x900.jpg?v=1598343117"
                                  data-zoom-image="//cdn.shopify.com/s/files/1/0106/2721/9522/products/14_0cc98880-43fe-4dc6-a702-2a7279b44b9c_1024x1024.jpg?v=1598343117"
                                  class="product-single__thumbnail" tabindex="-1">
                                  <img :src="product.images[1]" alt="Kiamond Halo Stud Cum">
                                </a>
                              </div>
                              <div class="thumbItem slick-slide slick-cloned" tabindex="-1" style="width: 118px;"
                                data-slick-index="-2" aria-hidden="true">
                                <a href="javascript:void(0)" class="product-single__thumbnail" tabindex="-1">
                                  <img :src="product.images[2]" alt="Kiamond Halo Stud Cum">
                                </a>
                              </div>
                              <div class="thumbItem slick-slide slick-cloned" tabindex="-1" style="width: 118px;"
                                data-slick-index="-1" aria-hidden="true">
                                <a href="javascript:void(0)" class="product-single__thumbnail" tabindex="-1">
                                  <img :src="product.images[0]" alt="Kiamond Halo Stud Cum">
                                </a>
                              </div>
                              <div class="thumbItem active slick-slide slick-current slick-active" tabindex="0"
                                style="width: 118px;" data-slick-index="0" aria-hidden="false">
                                <a href="javascript:void(0)"
                                  data-image="//cdn.shopify.com/s/files/1/0106/2721/9522/products/2_194e3a9f-38d1-4300-b6e2-b1b57b04be47_900x900.jpg?v=1598343108"
                                  data-zoom-image="//cdn.shopify.com/s/files/1/0106/2721/9522/products/2_194e3a9f-38d1-4300-b6e2-b1b57b04be47_1024x1024.jpg?v=1598343108"
                                  class="product-single__thumbnail active" tabindex="0">
                                  <img
                                    src="//cdn.shopify.com/s/files/1/0106/2721/9522/products/2_194e3a9f-38d1-4300-b6e2-b1b57b04be47_100x125.jpg?v=1598343108"
                                    alt="Kiamond Halo Stud Cum">
                                </a>
                              </div>
                              <div class="thumbItem slick-slide slick-active" tabindex="0" style="width: 118px;"
                                data-slick-index="1" aria-hidden="false">
                                <a href="javascript:void(0)"
                                  data-image="//cdn.shopify.com/s/files/1/0106/2721/9522/products/2_90ac87fd-873d-4662-afda-a7d66be3f1c1_900x900.jpg?v=1598343113"
                                  data-zoom-image="//cdn.shopify.com/s/files/1/0106/2721/9522/products/2_90ac87fd-873d-4662-afda-a7d66be3f1c1_1024x1024.jpg?v=1598343113"
                                  class="product-single__thumbnail" tabindex="0">
                                  <img
                                    src="//cdn.shopify.com/s/files/1/0106/2721/9522/products/2_90ac87fd-873d-4662-afda-a7d66be3f1c1_100x125.jpg?v=1598343113"
                                    alt="Kiamond Halo Stud Cum">
                                </a>
                              </div>
                              <div class="thumbItem slick-slide slick-active" tabindex="0" style="width: 118px;"
                                data-slick-index="2" aria-hidden="false">
                                <a href="javascript:void(0)"
                                  data-image="//cdn.shopify.com/s/files/1/0106/2721/9522/products/13_2479e0a4-6d54-4053-a7a7-33c857cba455_900x900.jpg?v=1598343117"
                                  data-zoom-image="//cdn.shopify.com/s/files/1/0106/2721/9522/products/13_2479e0a4-6d54-4053-a7a7-33c857cba455_1024x1024.jpg?v=1598343117"
                                  class="product-single__thumbnail" tabindex="0">
                                  <img
                                    src="//cdn.shopify.com/s/files/1/0106/2721/9522/products/13_2479e0a4-6d54-4053-a7a7-33c857cba455_100x125.jpg?v=1598343117"
                                    alt="Kiamond Halo Stud Cum">
                                </a>
                              </div>
                              <div class="thumbItem slick-slide slick-active" tabindex="0" style="width: 118px;"
                                data-slick-index="3" aria-hidden="false">
                                <a href="javascript:void(0)"
                                  data-image="//cdn.shopify.com/s/files/1/0106/2721/9522/products/14_0cc98880-43fe-4dc6-a702-2a7279b44b9c_900x900.jpg?v=1598343117"
                                  data-zoom-image="//cdn.shopify.com/s/files/1/0106/2721/9522/products/14_0cc98880-43fe-4dc6-a702-2a7279b44b9c_1024x1024.jpg?v=1598343117"
                                  class="product-single__thumbnail" tabindex="0">
                                  <img
                                    src="//cdn.shopify.com/s/files/1/0106/2721/9522/products/14_0cc98880-43fe-4dc6-a702-2a7279b44b9c_100x125.jpg?v=1598343117"
                                    alt="Kiamond Halo Stud Cum">
                                </a>
                              </div>
                              <div class="thumbItem slick-slide" tabindex="-1" style="width: 118px;"
                                data-slick-index="4" aria-hidden="true">
                                <a href="javascript:void(0)"
                                  data-image="//cdn.shopify.com/s/files/1/0106/2721/9522/products/15_12b387c5-0754-4e78-a6ac-f279268c1e93_900x900.jpg?v=1598343117"
                                  data-zoom-image="//cdn.shopify.com/s/files/1/0106/2721/9522/products/15_12b387c5-0754-4e78-a6ac-f279268c1e93_1024x1024.jpg?v=1598343117"
                                  class="product-single__thumbnail" tabindex="-1">
                                  <img
                                    src="//cdn.shopify.com/s/files/1/0106/2721/9522/products/15_12b387c5-0754-4e78-a6ac-f279268c1e93_100x125.jpg?v=1598343117"
                                    alt="Kiamond Halo Stud Cum">
                                </a>
                              </div>
                              <div class="thumbItem slick-slide" tabindex="-1" style="width: 118px;"
                                data-slick-index="5" aria-hidden="true">
                                <a href="javascript:void(0)"
                                  data-image="//cdn.shopify.com/s/files/1/0106/2721/9522/products/16_9ebb0241-869f-48b3-aa20-5c5ced6d89a0_900x900.jpg?v=1598343117"
                                  data-zoom-image="//cdn.shopify.com/s/files/1/0106/2721/9522/products/16_9ebb0241-869f-48b3-aa20-5c5ced6d89a0_1024x1024.jpg?v=1598343117"
                                  class="product-single__thumbnail" tabindex="-1">
                                  <img
                                    src="//cdn.shopify.com/s/files/1/0106/2721/9522/products/16_9ebb0241-869f-48b3-aa20-5c5ced6d89a0_100x125.jpg?v=1598343117"
                                    alt="Kiamond Halo Stud Cum">
                                </a>
                              </div>
                              <div class="thumbItem active slick-slide slick-cloned" tabindex="-1" style="width: 118px;"
                                data-slick-index="6" aria-hidden="true">
                                <a href="javascript:void(0)"
                                  data-image="//cdn.shopify.com/s/files/1/0106/2721/9522/products/2_194e3a9f-38d1-4300-b6e2-b1b57b04be47_900x900.jpg?v=1598343108"
                                  data-zoom-image="//cdn.shopify.com/s/files/1/0106/2721/9522/products/2_194e3a9f-38d1-4300-b6e2-b1b57b04be47_1024x1024.jpg?v=1598343108"
                                  class="product-single__thumbnail active" tabindex="-1">
                                  <img
                                    src="//cdn.shopify.com/s/files/1/0106/2721/9522/products/2_194e3a9f-38d1-4300-b6e2-b1b57b04be47_100x125.jpg?v=1598343108"
                                    alt="Kiamond Halo Stud Cum">
                                </a>
                              </div>
                              <div class="thumbItem slick-slide slick-cloned" tabindex="-1" style="width: 118px;"
                                data-slick-index="7" aria-hidden="true">
                                <a href="javascript:void(0)"
                                  data-image="//cdn.shopify.com/s/files/1/0106/2721/9522/products/2_90ac87fd-873d-4662-afda-a7d66be3f1c1_900x900.jpg?v=1598343113"
                                  data-zoom-image="//cdn.shopify.com/s/files/1/0106/2721/9522/products/2_90ac87fd-873d-4662-afda-a7d66be3f1c1_1024x1024.jpg?v=1598343113"
                                  class="product-single__thumbnail" tabindex="-1">
                                  <img
                                    src="//cdn.shopify.com/s/files/1/0106/2721/9522/products/2_90ac87fd-873d-4662-afda-a7d66be3f1c1_100x125.jpg?v=1598343113"
                                    alt="Kiamond Halo Stud Cum">
                                </a>
                              </div>
                              <div class="thumbItem slick-slide slick-cloned" tabindex="-1" style="width: 118px;"
                                data-slick-index="8" aria-hidden="true">
                                <a href="javascript:void(0)"
                                  data-image="//cdn.shopify.com/s/files/1/0106/2721/9522/products/13_2479e0a4-6d54-4053-a7a7-33c857cba455_900x900.jpg?v=1598343117"
                                  data-zoom-image="//cdn.shopify.com/s/files/1/0106/2721/9522/products/13_2479e0a4-6d54-4053-a7a7-33c857cba455_1024x1024.jpg?v=1598343117"
                                  class="product-single__thumbnail" tabindex="-1">
                                  <img
                                    src="//cdn.shopify.com/s/files/1/0106/2721/9522/products/13_2479e0a4-6d54-4053-a7a7-33c857cba455_100x125.jpg?v=1598343117"
                                    alt="Kiamond Halo Stud Cum">
                                </a>
                              </div>
                              <div class="thumbItem slick-slide slick-cloned" tabindex="-1" style="width: 118px;"
                                data-slick-index="9" aria-hidden="true">
                                <a href="javascript:void(0)"
                                  data-image="//cdn.shopify.com/s/files/1/0106/2721/9522/products/14_0cc98880-43fe-4dc6-a702-2a7279b44b9c_900x900.jpg?v=1598343117"
                                  data-zoom-image="//cdn.shopify.com/s/files/1/0106/2721/9522/products/14_0cc98880-43fe-4dc6-a702-2a7279b44b9c_1024x1024.jpg?v=1598343117"
                                  class="product-single__thumbnail" tabindex="-1">
                                  <img
                                    src="//cdn.shopify.com/s/files/1/0106/2721/9522/products/14_0cc98880-43fe-4dc6-a702-2a7279b44b9c_100x125.jpg?v=1598343117"
                                    alt="Kiamond Halo Stud Cum">
                                </a>
                              </div>
                              <div class="thumbItem slick-slide slick-cloned" tabindex="-1" style="width: 118px;"
                                data-slick-index="10" aria-hidden="true">
                                <a href="javascript:void(0)"
                                  data-image="//cdn.shopify.com/s/files/1/0106/2721/9522/products/15_12b387c5-0754-4e78-a6ac-f279268c1e93_900x900.jpg?v=1598343117"
                                  data-zoom-image="//cdn.shopify.com/s/files/1/0106/2721/9522/products/15_12b387c5-0754-4e78-a6ac-f279268c1e93_1024x1024.jpg?v=1598343117"
                                  class="product-single__thumbnail" tabindex="-1">
                                  <img
                                    src="//cdn.shopify.com/s/files/1/0106/2721/9522/products/15_12b387c5-0754-4e78-a6ac-f279268c1e93_100x125.jpg?v=1598343117"
                                    alt="Kiamond Halo Stud Cum">
                                </a>
                              </div>
                              <div class="thumbItem slick-slide slick-cloned" tabindex="-1" style="width: 118px;"
                                data-slick-index="11" aria-hidden="true">
                                <a href="javascript:void(0)"
                                  data-image="//cdn.shopify.com/s/files/1/0106/2721/9522/products/16_9ebb0241-869f-48b3-aa20-5c5ced6d89a0_900x900.jpg?v=1598343117"
                                  data-zoom-image="//cdn.shopify.com/s/files/1/0106/2721/9522/products/16_9ebb0241-869f-48b3-aa20-5c5ced6d89a0_1024x1024.jpg?v=1598343117"
                                  class="product-single__thumbnail" tabindex="-1">
                                  <img
                                    src="//cdn.shopify.com/s/files/1/0106/2721/9522/products/16_9ebb0241-869f-48b3-aa20-5c5ced6d89a0_100x125.jpg?v=1598343117"
                                    alt="Kiamond Halo Stud Cum">
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
                <div class="block_information position-static col-39-16 col-md-5 col col-xs-12 mt-xs-30">
                  <div class="info_content">
                    <h1 itemprop="name" class="product-single__title">sdsdsdsdsd</h1>
                    <div class="product-single__meta">
                      <div itemprop="offers" itemscope="" itemtype="http://schema.org/Offer">
                        <meta itemprop="priceCurrency" content="USD">
                        <link itemprop="availability" href="http://schema.org/InStock">
                        <div class="group-reviews has-border d-flex align-items-center mb-25">
                          <div class="detail-reviews">
                            <span class="spr-badge" id="spr_badge_4670532026434" data-rating="0.0"><span
                                class="spr-starrating spr-badge-starrating"><i class="fa-solid fa-star"></i><i
                                  class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
                                  class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span><span
                                class="spr-badge-caption">(0)</span>
                            </span>

                          </div>
                        </div>
                        <div class="available_product group-single__sku d-flex">
                          <div class="available_name control-label">
                            Available:
                          </div>
                          <span class="product__available in-stock">
                            <span>In stock</span>
                            <i class="fa fa-check-square-o" aria-hidden="true"></i>
                          </span>
                        </div>


                        <div class="group-single__sku has-border">


                          <p itemprop="sku" class="product-single__sku">
                            <span class="label control-label">SKU:</span>
                            <span class="label-sku">This is id</span>
                          </p>
                          <p itemprop="cat" class="product-single__cat"><span
                              class="label control-label">Category:</span>
                            <span>{{ product.category }}</span>
                          </p>
                          <p itemprop="tags" class="product-single__tags"><span class="label control-label">Tags:</span>
                            <a href="/collections/all/black" title="">black</a>,
                            <a href="/collections/all/l" title="">L</a>,
                            <a href="/collections/all/m" title="">m</a>,
                            <a href="/collections/all/pink" title="">Pink</a>,
                            <a href="/collections/all/red" title="">Red</a>,
                            <a href="/collections/all/white" title="">White</a>,
                            <a href="/collections/all/xl" title="">xl</a>
                          </p>
                          <div class="product-single__shortdes" itemprop="description">
                            {{ product.description.substring(0, 300) }} ...
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="block_sticky" style="">
                      <p
                        class="product-single__price product-single__price-nov-product-template d-flex align-items-center">

                        <span
                          class="product-price__price product-price__price-nov-product-template product-price__sale product-price__sale--single">
                          <span id="ProductPrice-nov-product-template" itemprop="price" content="459.0" class=""><span
                              class="money" data-currency-usd="$459.00" data-currency="USD">$459.00</span></span>
                        </span>
                        <s id="ComparePrice-nov-product-template"><span class="money" data-currency-usd="$597.00"
                            data-currency="USD">$597.00</span></s>

                      </p>
                      <form action="/cart/add" method="post" enctype="multipart/form-data"
                        class="product-form product-form-nov-product-template" data-section="nov-product-template">
                        <div class="selectorVariants ">
                          <div class="selector-wrapper" style="display: none;"><select class="single-option-selector"
                              data-option="option1" id="productSelect-option-0">
                              <option value="Default Title">Default Title</option>
                            </select></div><select name="id" id="productSelect" data-section="nov-product-template"
                            class="enable_swatch hide" style="display: none;">
                            <option selected="selected" value="32404573028418">
                              Default Title
                            </option>
                          </select>
                        </div>
                        <div class="has-border group-quantity">

                          <div class="product-form__item product-form__item--quantity mb-30">
                            <label for="Quantity" class="quantity-selector control-label">Quantity:</label>
                            <div class="quick_view_qty">
                              <a href="javascript:void(0);" class="quick_view-qty quick_view-qty-minus">-</a>
                              <input type="number" id="Quantity" name="quantity" disabled value="1" min="1" max="100"
                                step="1" class="quantity-selector product-form__input" pattern="[0-9]*">
                              <a href="javascript:void(0);" class="quick_view-qty quick_view-qty-plus">+</a>
                            </div>
                          </div>

                          <div class="product_option_sub">
                            <div class="product-form__item product-form__item--submit">
                              <button data-handle="kiamond-halo-stud-cum" type="submit" name="add" id="AddToCart"
                                class="btnAddToCart btn product-form__cart-submit mb-15 product-form__cart-submit--small">
                                <span id="AddToCartText">Add to cart</span>
                              </button>
                            </div>

                            <div class="product-form__item product-form__item--checkout">
                              <input type="hidden" name="form_type" value="product"><input type="hidden" name="utf8"
                                value="✓">
                              <div data-shopify="payment-button" data-has-selling-plan="false"
                                data-has-fixed-selling-plan="false" class="shopify-payment-button">
                                <button type="button"
                                  class="shopify-payment-button__button shopify-payment-button__button--unbranded BUz42FHpSPncCPJ4Pr_f jjzYeefyWpPZLH9pIgyw RWJ0IfBjxIhflh4AIrUw"
                                  data-testid="Checkout-button">Buy it now</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <!-- related product -->
        <div class="product-related-template">
          <div class="container">
            <div class="box-related">
              <div class="title_block">
                <span>Related product</span>
              </div>
              <div class="grid">
                <div class="row">
                  <div v-for="index in 4" :key="index" class="col-xl-3 col-md-6 col-12 d-flex p-3"
                    @click="$router.push('/products/' + products[index].id)">
                    <ProductBox :product="products[index]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import ProductBox from "@/components/Product/ProductBox.vue";
import Loading from "@/components/Loading.vue";

export default {
  name: "Detailproduct",
  components: { ProductBox, Loading },
  async created() {
    //set loading before fetch APi product 
    console.log('duyennn')
    let productId = await this.$route.params.id
    await this.getProductById(productId).then(() => {
      this.isLoading = false
    })
  },
  data() {
    return {
      isLoading: true,
      slickOptions: {
        dots: true,
        infinite: true,
        auto: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    };
  },
  methods: {
    ...mapActions(["getProductById"]),
  },
  computed: {
    ...mapGetters(["products", "product"]),
  }
};
</script>
<style lang="scss">
.main-content {
  .page-container {
    .page-width {
      .product-detail-template {
        .block-info {
          .product-single {
            .block_images {
              .product-single__photos {
                .proFeaturedImage {
                  .block_content {
                    box-shadow: 11px 11px 5px #0000000d;

                    img {
                      height: 670px;
                      object-fit: contain;
                    }
                  }
                }

                #productThumbs {
                  order: -1;
                  margin-right: 15px;
                  margin-top: -3px;

                  .nov-thumb_vertical {
                    margin: -6.5px -10px;

                    .slick-list {
                      position: relative;
                      overflow: hidden;
                      display: block;
                      margin: 0;
                      padding: 0;
                      height: 536px;

                      .slick-track {
                        transform: translate3d(0px, -536px, 0px);

                        .thumbItem {
                          width: 118px;
                          position: relative;
                          padding: 6.5px 10px;
                          display: block;
                          height: auto;
                          border: 1px solid transparent;

                          a {
                            border: 1px solid #e8e8e8;
                            display: block;
                            overflow: hidden;
                            height: 110px;

                            img {
                              width: 100%;
                              object-fit: cover;
                            }
                          }
                        }

                        .thumbItem.active {
                          a {
                            border-color: #ff7038;
                          }
                        }

                        .thumbItem:hover {
                          a {
                            border-color: #ff7038;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }

            .block_information {
              text-align: left;

              a {
                color: #444444;
              }

              .info_content {
                padding-left: 40px;
                position: relative;
                height: 100%;

                .product-single__title {
                  color: #222222;
                  font-size: 20px;
                  font-weight: 700;
                  line-height: 1;
                  margin-bottom: 20px !important;
                  text-transform: capitalize;
                  font-family: "Poppins", sans-serif;
                }

                .product-single__meta {
                  .group-reviews {
                    .spr-badge-caption {
                      text-decoration: none;
                      font-size: 11px;
                      color: #afafaf;
                      font-weight: 500;
                      margin-left: 5px;
                    }
                  }

                  .group-single__sku {
                    font-size: 14px;

                    .control-label {
                      color: #444444;
                      text-transform: uppercase;
                      font-weight: 700;
                      font-size: 12px;
                      min-width: 134px;
                      margin-bottom: 10px;
                      display: inline-block;
                    }
                  }
                }

                .product-single__price {
                  border-bottom: 1px solid #e8e8e8;
                  font-size: 25px;
                  font-weight: 800;
                  color: #ff7038;
                  line-height: 1;
                  padding: 17px 30px;

                  s {
                    font-size: 20px;
                    color: #e0e0e0;
                    padding-left: 20px;
                    text-decoration: line-through;
                  }
                }

                .block_sticky {
                  background: #fff;
                  border: 1px solid #e8e8e8;
                  z-index: 9;
                  position: absolute;
                  left: 0;
                  bottom: 0;
                  width: 100%;
                  margin-left: 40px;

                  .product-form {
                    padding: 30px;

                    .group-quantity {
                      .product-form__item {
                        label {
                          color: #444444;
                          text-transform: uppercase;
                          font-weight: 700;
                          font-size: 10px;
                          min-width: 134px;
                          margin-bottom: 10px;
                          display: inline-block;
                        }

                        .quick_view_qty {
                          width: fit-content;
                          border: 1px solid #ebebeb;
                          position: relative;
                          font-weight: 400;
                          font-size: 15px;
                          color: #444444;
                          margin: 0;
                          border-radius: 0;

                          a {
                            padding: 0 10px;
                          }

                          input {
                            text-align: center;
                            border: none;
                            height: 48px;
                            background-color: transparent;
                            border-right: 1px solid #ebebeb;
                            border-left: 1px solid #ebebeb;
                          }
                        }
                      }

                      .product_option_sub {
                        .product-form__item {
                          button {
                            padding: 0 5px;
                            white-space: normal;
                            margin-right: 10px;
                            height: 48px;
                            line-height: 48px;
                            width: 100%;
                            border-radius: 0;
                            background: #e5e5e5;

                            span {
                              font-size: 14px;
                              font-weight: 800;
                              text-transform: uppercase;
                              color: #222222;
                            }
                          }
                        }

                        .product-form__item--submit {
                          button {
                            margin-bottom: 15px;
                          }

                          button:hover {
                            background-color: #ff7038;

                            span {
                              color: #fff;
                            }

                          }
                        }

                        .product-form__item--checkout {
                          button {
                            background-color: black;
                            color: #fff;
                            font-size: 14px;
                            font-weight: 800;
                            text-transform: uppercase;
                            color: #fff;
                            border: none;
                          }

                          button:hover {
                            background-color: #ff7038;
                            color: #fff;
                          }
                        }
                      }
                    }
                  }
                }

              }
            }
          }
        }
      }

      .product-related-template {
        background: #252525;

        .box-related {
          padding-bottom: 5rem;
          margin-top: 3rem;


          .title_block {
            color: #fff;
            font-size: 26px;
            text-align: left;
            font-weight: 800;
            text-transform: uppercase;
            padding-left: 1rem;

          }

          .grid {
            .row {}
          }
        }

      }
    }
  }
}
</style>

<template>
  <div class="home-page">
    <div id="home-page-notify">
      <div class="container">
        <ol class="breadcrumb list-inline" itemscope="" itemtype="http://schema.org/BreadcrumbList">
          <li class="list-inline-item" itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
            <a href="/" title="Home" itemprop="item">
              <span itemprop="name">Home</span>
            </a>
            <meta itemprop="position" content="1" />
          </li>

          <li class="active list-inline-item" itemprop="itemListElement" itemscope=""
            itemtype="http://schema.org/ListItem">
            <span itemprop="item"><span itemprop="name">Women</span></span>
            <meta itemprop="position" content="2" />
          </li>
        </ol>
      </div>
    </div>
    <!-- slick slider -->
    <VueSlickCarousel id="shopify-section-slider" :arrows="true" :dots="true" v-bind="slickOptions">
      <div class="image-slider__item col slick-slide slick-current slick-active" data-slick-index="0"
        aria-hidden="false" tabindex="0">
        <a href="#" class="image-slider__link w-100 d-block" tabindex="0">
          <img src="//cdn.shopify.com/s/files/1/0106/2721/9522/files/bn-2-1_955x700@2x.jpg?v=1614331206"
            class="image-slider__image w-100" />
        </a>
      </div>
      <div class="image-slider__item col slick-slide slick-current slick-active" data-slick-index="0"
        aria-hidden="false" tabindex="0">
        <a href="#" class="image-slider__link w-100 d-block" tabindex="0">
          <img src="//cdn.shopify.com/s/files/1/0106/2721/9522/files/bn-2-1_955x700@2x.jpg?v=1614331206"
            class="image-slider__image w-100" />
        </a>
      </div>
      <div class="image-slider__item col slick-slide slick-current slick-active" data-slick-index="0"
        aria-hidden="false" tabindex="0">
        <a href="#" class="image-slider__link w-100 d-block" tabindex="0">
          <img src="//cdn.shopify.com/s/files/1/0106/2721/9522/files/bn-2-1_955x700@2x.jpg?v=1614331206"
            class="image-slider__image w-100" />
        </a>
      </div>
      <div class="image-slider__item col slick-slide slick-current slick-active" data-slick-index="0"
        aria-hidden="false" tabindex="0">
        <a href="#" class="image-slider__link w-100 d-block" tabindex="0">
          <img src="//cdn.shopify.com/s/files/1/0106/2721/9522/files/bn-2-1_955x700@2x.jpg?v=1614331206"
            class="image-slider__image w-100" />
        </a>
      </div>
    </VueSlickCarousel>
    <!-- end slick slider -->
    <ListProducts />
  </div>
</template>
<script>
import ListProducts from "../Product/ListProducts.vue";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  components: { ListProducts, VueSlickCarousel },
  name: "HomeView",
  async created() { },
  data() {
    return {
      currentUser: null,
      slickOptions: {
        dots: true,
        focusOnSelect: true,
        infinite: true,
        auto: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 3,
        touchThreshold: 5,
      },
    };
  },
};
</script>
<style lang="scss">
#background-div {
  background-image: url("../../assets/home.jpg");
}

/* 
home page notify 
*/
#home-page-notify {
  padding: 25px 15px;
  background: #ededed;
  margin-bottom: 30px;
}

.bg-cover {
  background-size: cover !important;
}

.page-holder {
  min-height: 100vh;
}

.page-half-holder {
  min-height: 50vh;
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

// shopify - slick - slider
.slick-slider {

  .image-slider__item {
    padding-left: 5px;
    padding-right: 5px;
  }

  .slick-arrow {
    background: rgba(0, 0, 0, .3);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    z-index: 2;
    width: 60px;
    height: 80px;
    color: #fff;
    text-align: center;
    line-height: 100px;
  }

  .slick-arrow.slick-prev {
    left: 0;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  .slick-arrow.slick-next {
    right: 0 !important;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;

  }
}

@media (max-width: 776px) {
  .slick-arrow {
    display: none!important;
  }
}
</style>

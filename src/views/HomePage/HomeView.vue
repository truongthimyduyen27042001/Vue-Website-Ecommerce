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
    <div id="main-collection-filters">
      <div class="collection-full_width">

        <div class="collection-topbar d-flex align-items-center pb-60 pb-lg-30">
          <div class="filter_button d-lg-none">
            <i class="fa-solid fa-sliders"></i>
          </div>
          <div class="bl_right d-flex align-items-center ml-auto">
            <div class="gridlist-toggle order-2 order-md-0">
              <a href="#" id="grid-3" title="Grid View 3" data-type="grid-3" class="active"><i
                  class="fa-solid fa-table-cells"></i>
              </a>
              <a href="#" id="grid-2" title="Grid View 2" data-type="grid-2"><i
                  class="fa-solid fa-table-cells-large"></i></a>
              <a href="#" id="list" title="List View" data-type="list"><i class="fa-solid fa-bars"></i></a>
            </div>
            <div class="dropdown filter-collections">
              <div class="dropdown-toggle d-flex align-items-center" data-bs-toggle="dropdown" aria-expanded="false">
                <span class="sort-by__label">Date, old to new</span>
              </div>
              <div  class="dropdown-menu dropdown-menu-right text-right">
                <div value="manual" data-sortby-item="">Featured</div>
                <div value="best-selling" data-sortby-item="">Best selling</div>
                <div value="title-ascending" data-sortby-item="">Alphabetically, A-Z</div>
                <div value="title-descending" data-sortby-item="">Alphabetically, Z-A</div>
                <div value="price-ascending" data-sortby-item="">Price, low to high</div>
                <div value="price-descending" data-sortby-item="">Price, high to low</div>
                <div value="created-ascending" data-sortby-item="">Date, old to new</div>
                <div value="created-descending" data-sortby-item="">Date, new to old</div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-3">
            <SlideBarFilterVue />
          </div>
          <div class="col-lg-9">
            <ListProducts />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ListProducts from "../Product/ListProducts.vue";
import SlideBarFilterVue from "@/components/SlideBarFilter.vue";
export default {
  components: { ListProducts, SlideBarFilterVue },
  name: "HomeView",
  data() {
    return {
      currentUser: null,
      slickOptions: {
        dots: true,
        focusOnSelect: true,
        infinite: true,
        auto: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        touchThreshold: 5,
      },
    };
  },
  
};
</script>
<style lang="scss" scoped>
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

.collection-full_width {
  padding-left: 30px;
  padding-right: 30px;

  .collection-topbar {
    .gridlist-toggle {
      z-index: 1;
      margin-right: 14px;
      display: flex;

      a {
        margin-right: 20px;
        padding-right: 20px;
        position: relative;
        color: #aeaeae;
        font-size: 16px;

        i {
          position: relative;
        }

      }

      a::after {
        content: "";
        display: block;
        width: 1px;
        height: 11px;
        background: #d8d8d8;
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-66%);
      }

      a.active {
        color: #ff7038;
      }

      a:hover {
        color: #ff7038;
      }
    }

    .filter-collections {

      .dropdown-toggle {
        text-transform: uppercase;
        font-weight: 800;
        font-size: 14px;
        color: #000;
        border-bottom: 1px solid black;
        cursor: pointer;
      }

      .dropdown-menu {
        min-width: 185px;
        padding: 15px 0 10px;
        z-index: 999;
        border: none;
        box-shadow: 0 6px 5px #0000001a;
        border-radius: 0;

        div {
          font-size: 14px;
          color: #666;
          font-weight: 500;
          line-height: 26px;
          padding: 0.25rem 1.5rem;
        }

        div:hover {
          text-decoration: underline;
        }
      }
    }
  }
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
  margin-bottom: 80px;

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
    display: none !important;
  }
}
</style>

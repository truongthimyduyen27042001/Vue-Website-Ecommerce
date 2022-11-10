<template>

  <div>
    <div class="navbar navbar-expand-lg navbar-dark bg-dark d-flex flex-column">
      <!-- navbar for mobile -->
      <div class="navbar-mobile d-md-none w-100">
        <div class="d-flex align-items-center">
          <div class="mobile_logo text-center">
            <a href="/" class="site-header__logo-image img-fluid">
              <img class="js" src="//cdn.shopify.com/s/files/1/0106/2721/9522/files/logo_120x.png?v=1614331006" alt=""
                style="max-width: 135px" />
            </a>
          </div>

          <div id="mobile_search">
            <form action="/search" method="get" class="search-header-inline search" role="search"
              style="position: relative">
              <input type="hidden" name="type" value="product" />
              <input class="search-header__input" type="search" name="q" placeholder="What are you looking for ?"
                aria-label="Search your product" autocomplete="off" />
              <button class="search-header__submit text-center btn--link" type="submit">
                <span class="site-header__search-icon">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </span>
              </button>
              <ul class="search-results has-scroll" style="position: absolute; left: 0px; top: 40px; display: none">
              </ul>
            </form>
          </div>

          <div class="d-flex justify-content-end">
            <div id="show-megamenu" class="item-mobile-top close" @click="toggleNavLeft()">
              <i class="fa-solid fa-bars"></i>
            </div>
          </div>
        </div>
      </div>

      <!-- end navbar for mobile -->

      <div class="navbar-top d-none d-md-block">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-3 col-md-2 social-header p-0">
              <div class="block_social">
                <div class="btn-social d-lg-none" @click="isActiveSocial = !isActiveSocial">
                  <i class="fa-solid fa-info"></i>
                </div>
                <ul class="list-inline mb-0" :class="{ active: isActiveSocial }" style="float: left">
                  <li class="list-inline-item btn-social">
                    <i class="fa-brands fa-facebook-f"></i>
                  </li>

                  <li class="list-inline-item btn-social">
                    <a href="#" title="teemax-vinovatheme on Twitter">
                      <i class="fa-brands fa-twitter"></i>
                    </a>
                  </li>

                  <li class="list-inline-item btn-social">
                    <a href="#" title="teemax-vinovatheme on Instagram">
                      <i class="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-6 col-md-8 heading-header text-center">
              <p class="message_text">
                New Offers on the coronavirus (COVID-19) This Weekend only to Get
                50% Flate
              </p>
            </div>
            <div class="col-lg-3 col-md-2 block-right p-0">
              <div class="d-flex align-items-center justify-content-end">
                <div class="dropdown dropdown-language d-flex justify-content-end">
                  <div class="dropdown-toggle d-flex justify-content-center align-items-center" type="button"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    <span class="current-language">EN</span><span class="caret"></span>
                  </div>

                  <div class="dropdown-menu">
                    <div id="languages" class="d-flex flex-column">
                      <span data-currency="EN" class="selected">USD</span>
                      <span data-currency="VN">VN</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="navbar-center d-none d-md-block pt-30 pb-30 w-100">
        <div class="container">
          <div class="row d-flex align-items-center m-0">
            <div class="contentsticky_logo col-lg-2 col-md-3 text-left">
              <h1 class="h2 site-header__logo" itemscope="" itemtype="http://schema.org/Organization">
                <a href="/" itemprop="url" class="site-header__logo-image" style="max-width: 135px">
                  <img class="js img-fluid"
                    src="//cdn.shopify.com/s/files/1/0106/2721/9522/files/logo-2_150x50.png?v=1614331207"
                    alt="teemax-vinovatheme" />
                </a>
              </h1>
            </div>
            <div class="contentsticky_search col-lg-7 col-md-5">
              <div class="search_inline">
                <div class="site_search">
                  <div class="site-header__search">
                    <div id="search_widget" class="site_header__search">
                      <form action="/search" method="get" class="search-header-inline search" role="search"
                        style="position: relative">
                        <input type="hidden" name="type" value="product" />
                        <input class="search-header__input" type="search" name="q"
                          placeholder="What are you looking for ?" aria-label="Search your product"
                          autocomplete="off" />
                        <button class="search-header__submit text-center btn--link" type="submit">
                          <span class="site-header__search-icon">
                            <i class="fa-solid fa-magnifying-glass"></i>
                          </span>
                        </button>
                        <ul class="search-results has-scroll" style="
                          position: absolute;
                          left: 0px;
                          top: 44px;
                          display: none;
                        "></ul>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 d-flex justify-content-end align-items-end p-0">
              <div class="contentsticky_user d-flex justify-content-end align-items-end">
                
                <!-- user loggined control -->
                <div class="site-header_myaccount dropdown" v-if="currentUser">
                  <div class="dropdown" @click="isActiveAccount = !isActiveAccount">
                    <div class="myaccount-title dropdown-toggle text-center" type="button" data-bs-toggle="dropdown"
                      aria-expanded="false">
                      <img
                      src="https://scontent.fsgn2-1.fna.fbcdn.net/v/t39.30808-6/310962542_3334863160127922_2525341124977864171_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=_bZUjqRGlecAX97QQ6T&_nc_ht=scontent.fsgn2-1.fna&oh=00_AfAuOdKDn7E6d8GKyTGW9sV3mDR2_GXSRaYacZJ32s-CFQ&oe=6371DD78"
                        alt="" style="width: 40px; height: 40px; object-fit: cover; border-radius: 100%">
                      <p class="label-header mb-0">{{ currentUser.username }}</p>
                    </div>
                    <div class="account-list dropdown-menu-right" :class="{ show: isActiveAccount }"
                      id="_desktop_account_list" x-placement="bottom-end">
                      <div class="nov_sideward_content">
                        <div class="account-list-content">
                          <div class="dropdown-item">
                            <router-link :to="{ name: 'login' }"><span>Render Login</span></router-link>
                          </div>
                          <div class="dropdown-item">
                            <a class="check-out" href="https://mediamart-vinovatheme.myshopify.com/checkout"
                              rel="nofollow" title="Check out"><span>Check out</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- user no loggin  -->
                <div class="no-user contentsticky_user_control d-flex" v-else>
                  <div class="header_link_myaccount text-center">
                    <div class="form-account text-center">
                      <div class="form-account-title" data-toggle="modal" data-target="#CustomerAccountForm">
                        <i class="fa-solid fa-lock"></i>
                        <router-link :to="{ name: 'login' }"><span>Render Login</span></router-link>
                      </div>
                    </div>
                  </div>

                  <div class="site-header_myaccount dropdown">
                    <div class="dropdown" @click="isActiveAccount = !isActiveAccount">
                      <div class="myaccount-title dropdown-toggle text-center" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        <i class="fa-regular fa-user"></i>
                        <p class="label-header mb-0">Account</p>
                      </div>
                      <div class="account-list dropdown-menu-right" :class="{ show: isActiveAccount }"
                        id="_desktop_account_list" x-placement="bottom-end">
                        <div class="nov_sideward_content">
                          <div class="account-list-content">
                            <div class="dropdown-item">
                              <router-link :to="{ name: 'login' }">Login</router-link>
                            </div>

                            <div class="dropdown-item">
                              <a class="register" href="https://mediamart-vinovatheme.myshopify.com/account/register"
                                rel="nofollow" title="Sign in / Register account"><span>Sign in / Register
                                  account</span>
                              </a>
                            </div>
                            <div class="dropdown-item">
                              <a class="check-out" href="https://mediamart-vinovatheme.myshopify.com/checkout"
                                rel="nofollow" title="Check out"><span>Check out</span>
                              </a>
                            </div>
                            <div class="link_wishlist">
                              <a class="wishlist" href="/pages/page-wishlist" rel="nofollow" title="My Wishlist">
                                <i class="zmdi zmdi-favorite"></i>
                                <span>My Wishlist</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                <div class="contentsticky_cart">
                  <div id="cart_block" class="d-flex flex-column justify-content-center align-items-center">
                    <div class="text-center header-cart">
                      <div class="site-header__cart">
                        <i class="fa-solid fa-cart-shopping"></i>
                        <div id="_desktop_cart_count" class="site-header__cart-count">
                          <span id="CartCount">0</span>
                        </div>
                      </div>
                      <p class="label-header mb-0">My Cart</p>
                    </div>
                    <div id="_desktop_cart">
                      <div id="cart-info" style="display: none"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="navbar-bottom d-none d-md-block w-100">
        <div class="container">
          <div id="AccessibleNav">
            <ul class="site-nav list--inline" id="SiteNav">
              <li class="site-nav--has-dropdown" aria-controls="SiteNavLabel-women">
                <a href="/collections/women" class="site-nav__link site-nav__link--main">
                  Women
                </a>
                <div class="site-nav__dropdown" id="SiteNavLabel-women" aria-expanded="false" role="main">
                  <ul class="d-flex flex-column">
                    <li>
                      <a href="#" class="site-nav__link site-nav__child-link">Dresses</a>
                    </li>

                    <li>
                      <a href="#" class="site-nav__link site-nav__child-link">Tops &amp; Tees</a>
                    </li>

                    <li>
                      <a href="#" class="site-nav__link site-nav__child-link">Skirts</a>
                    </li>

                    <li>
                      <a href="#" class="site-nav__link site-nav__child-link">Jackets &amp; Coats</a>
                    </li>

                    <li>
                      <a href="#" class="site-nav__link site-nav__child-link">Sweaters</a>
                    </li>

                    <li>
                      <a href="#" class="site-nav__link site-nav__child-link">Swimwear</a>
                    </li>

                    <li>
                      <a href="#" class="site-nav__link site-nav__child-link">Boots</a>
                    </li>

                    <li>
                      <a href="#" class="site-nav__link site-nav__child-link">T-shirt</a>
                    </li>

                    <li>
                      <a href="#" class="site-nav__link site-nav__child-link site-nav__link--last">Shoes</a>
                    </li>
                  </ul>
                </div>
              </li>

              <li class="site-nav--has-dropdown hasMegaMenu center">
                <a class="d-flex align-items-center" href="/collections/men" title="Men">
                  <div class="group_title">
                    Men
                    <span class="d-xs-none"> </span>
                  </div>
                  <span class="d-none show_sub"><i class="zmdi zmdi-plus-square"></i></span>
                </a>
                <div class="site-nav__dropdown megaMenu" aria-expanded="false" style="width: 992px" role="main">
                  <div class="menuGroup row spacing-10">
                    <div class="col-lg-12 col-md-12">
                      <div class="row spacing-30">
                        <div class="col-xs-12 col-lg-3 col-md-3">
                          <ul class="novMenuLinks">
                            <li class="menuTitle has_child">
                              <a href="#" title="">Men's Clothing</a>
                            </li>

                            <li class="">
                              <a href="#" title="">T-Shirts</a>
                            </li>

                            <li class="">
                              <a href="#" title="">Tanks</a>
                            </li>

                            <li class="">
                              <a href="#" title="">Polos</a>
                            </li>

                            <li class="">
                              <a href="#" title="">Leather</a>
                            </li>

                            <li class="">
                              <a href="#" title="">Janeiro Stores</a>
                            </li>

                            <li class="">
                              <a href="#" title="">Necessary Clothing</a>
                            </li>

                            <li class="">
                              <a href="#" title="">Express Clothes</a>
                            </li>

                            <li class="">
                              <a href="#" title="">Spark Pretty</a>
                            </li>

                            <li class="">
                              <a href="#" title="">Warm</a>
                            </li>

                            <li class="">
                              <a href="#" title="">Celebrationr</a>
                            </li>
                          </ul>
                        </div>

                        <div class="col-xs-12 col-lg-3 col-md-3">
                          <ul class="novMenuLinks">
                            <li class="menuTitle has_child">
                              <a href="#" title="">Men's Shoes</a>
                            </li>

                            <li class="">
                              <a href="#" title="">Persion Gallery</a>
                            </li>

                            <li class="">
                              <a href="#" title="">Universal Standard</a>
                            </li>

                            <li class="">
                              <a href="#" title="">Designer Promise</a>
                            </li>

                            <li class="">
                              <a href="#" title="">Flagship Store</a>
                            </li>

                            <li class="">
                              <a href="#" title="">Urban Outfitters</a>
                            </li>

                            <li class="">
                              <a href="#" title="">Boathouse</a>
                            </li>
                            <li class="">
                              <a href="#" title="">Attraction</a>
                            </li>
                            <li class="">
                              <a href="#" title="">Pepe Jeans</a>
                            </li>
                            <li class="">
                              <a href="#" title="">Think Twice</a>
                            </li>
                            <li class="">
                              <a href="#" title="">Fashion Store</a>
                            </li>
                          </ul>
                        </div>

                        <div class="col-xs-12 col-lg-3 col-md-3">
                          <ul class="novMenuLinks">
                            <li class="menuTitle has_child">
                              <a href="#" title="">Men's Clothing</a>
                            </li>

                            <li class="">
                              <a href="#" title="">T-Shirts</a>
                            </li>

                            <li class="">
                              <a href="#" title="">Tanks</a>
                            </li>

                            <li class="">
                              <a href="#" title="">Polos</a>
                            </li>

                            <li class="">
                              <a href="#" title="">Leather</a>
                            </li>

                            <li class="">
                              <a href="#" title="">Janeiro Stores</a>
                            </li>

                            <li class="">
                              <a href="#" title="">Necessary Clothing</a>
                            </li>

                            <li class="">
                              <a href="#" title="">Express Clothes</a>
                            </li>

                            <li class="">
                              <a href="#" title="">Spark Pretty</a>
                            </li>

                            <li class="">
                              <a href="#" title="">Warm</a>
                            </li>
                            <li class="">
                              <a href="#" title="">Celebrationr</a>
                            </li>
                          </ul>
                        </div>
                        <div class="col-xs-12 col-lg-3 col-md-3">
                          <ul class="novMenuLinks">
                            <li class="menuTitle has_child">
                              <a href="#" title="">Men's Shoes</a>
                            </li>
                            <li class="">
                              <a href="#" title="">Persion Gallery</a>
                            </li>
                            <li class="">
                              <a href="#" title="">Universal Standard</a>
                            </li>
                            <li class="">
                              <a href="#" title="">Designer Promise</a>
                            </li>
                            <li class="">
                              <a href="#" title="">Flagship Store</a>
                            </li>
                            <li class="">
                              <a href="#" title="">Urban Outfitters</a>
                            </li>
                            <li class="">
                              <a href="#" title="">Boathouse</a>
                            </li>
                            <li class="">
                              <a href="#" title="">Attraction</a>
                            </li>
                            <li class="">
                              <a href="#" title="">Pepe Jeans</a>
                            </li>
                            <li class="">
                              <a href="#" title="">Think Twice</a>
                            </li>
                            <li class="">
                              <a href="#" title="">Fashion Store</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <a href="#" class="site-nav__link site-nav__link--main">
                  Youth &amp; Baby
                </a>
              </li>

              <li>
                <a href="#" class="site-nav__link site-nav__link--main">
                  Home &amp; Living
                </a>
              </li>
              <li>
                <a href="#" class="site-nav__link site-nav__link--main">
                  Phone Case
                </a>
              </li>
              <li>
                <a href="#" class="site-nav__link site-nav__link--main">
                  Accessories
                </a>
              </li>
              <li>
                <a href="#" class="site-nav__link site-nav__link--main"> Mugs </a>
              </li>
              <li>
                <a href="#" class="site-nav__link site-nav__link--main">
                  Jewelry
                </a>
              </li>
              <li>
                <a href="/pages/contact-us" class="site-nav__link site-nav__link--main">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div id="header-sticky" class="d-none d-md-block" :class="{ 'sticky-menu-active': isHeaderSticky }"
      style="background-color: #ff7038;">
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="contentstickynew_logo col-xl-3 col-lg-2 col-md-2">
            <h1 class="h2 site-header__logo" itemscope="" itemtype="http://schema.org/Organization">
              <a href="/" itemprop="url" class="site-header__logo-image" style="max-width: 135px">
                <img class="js img-fluid"
                  src="//cdn.shopify.com/s/files/1/0106/2721/9522/files/logo_150x50.png?v=1614331006"
                  alt="teemax-vinovatheme">
              </a>
            </h1>
          </div>
          <div class="contentstickynew_search col-xl-6 col-lg-8 col-md-8">
            <div class="search_inline">
              <div class="site_search">
                <div class="site-header__search">
                  <div id="search_widget" class="site_header__search">
                    <form action="/search" method="get" class="search-header-inline search" role="search"
                      style="position: relative;">
                      <input type="hidden" name="type" value="product">
                      <input class="search-header__input" type="search" name="q"
                        placeholder="What are you looking for ?" aria-label="Search your product" autocomplete="off">
                      <button class="search-header__submit text-center btn--link" type="submit">
                        <span class="site-header__search-icon">
                          <i class="fa-solid fa-magnifying-glass"></i>
                        </span>
                      </button>
                      <ul class="search-results has-scroll"
                        style="position: absolute; left: 0px; top: 44px; display: none;"></ul>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="contentstickynew_cart col-xl-3 col-lg-2 col-md-2 d-flex justify-content-end">
            <div id="cart_block">
              <div class="text-center header-cart">
                <div class="site-header__cart">
                  <span class="site-header__cart-icon"></span>
                  <div id="_desktop_cart_count" class="site-header__cart-count">
                    <span id="CartCount">0</span>
                  </div>
                </div>
                <p class="label-header mb-0">My Cart</p>
              </div>
              <div id="_desktop_cart">
                <div id="cart-info" style=""></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Navbar",
  async created() {
    let currentUser = await localStorage.getItem("currentUser");
    if (currentUser !== null) {
      this.$store.dispatch("login", JSON.parse(currentUser));
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
    window.addEventListener('scroll', this.handleScroll);
  },
  data() {
    return {
      isHeaderSticky: false,
      token: false,
      isLogin: false,
      isActiveSocial: false,
      isActiveAccount: false,
      isShowNavLeft: false,
    };
  },
  methods: {
    handleScroll() {
      this.isHeaderSticky = (window.scrollY > 300);
    },
    async logout() {
      await localStorage.removeItem("currentUser");
      this.currentUser = null;
      await this.$store.dispatch("login", null);
      location.reload();
    },
    toggleNavLeft() {
      this.$emit('toggleNavLeft', true)

    },
  },
  computed: {
    ...mapGetters(["currentUser"]),
  },
};
</script>
<style lang="scss" scoped>
:root {
  --theme-color-default: #666666;
  --theme-color-primary: #ff7038;
  --primary-color: #41b883;
}

.navbar {
  width: 100%;
  z-index: 15;
  padding: 0;

  .navbar-mobile {
    box-shadow: 0 5px 15px #0000001a;
    position: relative;
    background: #ff7038;
    padding: 10px 15px;

    .mobile_logo {
      margin-right: 15px;
      display: flex;
      max-width: fit-content;

      img {
        width: 100%;
        height: auto;
        max-width: 90px !important;
      }
    }

    #mobile_search {
      position: relative;
      width: 100%;
      margin-right: 15px;

      form {
        input {
          background: #f4f4f4;
          border: none;
          border-radius: 30px;
          padding: 0 20px;
          height: 40px;
          color: #162950;
          max-width: 100%;
          line-height: 1.2;
          display: block;
          width: 100%;
        }

        button {
          position: absolute;
          top: 12px;
          right: 20px;
          background-color: transparent;
          border: 0;
          margin: 0;
        }
      }
    }

    #show-megamenu {
      position: relative;
      cursor: pointer;
      font-size: 20px;
      float: inherit;
      text-shadow: none;
      line-height: 10px;

      i {
        color: black;
        font-size: 20px;
      }
    }
  }

  .navbar-top {
    width: 100%;
    padding: 0.6rem 0;
    background-color: #252525;

    .block_social {
      position: relative;
      float: left;

      .btn-social {
        i {
          min-width: 26px;
          width: 26px;
          height: 26px;
          line-height: 26px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 3px;
          color: #fff;
          transition: all 0.35s ease;
          font-size: 0.8rem;
        }
      }

      //list social
      .list-inline {
        .list-inline-item {
          margin-right: 7px;

          a {
            color: var(--theme-color-default);
            background-color: transparent;
          }
        }

        @media (max-width: 992px) {
          position: absolute;
          width: max-content;
          top: -5px;
          left: 28px;
          transform: translate(20px);
          padding: 5px 10px;
          border-radius: 3px;
          opacity: 0;
          transition: all 0.25s linear;
          z-index: 9;
        }
      }

      .list-inline.active {
        opacity: 1;
        transform: translate(0);
      }
    }

    .message_text {
      color: #ffffff;
      font-size: 12px;
      font-weight: 700;
    }

    .dropdown-language {
      .dropdown-toggle {
        cursor: pointer;
        font-size: 10px;
        font-weight: 900;
        border-radius: 3px;
        border: 1px solid #454545;
        text-transform: uppercase;
        width: 50px;
        height: 26px;
        line-height: 23px;
        text-align: center;
        display: inline-block;
        color: #fff;
      }

      .dropdown-toggle:after {
        content: none !important;
      }

      .dropdown-menu {
        min-width: 75px;
        padding: 0;
        margin: 0;
        border-radius: 0 !important;

        #languages {
          width: 100%;

          span {
            display: block;
            font-weight: 700;
            padding: 11.3px 15px;
            cursor: pointer;
            transition: all 0.2s linear;
            text-transform: uppercase;
            text-align: center;
            font-size: 10px;
          }

          span:not(:last-child) {
            border-bottom: 1px solid #ececec;
          }

          span.selected {
            color: #ff7038;
          }
        }
      }
    }
  }

  .navbar-center {
    background-color: #ff7038;

    .contentsticky_logo {
      h1 {
        a {
          max-width: 135px;
        }
      }
    }

    .contentsticky_search {
      .site_search {
        #search_widget {
          form {
            position: relative;

            input {
              display: block;
              width: 100%;
              border: 1px solid #e3e0d3;
              background-color: #fff;
              color: #162950;
              max-width: 100%;
              line-height: 1.2;
              border-radius: 0;
              padding: 13px 15px;
            }

            input::placeholder {
              color: #cccbcb !important;
              font-weight: 400;
              text-transform: uppercase;
              font-size: 13px;
            }

            input.search-header__input {
              background: #f4f4f4;
              border-color: #fff;
              border: none;
              border: 1px solid #eaeaea;
              border-radius: 30px;
              padding: 0 20px;
              height: 46px;
            }

            button {
              position: absolute;
              right: 4px;
              top: 4px;
              background-color: #ff7038;
              border-radius: 50%;
              width: 38px;
              height: 38px;
              max-height: 38px;
              padding: 0;
              border: none;
              z-index: 9;
              color: #fff;
              cursor: pointer;

              i {
                font-size: 16px;
              }
            }
          }
        }
      }
    }

    .contentsticky_user {
      .header_link_myaccount {
        cursor: pointer;
        margin-right: 40px;
      }

      .site-header_myaccount {
        margin-right: 40px;
      }

      i {
        font-size: 20px;
      }

      p {
        font-size: 12px;
        text-transform: uppercase;
        color: #fff;
        font-weight: 500;
        margin-top: 6px !important;
      }

      .myaccount-title::after {
        content: none !important;
      }

      .account-list {
        position: absolute;
        min-width: 260px;
        opacity: 0;
        visibility: hidden;
        box-shadow: 0 0 10px #0000001a;
        background-color: #fff;
        display: block;
        border: none;
        overflow: hidden;
        top: 78px !important;
        right: 0;
        transition: all 0.5s linear;
        left: inherit !important;
        margin: 0;
        border-radius: 0;
        transform: none !important;
        max-height: 0px;

        .account-list-content div {
          border-bottom: 1px solid #f4f4f4;
          padding: 10px 15px 10px 25px;
          text-align: left;

          a {
            font-size: 12px;
            text-align: left;
            color: #666666 !important;
          }
        }
      }

      .account-list.show {
        opacity: 1;
        visibility: visible;
        max-height: 285px;
      }
    }

    .contentsticky_cart {
      .site-header__cart {
        position: relative;
        width: fit-content;
        margin: auto;

        .site-header__cart-count {
          width: 19px;
          height: 19px;
          line-height: 19px;
          text-align: center;
          background: black;
          position: absolute;
          border-radius: 100%;
          top: 8px;
          right: -10px;

          span {
            font-size: 11px;
            color: #fff;
            font-weight: 700;
            line-height: 19px;
          }
        }
      }
    }
  }

  .navbar-bottom {
    background-color: #fff;
    border-top: 1px solid #eaeaea;

    #AccessibleNav {
      padding-left: 15px;
      padding-right: 15px;

      .site-nav {
        position: relative;
        padding: 0;
        display: flex;
        justify-content: flex-start;

        li {
          display: inline-block;

          a {
            color: #222222;
            font-weight: 700;
            padding: 21px 16px;
            line-height: 1;
            position: relative;
            transition: all 0.35s ease;
            display: inline-block;
          }
        }

        li:first-child {
          a {
            padding-left: 0;
          }
        }

        li:hover {
          a {
            color: #ff7038;
          }
        }

        .site-nav--has-dropdown {
          position: relative;

          .site-nav__dropdown {
            position: absolute;
            margin: 0;
            z-index: 7;
            background: white;
            text-align: left;
            top: 100%;
            left: 0;
            box-shadow: 0 0 15px rgba(black, 0.1);
            transition: all 0.35s linear;
            min-width: 220px;
            opacity: 0;
            visibility: hidden;

            ul {
              padding: 10px 0;
              margin: 0;

              li {
                display: block;
                padding-left: 20px;
                padding-right: 20px;

                a {
                  padding: 12px 0;
                  transition: all 0.1s linear;
                  font-size: 14px;
                  font-weight: 400;
                  color: #666666;
                  display: block;
                  border-bottom: 1px solid #ededed;
                }

                a:hover {
                  color: #ff7038;
                }
              }
            }

            .menuTitle {
              display: block;
              margin-bottom: 15px;

              a {
                cursor: text;
                color: #222222;
                font-size: 0.9rem;
                font-weight: 700;
                text-transform: uppercase;
              }
            }
          }
        }

        .site-nav--has-dropdown:hover {
          .site-nav__dropdown {
            opacity: 1;
            visibility: visible;
            top: 100%;
            z-index: 999;
          }
        }
      }
    }
  }
}

.nav-item {
  margin: 0 10px;
}

.user-image {
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 100%;
}

.dropdown-item:active {
  outline: none;
  background-color: inherit;
}

//sticky 
#header-sticky {
  background-color: #ff7038;
  position: fixed;
  left: 0;
  z-index: 99;
  width: 100%;
  top: -48px;
  box-shadow: 0 6px 5px rgba(0, 0, 0, 0.1);
  transition: top .45s ease;
  padding: 4px 0;
  opacity: 0;
  visibility: hidden;

  .contentstickynew_logo {
    a {
      max-width: 135px;
    }
  }

  .contentstickynew_search {
    form {
      position: relative;

      input {
        display: block;
        width: 100%;
        border: 1px solid #e3e0d3;
        background-color: #fff;
        color: #162950;
        max-width: 100%;
        line-height: 1.2;
        border-radius: 0;
        padding: 13px 15px;
      }

      input.search-header__input {
        background: #f4f4f4;
        border-color: #fff;
        border: none;
        border: 1px solid #eaeaea;
        border-radius: 30px;
        padding: 0 20px;
        height: 46px;
      }

      input.search-header__input:focus-visible {
        outline: none !important;
      }

      .search-header__submit {
        position: absolute;
        right: 4px;
        top: 4px;
        background-color: #ff7038;
        border-radius: 50%;
        width: 38px;
        height: 38px;
        max-height: 38px;
        padding: 0;
        border: none;
        z-index: 9;
        color: #fff;
        cursor: pointer;
      }
    }
  }

  .contentstickynew_cart {
    #cart_block {
      .header-cart {
        .site-header__cart {
          position: relative;
          display: inline-block;
          cursor: pointer;

          .site-header__cart-icon {
            width: 17px;
            height: 24px;
            display: inline-block;
            background: url(https://cdn.shopify.com/s/files/1/0106/2721/9522/t/2/assets/icon-cart-header.png?v=123361965569398462401598329154) no-repeat;
          }

          .site-header__cart-count {
            background-color: #000;
            width: 19px;
            height: 19px;
            line-height: 19px;
            text-align: center;
            position: absolute;
            border-radius: 100%;
            top: 13px;
            right: -10px;

            span {
              font-size: 11px;
              color: #fff;
              font-weight: 700;
              line-height: 19px;
            }
          }
        }
      }
    }
  }
}

#header-sticky.sticky-menu-active {
  top: 0;
  opacity: 1;
  visibility: visible;
}

// responsive
@media (max-width: 992px) {
  #AccessibleNav {

    .site-nav {
      li {
        a {
          padding: 21px 10px !important;
        }
      }
    }
  }
}
</style>

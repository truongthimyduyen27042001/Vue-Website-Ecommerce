<template>
  <div class="canvas-navbar-left">
    <div class="canvas-menu drawer-left">
      <div class="canvas-header-box d-flex justify-content-between align-items-center">
        <div class="title-box">Main Menu</div>
        <div class="close-box"><i class="fa-solid fa-xmark"></i></div>
      </div>
      <nav id="canvas-main-menu" class="mm-menu">
        <div class="mm-panels">
          <div class="mm-panel mm-opened" id="SiteNav">
            <ul class="site-nav list--inline mm-listview">
              <li>
                <div class="site-nav__link site-nav__link--main"><a href="/collections/women">
                    Women
                  </a></div>
                <div class="mm-next"><a href="#SiteNavLabel-women" aria-owns="SiteNavLabel-women"
                    aria-haspopup="true"><i class="fa-solid fa-chevron-right"></i></a></div>
              </li>
              <li>
                <div class="site-nav__link site-nav__link--main"><a href="/collections/women">
                    Men
                  </a></div>
                <div class="mm-next"><a href="#SiteNavLabel-women" aria-owns="SiteNavLabel-women"
                    aria-haspopup="true"><i class="fa-solid fa-chevron-right"></i></a></div>
              </li>
              <li>
                <div class="site-nav__link site-nav__link--main"><a href="/collections/women">
                    Youth & Baby
                  </a></div>
               
              </li>
              <li>
                <div class="site-nav__link site-nav__link--main"><a href="/collections/women">
                    Home & Living
                  </a></div>
               
              </li>
              <li>
                <div class="site-nav__link site-nav__link--main"><a href="/collections/women">
                    Phone Case
                  </a></div>
              
              </li>
              <li>
                <div class="site-nav__link site-nav__link--main"><a href="/collections/women">
                    Accessories
                  </a></div>
              
              </li>
              <li>
                <div class="site-nav__link site-nav__link--main"><a href="/collections/women">
                    Mugs
                  </a></div>
              
              </li>
              <li>
                <div class="site-nav__link site-nav__link--main"><a href="/collections/women">
                    Jewerly
                  </a></div>
              
              </li>
              <li>
                <div class="site-nav__link site-nav__link--main"><a href="/collections/women">
                    Contact Us
                  </a></div>
              
              </li>
            </ul>
          </div>
        </div>
      </nav>


    </div>
    <div class="canvas-overlay" style="
    height: 100%;
    width: 100%;
"></div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.canvas-menu {
  position: fixed;
  top: 0;
  left: auto;
  width: 250px;
  height: 100%;
  transition: all .45s cubic-bezier(.29, .63, .44, 1);
  overflow: hidden;
  z-index: 9999;
  height: 100%;

  .canvas-header-box {
    min-height: 45px;
    padding: 0 20px;
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    background-color: #ee5a20;
  }

  #canvas-main-menu {
    top: 45px;
    background: white;
    border-color: #0000001a;
    color: #000000bf;
    padding: 0;
    text-align: left;
    height: 100%;

    .mm-panels {
      .mm-panel {
        padding: 0;
        overflow: scroll;
        overflow-x: hidden;
        overflow-y: auto;

        ul {
          position: relative;
          padding: 0;

          li {
            text-align: left;
            position: relative;
            display: flex;
            border-bottom: 1px dashed #e1e1e1;

            div {
              padding: 15px 10px 15px 20px !important;

              a {
                text-decoration: none;
                font-size: 12px;
                font-weight: 400;
              }

              a.site-nav__link {
                font-weight: 500;
              }

              a.mm-next {
                background: rgba(3, 2, 1, 0);
                width: 50px;
                position: absolute;
                right: 0;
                top: 0;
                bottom: 0;
                z-index: 2;
              }
            }

            div.mm-next {
              position: absolute;
              right: 0;
              top: 0;

            }
          }

        }
      }
    }
  }
}

.canvas-menu.drawer-left {
  right: 0;
}

.canvas-overlay {
  position: absolute;
  right: 0;
  top: 0;
  background: rgba(0, 0, 0, .5);
  transition: all .3s linear;
  height: 100%;
  width: 100%;
  z-index: 99;

}
</style>

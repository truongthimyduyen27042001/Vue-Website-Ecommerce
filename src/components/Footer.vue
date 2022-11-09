<template>
  <footer>
    <!-- hedaer footer -->
    <div class="container">
      <div class="row block-contact-info">
        <div class="col-12 col-lg-12 col-xl-4 d-flex align-items-center">

          <i class="fa-solid fa-phone"></i>
          <div>
            <span class="title">Call Us :</span>
            <span>(+612) 2531 5600</span>
          </div>
        </div>
        <div class="col-12 col-lg-12 col-xl-4 d-flex align-items-center">

          <i class="fa-solid fa-envelope"></i>
          <div>
            <span class="title">Email :</span>
            <span>truongmyduyen2704@gmail.com</span>
          </div>
        </div>
        <div class="col-12 col-lg-12 col-xl-4 d-flex align-items-center">

          <i class="fa-solid fa-location-dot"></i>
          <div>
            <span class="title">Address :</span>
            <span>PO Box 1622 Vissaosang Street West</span>
          </div>
        </div>
      </div>
    </div>
    <!-- content footer -->
    <div class="footer-layout">

      <div class="container pt-75 pb-60 ">
        <div class="row">
          <div class="col-md-12 col-lg-4 col-xl-3 footer_menu">
            <div class="title-block">Customer Service</div>

            <ul style="list-style-type: none">
              <li>
                <a class="footer-link font-weight-light" href="#">Contact Us</a>
              </li>
              <li>
                <a class="footer-link font-weight-light" href="#">Help and advice</a><br />
              </li>
              <li>
                <a class="footer-link font-weight-light" href="#">Shipping and conditions</a><br />
              </li>
              <li>
                <a class="footer-link font-weight-light" href="#">Term and conditions</a><br />
              </li>
              <li>
                <a class="footer-link font-weight-light" href="#">Refund Policy</a><br />
              </li>
            </ul>
          </div>
          <div class="col-md-12 col-lg-4 col-xl-3 footer_menu">
            <div class="title-block">Information</div>

            <ul style="list-style-type: none">
              <li>
                <a class="footer-link font-weight-light" href="#">Testimonials </a>
              </li>
              <li>
                <a class="footer-link font-weight-light" href="#">My Account</a><br />
              </li>
              <li>
                <a class="footer-link font-weight-light" href="#">Payments & Returns</a><br />
              </li>
              <li>
                <a class="footer-link font-weight-light" href="#">View Catelogues Online</a><br />
              </li>
            </ul>
          </div>
          <div class="col-md-12 col-lg-4 col-xl-3 footer_menu">
            <div class="title-block">About Us</div>

            <ul style="list-style-type: none">
              <li>
                <a class="footer-link font-weight-light" href="#">Who Are We ?</a>
              </li>
              <li>
                <a class="footer-link font-weight-light" href="#">Corporate Respponsibility</a><br />
              </li>
              <li>
                <a class="footer-link font-weight-light" href="#">California Laws</a><br />
              </li>
              <li>
                <a class="footer-link font-weight-light" href="#">Privacy Policy</a><br />
              </li>
            </ul>
          </div>
          <div class="col-lg-8 col-xl-3 footer_newsletter footer_menu">
            <div class="title-block">Newseletter</div>
            <div class="des">
              Sign up for newsletter to receive special offers and exclusive news about TEE products
            </div>
            <div class="block-content">
              <form method="post" action="/contact#contact_form" id="contact_form" accept-charset="UTF-8"
                class="contact-form"><input type="hidden" name="form_type" value="customer"><input type="hidden"
                  name="utf8" value="✓">
                <div class="input-group">
                  <input type="hidden" name="contact[tags]" value="newsletter">
                  <input type="email" name="contact[email]" id="Email_Footer"
                    class="input-group__field newsletter__input form-control" value="" placeholder="Enter your email">
                </div>
                <div class="input-group__btn hv_after mt-10">
                  <button type="submit" class="btn newsletter__submit" name="commit" id="Subscribe_footer">
                    <span class="newsletter__submit-text--large">Subscribe</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- footer coppy right -->
    <div class="footer_copyright pb-xs-80">
      <div class="container">
        <div class="d-flex align-items-center justify-content-between d-xs-block text-xs-center">
          <div class="copyright mb-xs-20">Copyright © 2020 Vinovathemes. All rights reserved.</div>

          <div class="payment_icons">
            <img class=" lazyloaded"
              data-src="//cdn.shopify.com/s/files/1/0106/2721/9522/files/payment_240x25.png?v=1614331012" alt="img"
              src="//cdn.shopify.com/s/files/1/0106/2721/9522/files/payment_240x25.png?v=1614331012">
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
footer {
  font-size: 16px;
  padding: 0;
  margin: 0;
  border-top: 1px solid rgba(0, 0, 0, .125);

  .block-contact-info {
    width: 100%;
    padding: 20px 0;
    margin: auto;
    font-size: 13px;
    color: #666666;

    i {
      min-width: 18px;
      height: 18px;
      margin-right: 15px;
    }

    .title {
      font-weight: 700;
      color: #222222;
      font-family: 'Poppins', sans-serif;
      font-size: 14px;
    }
  }

  .footer-layout {
    background-color: #303030;

    .footer_menu {
      .title-block {
        font-size: 16px;
        font-weight: 800;
        text-transform: uppercase;
        color: #fff;
        margin-bottom: 25px;
        text-align: left;
      }

      ul {
        padding: 0;
        margin: 0;

        li {
          padding: 17px 0;
          max-width: 200px;
          font-size: 14px;

          a {
            color: #909090;
            font-family: 'Poppins', sans-serif;
            transition: 0.2s ease-in;
          }

          a:hover {
            color: #ee5a20;
          }
        }

        li:not(:last-child) {
          border-bottom: 1px solid #424242;
        }
      }
    }

    .footer_newsletter {
      .des {
        color: #909090;
        font-family: 'Poppins', sans-serif;
        font-size: 14px;
        text-align: left;
        margin-bottom: 25px;
      }

      .block-content {
        .input-group {
          input {
            height: 48px;
            background-color: #fff;
            border: none;
            border-radius: 0;
            text-align: center;
            font-size: 12px;
            text-transform: uppercase;
          }

          input:focus {
            box-shadow: none;
          }
        }

        .input-group__btn {
          margin-top: 10px;

          button {
            margin: 0;
            border-radius: 0;
            border: none;
            background: #ff7038;
            height: 48px;
            min-height: 48px;
            width: 100%;
            position: relative;

            span {
              color: #fff;
              text-transform: uppercase;
              font-family: 'Roboto', sans-serif;
              font-size: 12px;
              position: relative;
              z-index: 9;
            }
          }

          button:after {
            content: "";
            position: absolute;
            z-index: 1;
            width: 0%;
            height: 100%;
            top: 0;
            left: 0;
            background: #ee5a20;
            transition: all .3s ease;
          }

          button:hover:after {
            width: 100%;
          }
        }

      }
    }
  }

  .footer_copyright {
    padding-top: 20px;
    padding-bottom: 20px;

    .copyright {
      font-size: 12px;
      color: #666666;
      font-weight: 700;
    }
  }
}

.pt-75 {
  padding-top: 75px;
}

.pb-60 {
  padding-bottom: 60px;
}

.text-light {
  color: #f8f9fa !important;
}

.font-weight-bold {
  font-weight: 700 !important;
}

ul {
  margin-bottom: 1rem;
  list-style-type: none;
  text-align: left;
  padding-left: 2rem;
}

li {
  padding-left: 0;
  padding-bottom: 10px;
}

.pb-2 {
  padding-bottom: 0.5rem !important;
}

.footer-link {
  color: #ddd;
}

.font-weight-light {
  font-weight: 300 !important;
}
</style>

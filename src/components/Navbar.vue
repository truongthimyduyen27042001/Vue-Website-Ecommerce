<template>
  <div class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link class="navbar-brand" :to="{ name: 'home' }">
      <img src="../assets/icon.png" alt="" id="logo" />
    </router-link>
    <!--    Burger Button-->
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <form action="" class="form-inline ml-auto mr-auto">
        <div class="input-group">
          <input
            type="text"
            size="100"
            class="form-control"
            placeholder="Search Items"
          />
          <div class="input-group-prepend">
            <span class="input-group-text" id="search-button-navbar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                />
              </svg>
            </span>
          </div>
        </div>
      </form>
      {{/*  dropdowns  */}}
      <ul class="navbar-nav ml-auto">
        <li class="nav-item" data-v-47c8c227="">
          <div id="cart" data-v-47c8c227="">
            <span id="nav-cart-count" data-v-47c8c227="">0</span
            ><a href="/cart" class="text-light" data-v-47c8c227=""
              ><i
                class="fa fa-shopping-cart"
                data-v-47c8c227=""
                style="font-size: 36px"
              ></i
            ></a>
          </div>
        </li>
        <!--      UserLogin drop down-->
        <li
          class="nav-item dropdown d-flex nav-justified bi-align-center"
          style="border-radius: 50%"
          v-if="isLogin"
        >
          <img
            src="https://scontent-sin6-4.xx.fbcdn.net/v/t39.30808-6/312817449_1475050596241563_4059668835435322742_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Pl-6vtdvPt4AX_yx8FX&_nc_ht=scontent-sin6-4.xx&oh=00_AT_yyxQp2lWwl7gcWwxpkgTQasVY3B3Dp0NZo3WF_hOlRw&oe=635B3E4D"
            alt=""
            class="user-image"
          />
          <a
            class="nav-link text-light dropdown-toggle"
            href="#"
            id="navbarDropdownAdmin"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {{ currentUser.name }}
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownAdmin">
            <router-link class="dropdown-item" :to="{ name: 'AdminCategory' }"
              >Category</router-link
            >
            <router-link class="dropdown-item" :to="{ name: 'AdminProduct' }"
              >Products</router-link
            >
            <router-link
              class="dropdown-item"
              :to="{ name: 'home' }"
              @lick="logout()"
              >Log out</router-link
            >
          </div>
        </li>
        <!-- user is not login -->
        <div class="d-flex user-no-auth" v-else>
          <li class="nav-item" role="button">
            <router-link
              class="nav-link text-light"
              href="#"
              :to="{ name: 'login' }"
              >Login</router-link
            >
          </li>
          <li class="nav-item" role="button">
            <router-link
              class="nav-link text-light"
              href="#"
              :to="{ name: 'register' }"
              >Register</router-link
            >
          </li>
        </div>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "Navbar",
  async created() {
    this.currentUser = await JSON.parse(localStorage.getItem("currentUser"));
    if (this.currentUser !== null) {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
  },
  data() {
    return {
      token: false,
      currentUser: null,
      isLogin: false,
    };
  },
  methods: {
    logout() {},
  },
};
</script>
<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 15;
  #cart {
    position: relative;
    #nav-cart-count {
      position: absolute;
      background-color: red;
      height: fit-content;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      top: -40%;
      right: -40%;
      color: white;
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
</style>

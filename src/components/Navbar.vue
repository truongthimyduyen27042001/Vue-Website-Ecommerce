<template lang="">
  <div class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link class="navbar-brand" :to="{ name: 'Home' }">
      <img id="logo" src="../assets/icon.png" />
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
        <!--      Admin drop down-->
        <li class="nav-item dropdown">
          <a
            class="nav-link text-light dropdown-toggle"
            href="#"
            id="navbarDropdownAdmin"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Admin
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownAdmin">
            <router-link class="dropdown-item" :to="{ name: 'AdminCategory' }"
              >Category</router-link
            >
            <router-link class="dropdown-item" :to="{ name: 'AdminProduct' }"
              >Products</router-link
            >
          </div>
        </li>

        <!--      Account drop down-->
        <li class="nav-item dropdown">
          <a
            class="nav-link text-light dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Accounts
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <router-link
              class="dropdown-item"
              v-if="!token"
              :to="{ name: 'Signin' }"
              >WishList</router-link
            >
            <router-link class="dropdown-item" v-else :to="{ name: 'WishList' }"
              >WishList</router-link
            >
            <router-link
              class="dropdown-item"
              v-if="!token"
              :to="{ name: 'Signin' }"
              >Log In</router-link
            >
            <router-link
              class="dropdown-item"
              v-if="!token"
              :to="{ name: 'Signup' }"
              >Sign Up</router-link
            >
            <a class="dropdown-item" v-if="token" href="#" @click="signout"
              >Sign Out</a
            >
          </div>
        </li>
        {{/*  orders  */}}
        <li class="nav-item" data-v-47c8c227="">
          <a
            href="/order"
            class="router-link-active router-link-exact-active nav-link text-light"
            data-v-47c8c227=""
            aria-current="page"
            >Orders</a
          >
        </li>
        {{/*  shopping carts  */}}
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
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "Navbar",
  data() {
    return {
      token: false,
    };
  },
};
</script>
<style lang=""></style>

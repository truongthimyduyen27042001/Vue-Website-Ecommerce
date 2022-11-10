<template>
  <div class="loading" v-show="isLoading">
    <div class="lds-ring">
      <img src="../assets/logo.png" alt="" />
      <div></div>
      <div></div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['isLoading']

};
</script>
<style lang="scss">
/* LOADING CSS */
.loading {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #ff7038;
  z-index: 100;
}

.lds-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 340px;
  height: 340px;
  background-color: transparent;
  border-radius: 50%;
}

.lds-ring img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 8px solid black;
  border-color: black transparent transparent transparent;
  animation: lds-ring 1.5s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-radius: 50%;
}

.lds-ring div:nth-child(1) {
  animation-delay: -0.2s;
  border-color: black transparent transparent transparent;
}

.lds-ring div:nth-child(2) {
  animation-delay: -1s;
  animation: none;
  border-color: rgba(216, 216, 216, 0.3);
}

@keyframes lds-ring {
  0% {
    transform: rotate(45deg);
  }

  100% {
    transform: rotate(405deg);
  }
}
</style>

<template>
  <div class="unauth-inner">
    <slot />
  </div>
</template>

<script>
export default {
  components: {},
};
</script>
<style>
* {
  padding: 0px;
  margin: 0px;
}
.unauth-inner {
  width: 100vw;
  height: 100vh;
  padding: 20px;
}
</style>

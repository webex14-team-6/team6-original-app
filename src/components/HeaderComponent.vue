<template>
  <div class="header">
    <div class="beer-img">
      <h1>
        <img src="../assets/oshieteosake.png" alt="oshiete osake" />
      </h1>
    </div>
    <HamburgerMenu />
  </div>
</template>

<script>
import HamburgerMenu from "../components/HamburgerMenu.vue"

export default {
  components: {
    HamburgerMenu,
  },
}
</script>

<style scoped>
.header {
  width: 100%;
  height: 100px;
  position: fixed;
  background-image: url(../assets/concrete.jpg);
  background-size: cover;
}

.beer-img {
  width: 140px;
  height: 140px;
  margin: auto;
  background-image: url(../assets/neonbeer.png);
  background-size: cover;
}

h1 {
  margin-block-start: 0;
}

h1 img {
  width: 200px;
  height: 40px;
  margin-left: -30px;
  margin-top: 30px;
}
</style>

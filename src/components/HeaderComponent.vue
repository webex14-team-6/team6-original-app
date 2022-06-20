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
  z-index: 50;
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

@media screen and (max-width: 500px) {
  .header {
    height: 80px;
  }

  .beer-img {
    width: 100px;
    height: 100px;
  }

  h1 img {
    width: 150px;
    height: 30px;
    margin-left: -25px;
    margin-top: 20px;
  }
}
</style>

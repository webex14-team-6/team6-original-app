<template>
  <Header />
  <HamburgerMevu />
  <AlcholeCategory />
</template>

<script>
import Header from "./components/Header.vue"
import HamburgerMevu from "./components/HamburgerMevu.vue"
import AlcholeCategory from "./components/AlcholeCategory.vue"

export default {
  components: {
    Header,
    HamburgerMevu,
    AlcholeCategory,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}
</style>

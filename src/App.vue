<template>
  <Header />
  <router-view />
  <HamburgerMevu />
</template>

<script>
import Header from "./components/Header.vue"
import HamburgerMevu from "./components/HamburgerMevu.vue"

export default {
  components: {
    Header,
    HamburgerMevu,
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

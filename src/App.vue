<template>
  <Header />
  <router-view />
</template>

<script>
import Header from "./components/HeaderComponent.vue"
export default {
  components: {
    Header,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>

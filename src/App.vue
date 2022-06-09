<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <router-link to="/shindan">診断</router-link>
  </nav>
  <router-view />
  <AlcholeCategory />
</template>

<script>
import AlcholeCategory from "./components/AlcholeCategory.vue"

export default {
  components: {
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
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<template>
  <div class="alchole-content">
    <!--<img v-bind:src="alchole.image" v-on:click="openModal" />-->
    <div v-on:click="openModal" class="name" v-motion-slide-top>
      {{ alchole.name }}
    </div>
  </div>
  <div class="bottomUp">
    <div class="overlay" v-show="showContent">
      <div class="bottomUpcontent">
        <button class="button" v-on:click="closeModal">×</button>
        <div class="Name">{{ alchole.name }}</div>
        <img class="photo" v-bind:src="alchole.image" v-motion-pop-visible />
        <div class="content">・{{ alchole.content.frequency }}%</div>
        <div class="content">・{{ alchole.content.overview }}</div>
        <div class="content">・{{ alchole.content.taste }}</div>
        <div class="content">・{{ alchole.content.thoughts }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["alchole"],
  data: function () {
    return {
      showContent: false,
    }
  },
  methods: {
    openModal: function () {
      this.showContent = true
    },
    closeModal: function () {
      this.showContent = false
    },
  },
}
</script>

<style scoped>
.bottomUpcontent {
  z-index: 2;
  width: 30%;
  height: 60%;
  padding: 1em;
  background: rgba(255, 255, 255);
  border: solid;
  border-color: #000000;
}
.Name {
  font-size: 35px;
}
.content {
  text-align: left;
}
.overlay {
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
.button {
  position: relative;
  right: -45%;
  border-color: #000000;
  font-size: 25px;
}

.photo {
  width: 42%;
  height: 28%;
}

.alchole-content {
  text-align: left;
}

.name {
  font-size: 15px;
  font-family: 游ゴシック;
  font-weight: bold;
  display: inline-block;
  margin: 2mm;
  padding: 1mm;
  box-shadow: 0 0 0 2px #000000, 6px 6px 0 0 #fff, 6px 6px 0 2px #000000;
}
</style>

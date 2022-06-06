<template>
  <div class="alchole-content">
    <img v-bind:src="alchole.image" v-on:click="openModal" />
    <div>{{ alchole.name }}</div>
  </div>
  <div class="bottomUp">
    <div class="overlay" v-show="showContent">
      <div class="bottomUpcontent">
        <div>度数:{{ alchole.content.frequency }}℃</div>
        <div>{{ alchole.content.overview }}</div>
        <div>{{ alchole.content.taste }}</div>
        <div>{{ alchole.content.thoughts }}</div>
        <button v-on:click="closeModal">Close</button>
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

<style>
.bottomUpcontent {
  z-index: 2;
  width: 50%;
  padding: 1em;
  background: rgba(208, 243, 243, 0.939);
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
</style>

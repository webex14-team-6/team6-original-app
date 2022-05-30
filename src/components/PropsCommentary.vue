<template>
  <div class="alchole-content">
    <div>名前:{{ alchole.name }}</div>
    <div>度数:{{ alchole.frequency }}℃</div>
    <div>味:{{ alchole.taste }}</div>
    <div>概要:{{ alchole.overview }}</div>
    <div>写真{{ alchole.image }}</div>
  </div>
</template>

<script>
export default {
  props: ["alchole"],
}
</script>

<style>
.alchole-content {
  width: 100%;
  height: 1000px;
}
</style>

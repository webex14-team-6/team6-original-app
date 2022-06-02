<template>
  <div class="alchole-content">
    <div>名前:{{ alchole.name }}</div>
    <div>写真{{ alchole.image }}</div>
    <div>概要:{{ alchole.content }}</div>
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
}
</style>

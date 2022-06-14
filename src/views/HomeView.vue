<template>
  <div class="mainvisual">
    <img src="../assets/mainvisual.png" alt="mainvisual" />
  </div>
  <div class="shindan-container">
    <h2>オススメお酒診断</h2>
  </div>
  <div class="osusume-container">
    <h2>お酒解説</h2>
  </div>
</template>

<style scoped>
.mainvisual img {
  width: 100%;
  height: 600px;
  object-fit: cover;
}

.shindan-container {
  width: 50%;
  height: 400px;
  background-color: gray; /* 識別するための仮の背景色 */
}

.osusume-container {
  width: 50%;
  height: 400px;
  background-color: black; /* 識別するための仮の背景色 */
}
</style>

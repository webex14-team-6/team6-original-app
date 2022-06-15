<template>
  <div class="mainvisual"></div>
  <div class="home-background">
    <section id="shindan">
      <h2>オススメお酒診断</h2>
      <div class="shindan-container">
        <p class="container-text">
          何を頼めばいいかわからない？<br />
          もっといろんなお酒に挑戦したい？<br />
          質問に答えるだけで、<br />
          あなたにオススメのお酒教えます。
        </p>
        <router-link to="/shindan">
          <button class="shindan-button">教えて</button>
        </router-link>
      </div>
    </section>

    <div class="between">
      <img src="../assets/neon.png" />
    </div>

    <section id="kaisetu">
      <h2>お酒解説</h2>
      <div class="kaisetu-container">
        <p class="container-text">
          居酒屋でよく見るメニュー、<br />
          どんなお酒なんだろう？<br />
          ボタンを押せばお酒の解説を<br />
          見ることができます。<br />
          ↓
        </p>
      </div>
    </section>

    <AlcholeCategory />
  </div>
</template>

<script>
import AlcholeCategory from "../components/AlcholeCategory.vue"

export default {
  components: {
    AlcholeCategory,
  },
}
</script>

<style scoped>
.home-background {
  width: 100%;
  height: auto;
  background-attachment: fixed;
  background-image: url(../assets/concrete.jpg);
  background-size: cover;
  padding: 100px 0;
}
.mainvisual {
  width: 100%;
  height: 600px;
  background-image: url(../assets/mainvisual.jpg);
  background-size: cover;
  background-position: center;
}

.shindan-container {
  width: 50%;
  height: 380px;
  margin: auto;
  margin-top: -30px;
  background-color: white;
  border: solid black;
}

h2 {
  font-size: 50px;
  margin-block-start: 0em;
  margin-block-end: 0em;
  letter-spacing: 0.2em;
}

.container-text {
  font-size: 1.2em;
  margin-block-start: 70px;
  margin-block-end: 40px;
}

.shindan-button {
  width: 280px;
  height: 90px;
  border: none;
  background-image: url(../assets/button.png);
  background-size: cover;

  font-size: 1.5em;
  font-weight: bold;
}

.shindan-button:hover {
  transform: scale(1.05);
}

.between {
  height: 250px;
}

.between img {
  width: 150px;
  height: 150px;
  margin-top: 50px;
}

.kaisetu-container {
  width: 40%;
  height: 280px;
  margin: auto;
  margin-top: -30px;
  margin-bottom: 100px;
  background-color: white;
  border: solid black;
}
</style>

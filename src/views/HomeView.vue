<template>
  <div class="blank"></div>
  <div class="mainvisual">
    <div class="main-text">お酒のこと教えます。</div>
    <img src="../assets/bluegreenlogo.png" class="bluegreenlogo" />
  </div>
  <div class="home-background">
    <section id="shindan">
      <h2>オススメお酒診断</h2>
      <div class="shindan-container">
        <img src="../assets/osusumestaff.png" />
        <div class="shindan-container-left">
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
      </div>
    </section>

    <div class="between">
      <img src="../assets/neon.png" />
    </div>

    <section id="kaisetu">
      <h2>お酒解説</h2>
      <div class="kaisetu-container">
        <img src="../assets/kaisetuojisan.png" />
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

    <div class="bottom-space">
      <img src="../assets/bluegreenlogo.png" />
    </div>
  </div>

  <footer>
    <div class="footer-logo">
      <img src="../assets/oshieteosake.png" alt="oshiete osake" />
    </div>
    <div class="footer-nav">
      <a href="#shindan"><button>オススメお酒診断</button></a>
      <a href="#kaisetu"><button>お酒解説</button></a>
    </div>
  </footer>
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
.blank {
  width: 100%;
  height: 100px; /* ヘッダー分の余白 */
}

.mainvisual {
  width: 100%;
  height: 700px;
  background-image: url(../assets/mainvisual.jpg);
  background-size: cover;
  background-position: center;

  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  align-items: center;
}

.main-text {
  width: 80px;
  height: 400px;

  background-color: white;
  border: solid 2px black;
  box-shadow: 6px 6px 0 -1px white, 6px 6px 0 1px black;

  writing-mode: vertical-rl;
  text-align: center;
  font-size: 1.5em;
  line-height: 80px;
  letter-spacing: 0.4em;
}

.bluegreenlogo {
  width: 500px;
  height: 250px;
  margin-top: 400px;
  margin-left: -5%;
}

.home-background {
  width: 100%;
  height: auto;
  background-attachment: fixed;
  background-image: url(../assets/backgroundtile.jpg);
  background-size: cover;
}

/* 診断 */
#shindan {
  padding: 100px 0;
}

.shindan-container {
  width: 700px;
  height: 380px;
  margin: auto;
  margin-top: -30px;
  background-color: white;
  border: solid black;

  display: flex;
  flex-direction: row-reverse;
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
  width: 250px;
  height: 80px;
  background-color: white;
  border: solid 2px black;
  box-shadow: 6px 6px 0 -1px white, 6px 6px 0 1px black;

  font-size: 1.5em;
  font-weight: bold;
}

.shindan-button:hover {
  transform: scale(1.05);
  background-color: blue;
  color: white;
  border: solid 2px white;
  box-shadow: 5px 5px lime;
}

.shindan-container img {
  width: 300px;
  height: 300px;
  margin-top: 50px;
}

.between img {
  width: 150px;
  height: 150px;
}

/* 解説 */
#kaisetu {
  padding: 100px 0 50px;
}

.kaisetu-container {
  width: 600px;
  height: 280px;
  margin: auto;
  margin-top: -30px;
  background-color: white;
  border: solid black;

  display: flex;
}

.kaisetu-container img {
  width: 280px;
  height: 280px;
}

.bottom-space {
  width: 70%;
  height: 300px;
  margin-left: 15%;
  margin-top: 100px;
  text-align: left;
}

.bottom-space img {
  width: 400px;
  height: 200px;
}

/* フッター */
footer {
  width: 100%;
  height: 250px;
  background-color: black;

  display: flex;
  justify-content: space-around;
  align-items: center;
}

.footer-logo {
  width: 140px;
  height: 140px;
  background-image: url(../assets/neonbeer.png);
  background-size: cover;
}

footer img {
  width: 180px;
  height: 35px;
  margin-left: -20px;
  margin-top: 30px;
}

.footer-nav button {
  width: 200px;
  height: 50px;
  margin: 20px;
  background-color: black;
  border: solid 2px white;
  box-shadow: 6px 6px 0 -1px black, 6px 6px 0 1px white;

  color: white;
  font-size: 1em;
}

.footer-nav button:hover {
  background-color: white;
  color: black;
  border: solid 2px black;
  box-shadow: 5px 5px lime;
}

/* レスポンシブ */
@media screen and (max-width: 500px) {
  .mainvisual {
    width: 100%;
    height: 500px;
    flex-direction: column;
  }

  .main-text {
    width: 60px;
    height: 300px;
    margin-top: 50px;
    font-size: 1.1em;
    line-height: 60px;
  }

  .bluegreenlogo {
    width: 280px;
    height: 140px;
    margin-top: 0;
  }

  .shindan-container {
    width: 300px;
    height: 480px;
    margin-top: -20px;
    flex-direction: column;
    align-items: center;
  }

  h2 {
    font-size: 30px;
  }

  .container-text {
    font-size: 1em;
    margin-block-start: 20px;
    margin-block-end: 30px;
  }

  .shindan-button {
    width: 160px;
    height: 60px;
    font-size: 1.2em;
  }

  .shindan-container img {
    width: 150px;
    height: 150px;
  }

  .between img {
    width: 100px;
    height: 100px;
  }

  /* 解説 */
  #kaisetu {
    padding: 100px 0 50px;
  }

  .kaisetu-container {
    width: 300px;
    height: 400px;
    margin-top: -20px;
    flex-direction: column;
    align-items: center;
  }

  .kaisetu-container img {
    width: 150px;
    height: 150px;
    margin-top: 50px;
  }

  .bottom-space {
    width: 90%;
    height: 300px;
    margin-left: 5%;
    margin-top: 100px;
    text-align: left;
  }

  .bottom-space img {
    width: 280px;
    height: 140px;
  }

  /* フッター */
  footer {
    height: 320px;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  .footer-logo {
    width: 100px;
    height: 100px;
    margin-top: 20px;
  }

  footer img {
    width: 140px;
    height: 25px;
  }

  .footer-nav {
    margin-bottom: 20px;
  }
}
</style>

<template>
  <div class="home-background">
    <div class="v-if-container" v-if="startshow">
      <div class="flame">
        <h1 class="animation1">オススメお酒診断</h1>
        <div class="startbutoon-container">
          <button class="shindan-button" v-on:click="startquestion">
            スタート！
          </button>
        </div>
        <img src="@/assets/beericon.png" width="100px" />
      </div>

      <router-link to="/">
        <button class="top-button">TOPへ戻る</button></router-link
      >
    </div>

    <div class="v-if-container" v-if="questionshow">
      <div class="flame">
        <div class="text-4xl py-10" v-bind:class="{ animation2: isAnime }">
          {{ questions[questionnamber].text }}
        </div>
        <div class="flex justify-center space-x-12">
          <button class="marubatu-button" v-on:click="nextquestion1">〇</button>
          <button class="marubatu-button" v-on:click="nextquestion2">✕</button>
        </div>
      </div>
      <router-link to="/">
        <button class="top-button">TOPへ戻る</button></router-link
      >
    </div>
    <div class="v-if-container" v-if="finishshow">
      <div class="flame">
        <h1 class="text-5xl py-10">あなたのオススメは…</h1>

        <!-- 結果をここに表示 -->
        <div class="result" v-if="this.string === '高甘柑橘炭酸和'">
          {{ this.sake }}
        </div>
        <div class="result" v-if="this.string === '高甘柑橘炭酸洋'">
          {{ this.result[1] }}
        </div>
        <div class="result" v-if="this.string === '高甘柑橘和'">
          {{ this.result[2] }}
        </div>
        <div class="result" v-if="this.string === '高甘柑橘洋'">
          {{ this.result[3] }}
        </div>
        <div class="result" v-if="this.string === '高甘炭酸和'">
          {{ this.result[4] }}
        </div>
        <div class="result" v-if="this.string === '高甘炭酸洋'">
          {{ this.result[5] }}
        </div>
        <div class="result" v-if="this.string === '高甘和'">
          {{ this.result[6] }}
        </div>
        <div class="result" v-if="this.string === '高甘洋'">
          {{ this.result[7] }}
        </div>
        <div class="result" v-if="this.string === '高辛柑橘炭酸和'">
          {{ this.result[8] }}
        </div>
        <div class="result" v-if="this.string === '高辛柑橘炭酸洋'">
          {{ this.result[9] }}
        </div>
        <div class="result" v-if="this.string === '高辛柑橘和'">
          {{ this.result[10] }}
        </div>
        <div class="result" v-if="this.string === '高辛柑橘洋'">
          {{ this.result[11] }}
        </div>
        <div class="result" v-if="this.string === '高辛炭酸和'">
          {{ this.result[12] }}
        </div>
        <div class="result" v-if="this.string === '高辛炭酸洋'">
          {{ this.result[13] }}
        </div>
        <div class="result" v-if="this.string === '高辛和'">
          {{ this.result[14] }}
        </div>
        <div class="result" v-if="this.string === '高辛洋'">
          {{ this.result[15] }}
        </div>
        <div class="result" v-if="this.string === '低甘柑橘炭酸和'">
          {{ this.result[16] }}
        </div>
        <div class="result" v-if="this.string === '低甘柑橘炭酸洋'">
          {{ this.result[17] }}
        </div>
        <div class="result" v-if="this.string === '低甘柑橘和'">
          {{ this.result[18] }}
        </div>
        <div class="result" v-if="this.string === '低甘柑橘洋'">
          {{ this.result[19] }}
        </div>
        <div class="result" v-if="this.string === '低甘炭酸和'">
          {{ this.result[20] }}
        </div>
        <div class="result" v-if="this.string === '低甘炭酸洋'">
          {{ this.result[21] }}
        </div>
        <div class="result" v-if="this.string === '低甘和'">
          {{ this.result[22] }}
        </div>
        <div class="result" v-if="this.string === '低甘洋'">
          {{ this.result[23] }}
        </div>
        <div class="result" v-if="this.string === '低辛柑橘炭酸和'">
          {{ this.result[24] }}
        </div>
        <div class="result" v-if="this.string === '低辛柑橘炭酸洋'">
          {{ this.result[25] }}
        </div>
        <div class="result" v-if="this.string === '低辛柑橘和'">
          {{ this.result[26] }}
        </div>
        <div class="result" v-if="this.string === '低辛柑橘洋'">
          {{ this.result[27] }}
        </div>
        <div class="result" v-if="this.string === '低辛炭酸和'">
          {{ this.result[28] }}
        </div>
        <div class="result" v-if="this.string === '低辛炭酸洋'">
          {{ this.result[29] }}
        </div>
        <div class="result" v-if="this.string === '低辛和'">
          {{ this.result[30] }}
        </div>
        <div class="result" v-if="this.string === '低辛洋'">
          {{ this.result[31] }}
        </div>
        <div flex justify-center>
          <button class="retry-button" v-on:click="retry">もう一度！</button>
        </div>
      </div>
      <router-link to="/">
        <button class="top-button">TOPへ戻る</button></router-link
      >
    </div>
  </div>
</template>

<script>
import users from "../assets/data.json"
// import axios from "axios"
export default {
  components: {},
  data() {
    return {
      users: users,
      sake: null,
      isAnime: false,
      questionnamber: Number(0),
      string: "",
      // スタート画面表示
      startshow: true,
      // 診断画面表示
      questionshow: false,
      // 結果画面表示
      finishshow: false,
      questions: [
        // 診断の質問内容
        { text: "度数高いお酒が飲みたい！" },
        { text: "甘口派だ" },
        { text: "柑橘類が好きだ" },
        { text: "炭酸が飲めない" },
        { text: "和か洋かだったら和だ" },
      ],
      result: [
        /*結果内容をここの配列に入れる*/
        {
          name: "ハイボール（メーカーズマーク）",
          image: require("@/assets/wine.png"),
          content: {
            frequency: "8~12",
            overview:
              "ブドウの果汁を発酵させたお酒。その中でも特に甘口のワイン（赤白は関係無い）。",
            taste:
              "ワインはとても複雑な味で奥が深く、ぶどうジュースとは全然違う。甘口と言ってもワインならではの渋みや酸味はあるが、フルーティーで華やかな香りを楽しめる。比較的飲みやすい。",
            thoughts:
              "ブドウの果汁を発酵させたお酒。その中でも特に甘口のワイン（赤白は関係無い)。",
          },
        },
        "高甘柑橘炭酸洋の結果",
        "高甘柑橘和",
        "高甘柑橘洋",
        "高甘炭酸和",
        "高甘炭酸洋",
        "高甘和",
        "高甘洋",
        "高辛柑橘炭酸和",
        "高辛柑橘炭酸洋",
        "高辛柑橘和",
        "高辛柑橘洋",
        "高辛炭酸和",
        "高辛炭酸洋",
        "高辛和",
        "高辛洋",
        "低甘柑橘炭酸和",
        "低甘柑橘炭酸洋",
        "低甘柑橘和",
        "低甘柑橘洋",
        "低甘炭酸和",
        "低甘炭酸洋",
        "低甘和",
        "低甘洋",
        "低辛柑橘炭酸和",
        "低辛柑橘炭酸洋",
        "低辛柑橘和",
        "低辛柑橘洋",
        "低辛炭酸和",
        "低辛炭酸洋",
        "低辛和",
        "低辛洋",
      ],
      //追加しました
      results: [],
    }
  },
  created() {
    this.sake = JSON.parse(users)
  },
  methods: {
    // //axiosを使ってJSONファイルを読み込もうとしましたが、
    // //うまくいきませんでした。
    // async getalchole() {
    //   await axios.get().then((x) => {
    //     this.results = x.data
    //   })
    // },
    // //追加しました
    // mounted() {
    //   this.getalchole()
    // },

    // スタートボタンを押した時の動作
    startquestion: function () {
      this.startshow = false
      this.questionshow = true
      // アニメーションのオンオフ

      this.isAnime = true
      setTimeout(() => {
        this.isAnime = false
      }, 501)
    },
    // 〇を押したときの動作
    nextquestion1: function () {
      // アニメーションのオンオフ
      this.isAnime = true
      setTimeout(() => {
        this.isAnime = false
      }, 501)
      // 1問目
      if (this.questionnamber === 0) {
        this.string += "高"
        console.log(this.string)
        this.questionnamber += 1
      }
      // 2問目
      else if (this.questionnamber === 1) {
        this.string += "甘"
        console.log(this.string)
        this.questionnamber += 1
      } // 3問目
      else if (this.questionnamber === 2) {
        this.string += "柑橘"
        console.log(this.string)
        this.questionnamber += 1
      } // 4問目
      else if (this.questionnamber === 3) {
        this.string += "炭酸"
        console.log(this.string)
        this.questionnamber += 1
      } // 5問目
      else if (this.questionnamber === 4) {
        this.string += "和"
        console.log(this.string)
        this.questionshow = false
        this.finishshow = true
      }
    },
    // ✕を押したときの動作
    nextquestion2: function () {
      // アニメーションのオンオフ
      this.isAnime = true
      setTimeout(() => {
        this.isAnime = false
      }, 501)
      // 1問目
      if (this.questionnamber === 0) {
        this.string += "低"
        console.log(this.string)
        this.questionnamber += 1
      }
      // 2問目
      else if (this.questionnamber === 1) {
        this.string += "辛"
        console.log(this.string)
        this.questionnamber += 1
      } // 3問目
      else if (this.questionnamber === 2) {
        this.string += ""
        console.log(this.string)
        this.questionnamber += 1
      } // 4問目
      else if (this.questionnamber === 3) {
        this.string += ""
        console.log(this.string)
        this.questionnamber += 1
      } // 5問目
      else if (this.questionnamber === 4) {
        this.string += "洋"
        console.log(this.string)
        this.questionshow = false
        this.finishshow = true
      }
    },
    retry: function () {
      this.finishshow = false
      this.questionnamber = 0
      this.startshow = true
    },
  },
}
</script>

<style scoped>
.home-background {
  width: 100%;
  height: auto;
  background-attachment: fixed;
  background-image: url(../assets/backgroundtile.jpg);
  background-size: cover;
}
.shindan-button {
  width: 250px;
  height: 80px;
  background-color: white;
  border: solid black;
  box-shadow: 5px 5px black;
  font-size: 1.5em;
  font-weight: bold;
}
.shindan-button:hover {
  transform: scale(1.05);
  background-color: blue;
  color: white;
  border: solid white;
  box-shadow: 5px 5px lime;
}
.marubatu-button {
  width: 100px;
  height: 80px;
  background-color: white;
  border: solid black;
  box-shadow: 5px 5px black;
  font-size: 1.5em;
  font-weight: bold;
}
.marubatu-button:hover {
  transform: scale(1.05);
  background-color: blue;
  color: white;
  border: solid white;
  box-shadow: 5px 5px lime;
}
.retry-button {
  width: 200px;
  height: 80px;
  background-color: white;
  border: solid black;
  box-shadow: 5px 5px black;
  font-size: 1.5em;
  font-weight: bold;
}
.retry-button:hover {
  transform: scale(1.05);
  background-color: blue;
  color: white;
  border: solid white;
  box-shadow: 5px 5px lime;
}
/* スタート画面のアニメーション */
@keyframes start-apper {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.animation1 {
  font-size: 3.75rem /* 60px */;
  line-height: 1;
  padding-top: 2.5rem /* 40px */;
  padding-bottom: 2.5rem /* 40px */;
  animation: start-apper 1s ease-out 0s 1 forwards;
}
/* 問題が出るときのアニメーション */
@keyframes question-apper {
  0% {
    transform: translatey(-30px);
    opacity: 0;
  }
  100% {
    transform: translatey(0px);
    opacity: 1;
  }
}
.animation2 {
  animation: question-apper 0.2s 0s 1 forwards;
}
.a {
  font-size: 15px;
  font-family: 游ゴシック;
  font-weight: bold;
  display: inline-block;
  margin: 2mm;
  padding: 1mm;
  box-shadow: 0 0 0 2px #000000, 6px 6px 0 0 #fff, 6px 6px 0 2px #000000;
}
</style>

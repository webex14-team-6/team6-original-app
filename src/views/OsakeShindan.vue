<template>
  <div class="start" v-if="startshow">
    <h1>診断スタート！</h1>
    <button class="start-button" v-on:click="startquestion">始める</button>
  </div>
  <div class="v" v-if="questionshow">
    <div class="question-container">
      <div class="question">{{ questions[questionnamber].text }}</div>
      <div class="choice-button">
        <button class="chooice1" v-on:click="nextquestion1">〇</button>
        <button class="chooice2" v-on:click="nextquestion2">✕</button>
      </div>
    </div>
  </div>
  <div class="finish" v-if="finishshow">
    <h1>あなたのオススメは…</h1>
    <div class="result">{{ result[count] }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questionnamber: Number(0),
      count: 0,
      startshow: true,
      questionshow: false,
      finishshow: false,
      questions: [
        { text: "お酒が得意だ" },
        { text: "甘いお酒は苦手だ" },
        { text: "フルーティーな味を好む" },
      ],
      result: [
        "梅酒",
        "カシオレ",
        "レモンサワー",
        "お茶割",
        "テキーラサンライズ",
        "ワイン",
        "ハイボール",
        "ビール",
      ],
    }
  },
  methods: {
    startquestion: function () {
      this.startshow = false
      this.questionshow = true
    },
    nextquestion1: function () {
      // １問目
      if (this.questionnamber === 0) {
        this.questionnamber = Number(this.questionnamber) + 1
        this.count = Number(this.count) + 7
      }
      // ２問目
      else if (this.questionnamber === 1) {
        this.questionnamber = Number(this.questionnamber) + 1
      }
      // ３問目(２問目に✕と答えたとき)
      else if (this.questionnamber === 2 && this.count === 2) {
        this.count = Number(this.count) - 1
        this.questionshow = false
        this.finishshow = true
      } else if (this.questionnamber === 2 && this.count === 6) {
        this.count = Number(this.count) - 1
        this.questionshow = false
        this.finishshow = true
      } // ３問目(２問目に〇と答えたとき)
      else {
        this.questionshow = false
        this.finishshow = true
      }
    },
    nextquestion2: function () {
      // 一問目
      if (this.questionnamber === 0) {
        this.count = Number(this.count) + 3
        this.questionnamber = Number(this.questionnamber) + 1
      }
      // ２問目
      else if (this.questionnamber === 1) {
        this.questionnamber = Number(this.questionnamber) + 1
        this.count = Number(this.count) - 1
      }

      // ３問目(２問目に✕と答えたとき)
      else if (this.questionnamber === 2 && this.count === 2) {
        this.count = Number(this.count) - 2
        this.questionshow = false
        this.finishshow = true
      } else if (this.questionnamber === 2 && this.count === 6) {
        this.count = Number(this.count) - 2
        this.questionshow = false
        this.finishshow = true
      }
      // ３問目(２問目に〇と答えたとき)
      else {
        this.count = Number(this.count) - 1
        this.questionshow = false
        this.finishshow = true
      }
    },
  },
}
</script>

<style scoped></style>

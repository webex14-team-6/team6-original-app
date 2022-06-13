<template>
  <div class="flex justify-center items-center h-screen" v-if="startshow">
    <div class="flame">
      <h1 class="text-6xl py-10">オススメお酒診断</h1>
      <button class="text-4xl py-10" v-on:click="startquestion">
        スタート！
      </button>
    </div>
  </div>
  <div class="flex justify-center items-center h-screen" v-if="questionshow">
    <div class="flame">
      <div class="text-6xl py-10">{{ questions[questionnamber].text }}</div>
      <div class="choice-button">
        <button class="text-4xl py-10" v-on:click="nextquestion1">〇</button>
        <button class="text-4xl py-10" v-on:click="nextquestion2">✕</button>
      </div>
    </div>
  </div>
  <div class="flex justify-center items-center h-screen" v-if="finishshow">
    <div class="flame">
      <h1 class="text-6xl py-10">あなたのオススメは…</h1>
      <!-- 結果をここに表示 -->
      <div class="result" v-if="this.string === '高甘柑橘炭酸和'">
        <PropsCommentary />
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
    </div>
  </div>
</template>

<script>
import PropsCommentary from "@/components/PropsCommentary.vue"
export default {
  components: { PropsCommentary },
  data() {
    return {
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
        // 結果内容をここの配列に入れる
        "高甘柑橘炭酸和の結果",
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
    }
  },
  methods: {
    // スタートボタンを押した時の動作
    startquestion: function () {
      this.startshow = false
      this.questionshow = true
    },
    // 〇を押したときの動作
    nextquestion1: function () {
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
  },
}
</script>

<style scoped></style>

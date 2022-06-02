<template>
  <h1>お酒</h1>
  <PropsCommentary
    v-for="(alchole, index) in alcholes"
    v-bind:key="index"
    v-bind:alchole="alchole"
  />
</template>

<script>
import PropsCommentary from "./PropsCommentary.vue"

export default {
  components: {
    PropsCommentary,
  },
  data() {
    return {
      alcholes: [
        {
          name: "酒１",
          image: "assets/logo.png",
          content: [
            {
              frequency: "5~9",
              taste: "特になし",
              overview: "ウイスキーをソーダ水で割ったもの",
            },
          ],
        },
        {
          /*name: "酒１",
          image: "logo.png",
          content: [
            {
              frequency: "5~9",
              taste: "特になし",
              overview: "ウイスキーをソーダ水で割ったもの",
            },
          ],
          ＜できてない事・やりたい事＞
          ①配列の中に画像を表示させたい
          ②コンテントの外にお酒の名前と画像だけ出して、その他の内容をコンテントの中に入れて一つずつ扱えるようにしたい出したい
          ③画像をクリックすると
          小さな新しいタブが出てきてコンテントの中身が表示されるようにしたい
          
          */
        },
      ],
    }
  },
}
</script>

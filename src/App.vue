<template>
  <h1>お酒</h1>
  <PropsCommentary
    v-for="(alchole, index) in alcholes"
    v-bind:key="index"
    v-bind:alchole="alchole"
  />
</template>

<script>
import PropsCommentary from "./components/PropsCommentary.vue"

export default {
  components: {
    PropsCommentary,
  },
  data() {
    return {
      alcholes: [
        {
          name: "ハイボール ",
          frequency: "5~9",
          taste: "特になし",
          overview: "ウイスキーをソーダ水で割ったもの",
          //image: src="@/assets/ganymede.jpeg"
        },
        {
          name: "ハイボール ",
          frequency: "5~9",
          taste: "特になし",
          overview: "ウイスキーをソーダ水で割ったもの",
          //image: "logo.png",
        },
        {
          name: "ハイボール ",
          frequency: "5~9",
          taste: "特になし",
          overview: "ウイスキーをソーダ水で割ったもの",
          //image: "logo.png",
        },
      ],
    }
  },
}
</script>

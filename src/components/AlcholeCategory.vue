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
          image: require("@/assets/ganymede.jpeg"),
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
      ],
    }
  },
}
</script>

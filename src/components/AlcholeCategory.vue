<template>
  <div class="background">
    <div class="contentMenu">
      <div class="Menu">Menu</div>
      <div class="right">
        <div class="title">ビール</div>
        <PropsCommentary
          v-for="(alchole, index) in alcholes"
          v-bind:key="index"
          v-bind:alchole="alchole"
        />
        <div class="title">ハイボール</div>
        <PropsCommentary
          v-for="(alchole, index) in alcholes"
          v-bind:key="index"
          v-bind:alchole="alchole"
        />
        <div class="title">サワー</div>
        <PropsCommentary
          v-for="(alchole, index) in alcholes"
          v-bind:key="index"
          v-bind:alchole="alchole"
        />
        <div class="title">果実酒</div>
        <PropsCommentary
          v-for="(alchole, index) in alcholes"
          v-bind:key="index"
          v-bind:alchole="alchole"
        />
        <div class="title">ワイン</div>
        <PropsCommentary
          v-for="(alchole, index) in alcholes"
          v-bind:key="index"
          v-bind:alchole="alchole"
        />
      </div>
      <div class="left">
        <div class="title">カクテル</div>
        <PropsCommentary
          v-for="(alchole, index) in alcholes"
          v-bind:key="index"
          v-bind:alchole="alchole"
        />
        <div class="title">ウイスキー</div>
        <PropsCommentary
          v-for="(alchole, index) in alcholes"
          v-bind:key="index"
          v-bind:alchole="alchole"
        />
        <div class="title">日本酒</div>
        <PropsCommentary
          v-for="(alchole, index) in alcholes"
          v-bind:key="index"
          v-bind:alchole="alchole"
        />
        <div class="title">焼酎</div>
        <PropsCommentary
          v-for="(alchole, index) in alcholes"
          v-bind:key="index"
          v-bind:alchole="alchole"
        />
      </div>
    </div>
  </div>
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
          name: "ワイン(甘口)",
          image: require("@/assets/wine .png"),
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
        {
          name: "ワイン(甘口)",
          image: require("@/assets/wine .png"),
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

<style scoped>
.title {
  font-size: 50px;
  font-family: cursive;
  padding: 2mm;
}

.right {
  position: absolute;
  top: 15%;
  left: 10%;
  width: 50%;
  height: 100%;
}
.left {
  position: absolute;
  top: 15%;
  right: 10%;
  width: 50%;
  height: 100%;
}

.Menu {
  font-size: 60px;
  font-family: "Cherry Swash", cursive;
}

@import url("https://fonts.googleapis.com/css?family=Cherry+Swash:700");
</style>

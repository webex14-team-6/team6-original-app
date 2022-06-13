<template>
  <div
    class="openbtn"
    v-on:click="close = !close"
    v-bind:class="{ active: close }"
  >
    Menu <span></span><span></span><span></span>
  </div>
  <div class="menu" v-bind:class="{ active: close }">
    <div class="menu__item">TOP</div>
    <div class="menu__item">診断</div>
    <div class="menu__item">メニュー</div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      close: false,
    }
  },
  methods: {
    toggleMenu() {
      this.close = !this.close
    },
  },
}
</script>

<style>
.openbtn {
  position: fixed;
  top: 20px;
  right: 20px;
  background: #0a0800;
  cursor: pointer;
  width: 60px;
  height: 60px;
  border-radius: 5px;
  z-index: 5;
  color: #fff;
}

/*ボタン内側*/
.openbtn span {
  display: inline-block;
  transition: all 0.4s;
  position: absolute;
  left: 19px;
  height: 4px;
  border-radius: 2px;
  background: #fff;
}

/*ボタンの３本線のうちの一番上の線
nth-of-type : 擬似クラス、グループの中で指定された要素の位置に基づいて選択 */
.openbtn span:nth-of-type(1) {
  top: 24px;
  width: 45%;
}

.openbtn span:nth-of-type(2) {
  top: 32px;
  width: 35%;
}

.openbtn span:nth-of-type(3) {
  top: 40px;
  width: 20%;
}

/*activeクラスが付与されると線が回転して×になる
5行目のv-bindでボタンを押すとクラス名にactiveを追加する仕組み*/
.openbtn.active span:nth-of-type(1) {
  top: 25px;
  left: 24px;
  transform: translateY(6px) rotate(-135deg);
  width: 30%;
}

.openbtn.active span:nth-of-type(2) {
  opacity: 0;
}

.openbtn.active span:nth-of-type(3) {
  top: 36px;
  left: 24px;
  transform: translateY(-6px) rotate(135deg);
  width: 30%;
}
.menu {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;
  width: 10%;
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgb(218, 210, 210);
}

.menu__item {
  width: 100%;
  height: 5%;
  padding: 20%;
  text-align: center;
  color: rgb(10, 10, 10);
  box-sizing: border-box;
}

.menu {
  transform: translateX(100vw);
  transition: all 0.2s linear;
}

.menu.active {
  transform: translateX(0);
}
</style>

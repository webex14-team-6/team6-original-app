<template>
  <div
    class="openbtn"
    v-on:click="close = !close"
    v-bind:class="{ active: close }"
  >
    <span></span><span></span><span></span>
  </div>

  <div class="menu" v-bind:class="{ active: close }">
    <router-link to="/">
      <div class="menu__item">トップ</div>
    </router-link>
    <router-link to="/shindan">
      <div class="menu__item">オススメお酒診断</div>
    </router-link>
    <a href="#kaisetu">
      <div class="menu__item">お酒解説</div>
    </a>
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
  top: 10px;
  right: 10px;
  width: 80px;
  height: 80px;
  z-index: 5;
  cursor: pointer;
}

/*ボタン内側*/
.openbtn span {
  width: 70%;
  display: inline-block;
  transition: all 0.4s;
  position: absolute;
  left: 10px;
  height: 5px;
  background: #fff;
}

/*ボタンの３本線のうちの一番上の線
nth-of-type : 擬似クラス、グループの中で指定された要素の位置に基づいて選択 */
.openbtn span:nth-of-type(1) {
  top: 20px;
}

.openbtn span:nth-of-type(2) {
  top: 35px;
}

.openbtn span:nth-of-type(3) {
  top: 50px;
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
  width: 200px;
  height: 350px;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  background: black;
}

.menu a {
  text-decoration: none;
}

.menu__item {
  width: 160px;
  height: 50px;
  margin-left: 20px;
  margin-top: 20px;
  border: solid 1px white;
  box-shadow: 6px 6px black, 6px 6px 0 1px white;
  text-align: center;
  line-height: 50px;
  color: white;
}

.menu {
  transform: translateX(100vw);
  transition: all 0.2s linear;
}

.menu.active {
  transform: translateX(0);
}

@media screen and (max-width: 500px) {
  .openbtn {
    width: 60px;
    height: 60px;
  }

  .openbtn span {
    height: 4px;
  }

  .openbtn span:nth-of-type(1) {
    top: 20px;
  }

  .openbtn span:nth-of-type(2) {
    top: 30px;
  }

  .openbtn span:nth-of-type(3) {
    top: 40px;
  }
}
</style>

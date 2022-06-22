<template>
  <div class="alcohol-category">
    <div class="left">
      <img src="@/assets/namebeer.png" class="title" />
      <PropsCommentary
        v-for="(alchole, index) in beer"
        v-bind:key="index"
        v-bind:alchole="alchole"
      />
      <div class="line-left"></div>
      <img src="@/assets/namehighball.png" class="title" />
      <PropsCommentary
        v-for="(alchole, index) in highball"
        v-bind:key="index"
        v-bind:alchole="alchole"
      />
      <div class="line-left"></div>
      <img src="@/assets/namesour.png" class="title" />
      <PropsCommentary
        v-for="(alchole, index) in sour"
        v-bind:key="index"
        v-bind:alchole="alchole"
      />
      <div class="line-left"></div>
      <img src="@/assets/namefruit.png" class="title" />
      <PropsCommentary
        v-for="(alchole, index) in fruitwine"
        v-bind:key="index"
        v-bind:alchole="alchole"
      />
      <div class="line-left"></div>
      <img src="@/assets/namewine.png" class="title" />
      <PropsCommentary
        v-for="(alchole, index) in wine"
        v-bind:key="index"
        v-bind:alchole="alchole"
      />
    </div>

    <div class="line"></div>

    <div class="right">
      <img src="@/assets/namecocktails.png" class="title" />
      <PropsCommentary
        v-for="(alchole, index) in cocktails"
        v-bind:key="index"
        v-bind:alchole="alchole"
      />
      <div class="line-right"></div>
      <img src="@/assets/namewhisky.png" class="title" />
      <PropsCommentary
        v-for="(alchole, index) in whisky"
        v-bind:key="index"
        v-bind:alchole="alchole"
      />
      <div class="line-right"></div>
      <img src="@/assets/namesake.png" class="title" />
      <PropsCommentary
        v-for="(alchole, index) in sake"
        v-bind:key="index"
        v-bind:alchole="alchole"
      />
      <div class="line-right"></div>
      <img src="@/assets/nameshochu.png" class="title" />
      <PropsCommentary
        v-for="(alchole, index) in shochu"
        v-bind:key="index"
        v-bind:alchole="alchole"
      />
    </div>
  </div>
</template>

<script>
//import AlcholeCategory from "./components/AlcholeCategory.vue"
import PropsCommentary from "./PropsCommentary.vue"

export default {
  components: {
    PropsCommentary,
  },
  data() {
    return {
      beer: [
        {
          name: "ビール（アサヒ）",
          image: require("@/assets/beer1.png"),
          content: {
            frequency: "",
            overview: "辛口でキレの良い味が特徴のアサヒスーパードライ",
            taste:
              "辛口で飲みにくいイメージがあるが、リニューアルしてから食事にも合い、喉越しも良い！",
            thoughts:
              "のど越し、爽快感、キレを求めるならこれ！仕事終わりや暑い夏の日にゴクゴク飲むのにぴったり",
          },
        },
        {
          name: "ビール（プレモル）",
          image: require("@/assets/beer2.png"),
          content: {
            frequency: "5.5",
            overview:
              "華やかな香りが特徴のサントリーのビール。戻り香と呼ばれる飲んだ後に口の中に膨らむ華やかな香りが後々まで美味しい余韻を残します。飲み飽きず何杯でも飲める上品な味わい。",
            taste:
              "きめ細かい泡の口当たりもよく、ふわっとした最初のひと口が最高。",
            thoughts:
              "味の違いから、同じような価格帯のエビス派と好みが分かれる",
          },
        },
        {
          name: "ビール（エビス）",
          image: require("@/assets/beer1.png"),
          content: {
            frequency: "5",
            overview:
              "高級ビールの代名詞的なサッポロのビール。ビールの熟成期間が長く、深さやコクが別格",
            taste:
              "アサヒのスーパードライ等と異なり、ビールの味がしっかりと来るのでビールは喉越で飲むという人には向かないかも。",
            thoughts: "居酒屋で扱っている店は少ないかも",
          },
        },
      ],
      highball: [
        {
          name: "ハイボール（角）",
          image: require("@/assets/highball1.png"),
          content: {
            frequency: "５〜８",
            overview: "日本産のサントリー角瓶ウイスキーをソーダで割ったもの。",
            taste:
              "ウイスキー特有のスモーキーな香りがありつつ、スッキリした味わい。",
            thoughts: "日本の居酒屋飯と一緒に飲むなら角！",
          },
        },
        {
          name: "ハイボール（トリス）",
          image: require("@/assets/highball1.png"),
          content: {
            frequency: "５〜８",
            overview: "トリスウイスキーをソーダで割ったもの。",
            taste: "クセが少なく、すっきりと軽い味わいで飲みやすい。",
            thoughts: "さらっと飲みたい人やハイボール初心者にオススメ！",
          },
        },
        {
          name: "ハイボール（ジムビーム）",
          image: require("@/assets/highball1.png"),
          content: {
            frequency: "５〜８",
            overview: "ジムビームウイスキーをソーダで割ったもの。",
            taste: "ウイスキー特有のスモーキーな香りはジムビームが一番強い。",
            thoughts: "強めにウイスキー感を味わいたいならジムビーム！",
          },
        },
        {
          name: "ハイボール（メーカーズマーク）",
          image: require("@/assets/highball1.png"),
          content: {
            frequency: "５〜８",
            overview: "メーカーズマークのウイスキーをソーダで割ったもの。",
            taste:
              "フルーティーで少し甘みがある。まろやかな味わいで飲みやすい。",
            thoughts: "甘くてフルーティーなお酒が好きな人にオススメ！",
          },
        },
        {
          name: "ウーロン・緑茶・ジャスミンハイ",
          image: require("@/assets/peachoolong.png"),
          content: {
            frequency: "５〜８",
            overview: "焼酎を烏龍茶、緑茶、ジャスミンティーで割ったお酒",
            taste:
              "すっきりとした味わいで飲んだ瞬間はお茶そのものの味がして、のどを通るときにお酒の味を感じられる。",
            thoughts:
              "度数は、使用する焼酎の種類や、割る配分が異なるため、度数にはばらつきがある、が居酒屋で提供されるお酒は高くないため、甘い味に飽きたてさっぱりしたいときにオススメ。",
          },
        },
        {
          name: "コークハイ",
          image: require("@/assets/cokehigh.png"),
          content: {
            frequency: "７〜９",
            overview: "ウイスキーをコーラで割ったもの",
            taste: "コーラの風味が強く、飲みやすい",
            thoughts: "意外とアルコール度数が高いので、飲む量には注意を！",
          },
        },
      ],
      sour: [
        {
          name: "レモンサワー",
          image: require("@/assets/lemonsour.png"),
          content: {
            frequency: "３〜５",
            overview: "焼酎、レモン果汁（シロップ）、炭酸水で作られたお酒",
            taste: "爽やかな酸味とほろ苦さの程よいバランスが楽しめる",
            thoughts: "レモン感、甘さ、アルコール、炭酸によって味が変わる",
          },
        },
        {
          name: "カルピスサワー",
          image: require("@/assets/calpissour.png"),
          content: {
            frequency: "3",
            overview: "焼酎、カルピス、炭酸水で作られたお酒。",
            taste: "カルピスの味。甘くてアルコール感も少ない",
            thoughts: "まだお酒が得意じゃない人にオススメ！",
          },
        },
      ],
      fruitwine: [
        {
          name: "梅酒ロック",
          image: require("@/assets/umeshu.png"),
          content: {
            frequency: "８〜１２",
            overview:
              "梅を焼酎やブランデーなどに長期間漬けた果実酒。ロックとは、水やソーダで割らずに氷だけで飲むこと。",
            taste:
              "基本は甘くて深いコクのある梅の味。たまに甘くないスッキリした味わいの梅酒もある。度数が高い割に飲みやすい。",
            thoughts:
              "もし度数がキツくても、グラスを回して氷を溶かせば飲みやすくなる！",
          },
        },
        {
          name: "梅酒ソーダ",
          image: require("@/assets/umesoda.png"),
          content: {
            frequency: "4",
            overview:
              "梅を焼酎やブランデーなどに長期間漬けた梅酒をソーダで割ったもの。",
            taste:
              "甘くて深いコクのある梅の味がする炭酸のお酒。たまに甘くないスッキリ系の梅酒もある。お酒っぽさが少なく、とても飲みやすい。",
            thoughts: "お酒初心者にオススメ！",
          },
        },
      ],
      wine: [
        {
          name: "ワイン（甘口）",
          image: require("@/assets/wine.png"),
          content: {
            frequency: "８〜１２",
            overview:
              "ぶどうの果汁を発酵させたもの。発酵を控えめにするとアルコールが低く、甘いワインができる。",
            taste:
              "甘口と言ってもワインならではの渋みや酸味はあるが、フルーティーで華やかな香りを楽しめる。比較的飲みやすい。",
            thoughts:
              "店員さんに「甘めのワインはありますか？」と聞いてみよう！安い居酒屋のワインはオススメしない。",
          },
        },
        {
          name: "ワイン（辛口）",
          image: require("@/assets/wine.png"),
          content: {
            frequency: "１０〜１５",
            overview:
              "ぶどうの果汁を発酵させたもの。甘くないワインを辛口と言う。",
            taste: "ワイン特有の渋みや酸味がありつつ、すっきりした大人の味。",
            thoughts:
              "赤の軽めor白が飲みやすい。わからなかったら店員さんにオススメを聞いてみよう。安い居酒屋のワインはオススメしない。",
          },
        },
        {
          name: "サングリア",
          image: require("@/assets/sangria.png"),
          content: {
            //frequency: "",
            overview: "赤ワインを使うと6〜8％、白ワインを使うと5〜7％程度",
            taste:
              "ワインをベースにフルーツやスパイス、甘味を加えて作る(ジュースや炭酸なども)カクテル",
            thoughts:
              "甘めのカクテルのようなものであり、爽やかで親しみやすい味が人気です",
          },
        },
      ],
      cocktails: [
        {
          name: "シャンディガフ ",
          image: require("@/assets/shandygaff.png"),
          content: {
            frequency: "３～４",
            overview: "ビールとジンジャーエールのカクテル",
            taste:
              "ビールに感じる麦のコクと風味、ジンジャエールの甘さやスパイシーな風味を感じることがでできる。 ビールの特長である苦味はジンジャエールによって抑えることができるため、ビールが苦手な方でも飲めるような軽やかな味わい。",
            thoughts:
              "度数は低めなのでビールが好きだけどすぐに酔ってしまうという人にオススメ",
          },
        },
        {
          name: "モスコミュール",
          image: require("@/assets/moscowmule.png"),
          content: {
            frequency: "10～15",
            overview:
              "モスコミュールとは、ウオッカをジンジャーエールで割り、ライムを絞ったカクテル。",
            taste:
              "ジンジャーエールにライムの酸味がプラスされたさわやかな飲み口。",
            thoughts:
              "ベースとなるウオッカは無味無臭だが、アルコール度数がとても高いお酒なので、喉元を通るときに体が熱くなるような重厚感がある。",
          },
        },
        {
          name: "スクリュードライバー",
          image: require("@/assets/screwdriver1.jpg"),
          content: {
            frequency: "12",
            overview: "ウオッカとオレンジジュースのカクテル",
            taste:
              "オレンジの甘味と酸味が特徴のカクテルで、飲みやすくておいしいと女性に人気のお酒。",
            thoughts:
              "甘さが強く、あまりアルコールを感じにくいが、度数は高いため、飲みすぎに注意！",
          },
        },
        {
          name: "ファジーネーブル",
          image: require("@/assets/fajinel.jpg"),
          content: {
            frequency: "5",
            overview: "ピーチリキュールとオレンジジュースのカクテル",
            taste:
              "ピーチとオレンジをあわせた甘みと酸味が合わさったフルーティなカクテル。",
            thoughts:
              "オレンジ感が強いながらも、ピーチの後味を感じられる。カシオレの兄弟分みたいな感じ。",
          },
        },
        {
          name: "カシスオレンジ",
          image: require("@/assets/cassisorange.png"),
          content: {
            frequency: "5",
            overview: "カシスリキュールとオレンジジュースのカクテル",
            taste:
              "味はオレンジジュースに若干苦味と酸味の味を足した様、甘口のカクテル。",
            thoughts:
              "カシスとは赤黒い果実が実るベリー類のひとつ。カクテルの大定番、お酒が得意ではない人にとっては救世主。迷ったらとりあえずこれを頼んでおくのが無難",
          },
        },
        {
          name: "カルーアミルク",
          image: require("@/assets/kahluamilk.png"),
          content: {
            frequency: "4~7",
            overview: "コーヒーリキュールと牛乳のカクテル",
            taste:
              "カルーアとはコーヒーリキュールの1種であり、コーヒー牛乳、カフェオレのようなマイルドな味わいで、飲みやすいカクテルである。",
            thoughts:
              "店によっては割る割合が異なり、度数が高くなることがあるため飲みすぎ注意！甘党の方にオススメ",
          },
        },
        {
          name: "ピーチウーロン",
          image: require("@/assets/peachoolong.png"),
          content: {
            frequency: "3～5",
            overview: "ピーチリキュールとウーロン茶のカクテル",
            taste:
              "ピーチリキュールのまろやかな甘さをウーロン茶がすっきりとした味わいに仕上げたカクテル。",
            thoughts:
              "甘すぎず苦すぎず、度数も高くないため飲みやすい。ウーロンハイよりかは甘さが欲しいときにオススメ",
          },
        },
        {
          name: "キティ",
          image: require("@/assets/kitty.png"),
          content: {
            frequency: "5～6",
            overview: "赤ワインとジンジャーエールのカクテル",
            taste:
              "甘いながらもさっぱりとした飲み口で、特に女性を中心に人気があり、お酒が苦手な方にもおすすめのカクテル。",
            thoughts:
              "赤ワインの代わりに白ワインをベースにすると、「オペレーター」カクテルができる。いきなり赤ワインを飲むのはきつい人はこれを飲んでみよう！",
          },
        },
        {
          name: "マティーニ",
          image: require("@/assets/martini.png"),
          content: {
            frequency: "30",
            overview:
              "ジンとドライベルモットのカクテル、ベルモットとは、白ワインをベースにさまざまなハーブやスパイスで香りをつけたフレーバードワインである",
            taste:
              "「カクテルの王様」とも呼ばれている1杯、キリっとした爽やかな風味のなかに苦味を感じる大人な味わい。",
            thoughts: "初心者には度数的にもハードルは高め、味も人を選ぶかも...",
          },
        },
        {
          name: "カミカゼ",
          image: require("@/assets/kamikaze.png"),
          content: {
            frequency: "25",
            overview:
              "ウオッカとホワイトキュラソーとライムジュースのカクテル、ホワイトキュラソーはオレンジを主原料にした無色透明のリキュールで、軽やかな甘みや風味が特徴。",
            taste:
              "辛口でキレのある味わいで度数も強めだが、ライムのおかげですっきりと飲みやすい味。",
            thoughts:
              "しかし日本のバーでは主にショートグラスに入れて提供され、海外では「カミカゼショット」としてショットグラスに入っていることが多いため、お酒が得意でない人にとっては飲みづらいかも",
          },
        },
      ],
      whisky: [
        {
          name: "ウイスキー",
          image: require("@/assets/whisky1.png"),
          content: {
            frequency: "40",
            overview:
              "麦やトウモロコシが原料のお酒。木の樽で熟成したので茶色い。",
            taste: "スモーキーで木のような香りがする大人の味。",
            thoughts: "度数がとても高いので少しずつ、水で休憩しながら飲もう！",
          },
        },
      ],
      sake: [
        {
          name: "日本酒（甘口）",
          image: require("@/assets/sake1.png"),
          content: {
            frequency: "15~20",
            overview: "米と麹と水を発酵させたもの。",
            taste:
              "アルコール感のある味にフルーティで甘い香りを足した感じ。深いコクと香りが楽しめる。",
            thoughts:
              "銘柄によって様々な味があるので、自分好みの日本酒を探してみよう！",
          },
        },
        {
          name: "日本酒（辛口）",
          image: require("@/assets/sake1.png"),
          content: {
            frequency: "15~20",
            overview: "米と麹と水を発酵させたもの。",
            taste: "コクが深く、キリッとした味。",
            thoughts:
              "銘柄によって様々な味があるので、自分好みの日本酒を探してみよう！",
          },
        },
      ],
      shochu: [
        {
          name: "チャミスル",
          image: require("@/assets/chami.png"),
          content: {
            frequency: "13",
            overview: "韓国のフルーツ味の焼酎",
            taste:
              "すもも・マスカット・グレープフルーツ・ストロベリーなどの味がある。度数は結構高いが、フルーツ味が美味しく飲みやすい。",
            thoughts: "友達とシェアして小さいグラスで飲もう！",
          },
        },
        {
          name: "焼酎（麦）",
          image: require("@/assets/shochu.png"),
          content: {
            frequency: "20~25",
            overview: "麦を原料とするお酒。",
            taste:
              "アルコール感のある味だが、香ばしくてまろやかな香りが楽しめる。クセが少なく、芋焼酎よりは飲みやすい。",
            thoughts: "まずは水割りや炭酸割りから挑戦しよう！",
          },
        },
        {
          name: "焼酎（芋）",
          image: require("@/assets/shochu.png"),
          content: {
            frequency: "20~25",
            overview: "麦を原料とするお酒。",
            taste:
              "アルコール感のある味だが、芋の甘くてクセのある強い香りが楽しめる。好みが分かれるが、ハマる人はハマる。",
            thoughts: "まずは水割りや炭酸割りから挑戦しよう！",
          },
        },
      ],
    }
  },
}
</script>

<style scoped>
.alcohol-category {
  width: 900px;
  height: 1470px;
  margin: auto;
  padding: 50px 100px;
  background-image: url(../assets/back.png);
  background-size: cover;

  display: flex;
  justify-content: space-between;
}

.left {
  width: 50%;
}

.line-left {
  width: 350px;
  height: 2px;
  margin: 10px 0;
  background-color: black;
}

.line {
  width: 2px;
  height: 1350px;
  background-color: black;
}

.right {
  width: 40%;
}

.line-right {
  width: 300px;
  height: 2px;
  margin: 10px 0;
  background-color: black;
}

.title {
  width: 300px;
  height: 100px;
}

@media screen and (max-width: 500px) {
  .alcohol-category {
    width: 300px;
    height: 2400px;
    padding: 50px 30px;
    background-image: url(../assets/back-phone.png);
    flex-direction: column;
    justify-content: flex-start;
  }

  .left {
    width: 100%;
  }

  .line-left {
    width: 240px;
  }

  .line {
    width: 240px;
    height: 2px;
    margin: 10px 0;
  }

  .right {
    width: 100%;
  }

  .line-right {
    width: 240px;
  }

  .title {
    width: 180px;
    height: 70px;
  }
}
</style>

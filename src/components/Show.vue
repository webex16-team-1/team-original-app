<template>
  <div id="today-box">
    <div id="today-titile-box">
      <p id="today-title">今日のシーシャ</p>
      <p>今日のおすすめフレーバーは…？</p>
      <button @click="startRandom" id="flavor-button">
        フレーバーを表示する
      </button>
      <p v-if="result" id="result-text">{{ result }}です！</p>
    </div>
    <div id="today-image-box">
      <img class="img" v-if="result" :src="resultImagePath" />
    </div>
    <div v-if="result" id="today-text-box">
      <p id="today-text">{{ resultExplanation }}です！</p>
      <a :href="resultLink" class="today-text2">→フレーバーを購入する</a><br />
      <a href="./tweet" class="today-text2">→フレーバの評価をみる</a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      choice: [
        "Al Fakher ピーチ × Al Fakher マンゴー",
        "Al Fakher グレープ × FUMARI ミント",
        "Al Fakher ダブルアップル",
        "Al Fakher バナナ",
      ],
      image: ["img1.png", "img2.png", "img3.png", "img4.png"],
      explanation: [
        "フルーツそのままのジューシーさがウリ！くせがなく、万人に愛される味",
        "グレープの甘味とミントのさっぱり感が最高！ブランドが異なる組み合わせですが、非常にマッチしたフレーバー",
        "シーシャといえばこのフレーバー！「シーシャを試したい！」という人におすすめのフレーバー",
        "少し甘めのフレーバーを試したい人に！甘さと香りのバランスに優れた、初心者向けのフレーバー",
      ],
      link: [
        "https://www.shisha-mart.com/product/1744",
        "https://www.shisha-mart.com/product/2434",
        "https://csb-online.jp/product/al-fakher%e3%82%a2%e3%83%ab%e3%83%95%e3%82%a1%e3%83%bc%e3%83%98%e3%83%ab-two-apple%e3%83%88%e3%82%a5%e3%83%bc%e3%82%a2%e3%83%83%e3%83%97%e3%83%ab-50g%e3%80%9c250g",
        "https://csb-online.jp/product/al-fakher%e3%82%a2%e3%83%ab%e3%83%95%e3%82%a1%e3%83%bc%e3%83%98%e3%83%ab-banana%e3%83%90%e3%83%8a%e3%83%8a-50g%e3%80%9c250g",
      ],
      result: null,
      resultImage: null,
      resultExplanation: null,
      resultLink: null,
    }
  },
  methods: {
    startRandom() {
      //ランダムで相手の数字を決定する
      var num = Math.floor(Math.random() * 4)
      this.result = this.choice[num]
      this.resultImage = this.image[num]
      this.resultExplanation = this.explanation[num]
      this.resultLink = this.link[num]
      this.resultLinkPost = this.linkPost[num]
    },
  },
  computed: {
    resultImagePath() {
      console.log(this.resultImage)
      return require("../static/images/" + this.resultImage)
    },
  },
}
</script>
<style>
/*うぃんくんへ 
・文字サイズとかバランスを調整してください！
・画像はサンプルで入れてるけど、
ちゃんとしたのに切り替える時にもサイズ調整は必要だから
画面に合うようにうまくサイズ調整しといてほしい！
・後は色とかロゴとかも探しておいてくれると超助かる！
・投稿機能
・button-linkをボタンっぽくしてほしい！
*/

#today-box {
  display: flex;
  flex-direction: column;
  align-items: center;
}
#today-title {
  font-size: 50px;
  color: #fafafa;
}
#result-text {
  font-size: 30px;
}
button#flavor-button {
  /* ブラウザ特有のスタイルを無効に */
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;

  /* 整える */
  margin: 1em 0; /* 前後の隙間 */
  padding: 0.6em 1em; /* 塗りの余白 */
  font-size: 1em; /* フォントサイズ */
  background-color: #1aa1ff; /* 背景色 */
  color: #fff; /* テキストカラー */
  cursor: pointer; /* カーソルを指マークに */
  border-radius: 3px; /* 角の丸み */
  border: 0; /* 枠線を消す */
  transition: 0.3s; /* ホバーの変化を滑らかに */
}

/* ホバー時（カーソルをのせた時）の見た目 */
button#flavor-button:hover {
  background-color: #064fda; /* 背景色 */
}
.img {
  width: 700px;
  height: 500px;
}
#today-text-box {
  width: 700px;
}
#today-text {
  padding-top: 20px;
  font-size: 30px;
  color: #fafafa;
}
.today-text2 {
  padding-top: 20px;
  font-size: 20px;
}
</style>

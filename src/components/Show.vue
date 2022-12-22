<template>
  <div id="today-box">
    <div id="today-titile-box">
      <p id="today-title">今日のシーシャ</p>
      <p>今日のおすすめフレーバーは…？</p>
      <button @click="startRandom">フレーバーを表示する</button>
      <p v-if="result">{{ result }}です！</p>
    </div>
    <div id="today-image-box">
      <img class="img" v-if="resultImage" :src="resultImagePath" />
    </div>
    <div v-if="result" id="today-text-box">
      <p id="today-text">{{ resultExplanation }}です！</p>
      <a :herf="resultLink">フレーバーを購入する</a><br />
      <a :herf="resultLinkPost">フレーバの評価をみる</a>
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
        "フルーツそのままのジューシーさがウリ！くせがなく、万人に愛される味です。",
        "グレープの甘味とミントのさっぱり感が最高！ブランドが異なる組み合わせですが、非常にマッチしています。",
        "シーシャといえばこのフレーバー！「シーシャを試したい！」という人におすすめのフレーバーです。",
        "少し甘めのフレーバーを試したい人に！甘さと香りのバランスに優れた、初心者向けのフレーバーです。",
      ],
      link: [
        "リンク1",
        "リンク2",
        "https://csb-online.jp/product/al-fakher%e3%82%a2%e3%83%ab%e3%83%95%e3%82%a1%e3%83%bc%e3%83%98%e3%83%ab-two-apple%e3%83%88%e3%82%a5%e3%83%bc%e3%82%a2%e3%83%83%e3%83%97%e3%83%ab-50g%e3%80%9c250g",
        "リンク4",
      ],
      linkPost: ["投稿1", "投稿2", "投稿3", "投稿4"],
      result: null,
      resultImage: null,
      resultExplanation: null,
      resultLink: null,
      resultLinkPost: null,
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
.img {
  width: 700px;
  height: 500px;
}
#today-text {
  font-size: 20px;
  color: #fafafa;
}
</style>

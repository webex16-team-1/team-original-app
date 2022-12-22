<template>
  <div id="today-box">
    <div id="today-titile-box">
      <p id="today-title">今日のシーシャ</p>
      <p>今日のおすすめフレーバーは…？</p>
      <button v-if="result" @click="startRandom">フレーバーを表示する</button>
      <p>{{ result }}です！</p>
    </div>
    <div id="today-image-box">
      <img class="img" :src="resultImagePath" />
    </div>
    <div id="today-text-box">
      <p id="today-text">{{ resultExplanation }}です！</p>

      <button>{{ resultLink }}</button>
      <button>{{ resultLinkPost }}</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      choice: ["フレーバー1", "フレーバー2", "フレーバー3", "フレーバー4"],
      image: ["img1.png", "img2.png", "img3.png", "img4.png"],
      explanation: ["説明1", "説明2", "説明3", "説明4"],
      link: ["リンク1", "リンク2", "リンク3", "リンク4"],
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

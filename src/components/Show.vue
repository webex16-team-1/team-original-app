<template>
  <div id="block">
    <div id="show-box">
      <h3 id="title">今日のフレーバー</h3>
      <div class="random">
        <div class="random_start">
          <p>今日のおすすめフレーバーは…？</p>
          <button @click="startRandom">フレーバーを表示する</button>
        </div>
        <div class="random_result">
          <p v-if="result">{{ result }}です！</p>
          <img class="img" v-if="resultImage" :src="resultImagePath" />
          <p v-if="resultExplanation">{{ resultExplanation }}です！</p>
          <button v-if="resultLink">{{ resultLink }}</button>
          <button v-if="resultLinkPost">{{ resultLinkPost }}</button>
        </div>
      </div>
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

.img {
  width: 300px;
  height: 300px;
}
</style>

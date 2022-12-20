<template>
  <header class="header-nav">
    <nav><a href="./">TOP</a></nav>
    <nav><a href="./history">歴史</a></nav>
    <nav><a href="./explain">説明</a></nav>
  </header>

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
          <img class="img" :src="resultImage" />
          <p v-if="resultExplanation">{{ resultExplanation }}です！</p>
          <button v-if="resultLink">{{ resultLink }}</button>
          <button v-if="resultLinkPost">{{ resultLinkPost }}</button>
        </div>
      </div>
    </div>
  </div>
  <div class="show">
    <h1>This is my page</h1>
  </div>

  <footer>
    <p>©2022 webex</p>
  </footer>
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
.header-nav {
  background-color: #000;
  position: fixed;
  height: 60px;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}
nav {
  margin-right: 5%;
  color: white;
}
a {
  color: #fff;
  text-decoration: none;
}
#block {
  height: 800px;
  width: 100%;
  background-color: azure;
  display: flex;
  justify-content: center;
}
#title-box {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
#title {
  font-size: 80px;
}
footer {
  color: white;
  height: 30px;
  background-color: black;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  position: fixed;
  justify-content: center;
}
</style>

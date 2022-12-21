<template>
  <header class="header-nav">
    <p id="title">newbie smoke</p>
    <nav><a href="./">TOP</a></nav>
    <nav><a href="./history">歴史</a></nav>
    <nav><a href="./explain">説明</a></nav>
  </header>
  <div id="first-block">
    <div id="top-image-box">
      <image src="../assets/top-image.jpg" id="top-image"></image>
    </div>
    <div id="top-text-box">
      <p class="top-text">We love shisha</p>
      <p class="top-text">You will find your favorite</p>
    </div>
    <Show />
    <div id="today-box">
      <div id="today-titile-box">
        <p id="today-title">今日のシーシャ</p>
      </div>
      <div id="today-image-box">
        <image src="../assets/today-image.jpg" id="today-image"></image>
      </div>
      <div id="today-text-box">
        <p id="today-text">今日のシーシャはこれこれです。</p>
      </div>
    </div>
    <div id="explain-box">
      <div id="explain-image-box">
        <image src="../assets/explain-image.jpg" id="explain-image"></image>
      </div>
      <div id="explain-text-box">
        <p id="explain-title">シーシャって何？</p>
        <p id="explain-text">
          別名”水タバコ”とも呼ばれる「シーシャ」。近年SNSなどで話題を呼んでおり、愛好家が少しずつ増えている注目のトレンドです。
          シーシャには、煙にさまざまなフレーバーをプラスできるという特徴もあります。水タバコで燃やすタバコの葉には、さまざまなフレーバーがついているため、フルーティーな甘い味わい、刺激的なスパイシーな味わいなど、実に多彩な味や香りを楽しめます。そのため男性はもちろん、女性からも「おしゃれ」「おいしい」と親しまれています。
        </p>
      </div>
    </div>
    <div id="flavor-box">
      <div id="flavor-button">
        <p id="button-text">フレーバー体験</p>
      </div>
      <div id="flavor-text-box">
        <p class="flavor-text">→詳しく見る</p>
        <p class="flavor-text">→体験を投稿する</p>
      </div>
    </div>
  </div>

  <footer>
    <p>©2022 webex</p>
  </footer>
</template>

<script>
import Show from "../components/Show.vue"
export default {
  components: { Show },
}
</script>

<style>
.header-nav {
  border-bottom: solid 2px #fafafa;
  background-color: #1a1a1a;
  position: fixed;
  height: 60px;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}
.header-nav #title {
  color: #fafafa;
  position: fixed;
  left: 20px;
  font-size: 50px;
}
nav {
  margin-right: 5%;
  color: #fafafa;
}
a {
  color: #fafafa;
  text-decoration: none;
}
p {
  color: #fafafa;
  text-decoration: none;
}
#first-block {
  height: 4000px;
  width: 100%;
  background-color: #1a1a1a;
}
#top-image-box {
  text-align: right;
  padding-top: 400px;
}
#top-image {
  width: 900px;
  height: 500px;
}
.top-text {
  font-size: 70px;
  color: #fafafa;
  position: relative;
  bottom: 270px;
  left: 150px;
}
#today-box {
  display: flex;
  flex-direction: column;
  align-items: center;
}
#today-title {
  font-size: 50px;
  color: #fafafa;
}
#today-image {
  width: 700px;
  height: 500px;
}
#today-text {
  font-size: 20px;
  color: #fafafa;
}
#explain-box {
  padding-top: 200px;
  display: flex;
  justify-content: space-around;
}
#explain-image {
  width: 400px;
  height: 400px;
}
#explain-title {
  font-size: 40px;
  color: #fafafa;
}
#explain-text {
  font-size: 20px;
  color: #fafafa;
}
#flavor-box {
  padding-top: 200px;
  display: flex;
  justify-content: space-around;
}
#flavor-button {
  font-size: 30px;
  color: #fafafa;
}
.flavor-text {
  font-size: 20px;
  color: #fafafa;
}

footer {
  color: #fafafa;
  height: 30px;
  background-color: #1a1a1a;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  position: fixed;
  justify-content: center;
}
</style>

<template>
  <header class="header-nav">
    <p id="title">newbie smoke</p>
    <nav><a href="./">TOP</a></nav>
    <nav><a href="./tweet">投稿</a></nav>
    <nav><a href="#explain-box">説明</a></nav>
  </header>
  <div id="second-block">
    <div class="home__wrapper">
      <p>Al Fakher ピーチ × Al Fakher マンゴー</p>
      <img src="../static/images/img1.png" />
      <p>フルーツそのままのジューシーさがウリ！くせがなく、万人に愛される味</p>
      <p>フレーバーの評価</p>
      <submit-form />
      <p>Al Fakher グレープ × FUMARI ミント</p>
      <p>
        グレープの甘味とミントのさっぱり感が最高！ブランドが異なる組み合わせですが、非常にマッチしたフレーバー
      </p>
      <img src="../static/images/img2.png" />
      <p>フレーバーの評価</p>
      <submit-form />
      <p>Al Fakher ダブルアップル</p>
      <img src="../static/images/img3.png" />
      <p>
        シーシャといえばこのフレーバー！「シーシャを試したい！」という人におすすめのフレーバー
      </p>
      <p>フレーバーの評価</p>
      <submit-form />
      <p>Al Fakher バナナ</p>
      <img src="../static/images/img4.png" />
      <p>
        少し甘めのフレーバーを試したい人に！甘さと香りのバランスに優れた、初心者向けのフレーバー
      </p>
      <p>フレーバーの評価</p>
      <submit-form />
    </div>
    <Footer />
  </div>
</template>

<script>
import SubmitForm from "../components/SubmitForm.vue"
import Footer from "../components/Footer.vue"
export default {
  components: { SubmitForm, Footer },
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
#second-block {
  height: 1000px;
  background-color: rgba(0, 0, 0, 0.921);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.home__wrapper {
  margin: 0 auto;
  max-width: 600px;
  width: 50%;
  background-color: #ccc;
  margin: 15%;
}
.home__wrapper img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}
.header-nav {
  border-bottom: solid 2px #fafafa;
  background-color: #1a1a1a;
  position: fixed;
  top: 0px;
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
</style>

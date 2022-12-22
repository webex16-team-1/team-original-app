<template>
  <header class="header-nav">
    <p id="title">newbie smoke</p>
    <nav><a href="./">TOP</a></nav>
    <nav><a href="./tweet">投稿</a></nav>
    <nav><a href="#explain-box">説明</a></nav>
  </header>
  <div id="second-block">
    <div class="home__wrapper">
      <p>フレーバー1の説明</p>
      <p>ああああああああああああ</p>
      <p>フレーバーの評価</p>
      <submit-form />
      <p>フレーバー2の説明</p>
      <p>ああああああああああああ</p>
      <p>フレーバーの評価</p>
      <submit-form />
      <p>フレーバー3の説明</p>
      <p>ああああああああああああ</p>
      <p>フレーバーの評価</p>
      <submit-form />
      <p>フレーバー4の説明</p>
      <p>ああああああああああああ</p>
      <p>フレーバーの評価</p>
      <submit-form />
    </div>
  </div>
</template>

<script>
import SubmitForm from "../components/SubmitForm.vue"
export default {
  components: { SubmitForm },
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

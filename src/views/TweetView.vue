<template>
  <header class="header-nav">
    <nav><a href="./">TOP</a></nav>
    <nav><a href="./history">歴史</a></nav>
    <nav><a href="./explain">説明</a></nav>
  </header>
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
</template>

<script>
import SubmitForm from "../components/SubmitForm.vue"
export default {
  components: { SubmitForm },
}
</script>

<style scoped>
.home__wrapper {
  margin: 0 auto;
  max-width: 600px;
  background-color: #ccc;
  margin: 15%;
}
</style>

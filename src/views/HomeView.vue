<template>
  <header class="header-nav">
    <nav><a href="./">TOP</a></nav>
    <nav><a href="./history">歴史</a></nav>
    <nav><a href="./explain">説明</a></nav>
  </header>
  <div id="first-block">
    <image src="../assets/smoke1.jpg" id="smoke-image"></image>
    <div id="text-box">
      <p class="text1">We love shisha.</p>
      <p class="text1">You will find your favorite</p>
    </div>
    <div id="today-box">
      <h1>今日のシーシャ</h1>
      <image src="../assets/smoke1.jpg" id="smoke-image"></image>
      <p class="content-detail">
        説明：あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
      </p>
      <p class="content-detail">HP：https://google.com</p>
    </div>

    <div id="explain-box">
      <h2>シーシャの説明</h2>
      <p id="explain-text">
        シーシャはシーシャです。シーシャはシーシャです。
        シーシャはシーシャです。 シーシャはシーシャです。
        シーシャはシーシャです。 シーシャはシーシャです。
      </p>
    </div>
  </div>
  <div class="home"></div>

  <footer>
    <p>©2022 webex</p>
  </footer>
</template>

<script></script>

<style>
.header-nav {
  border-bottom: solid 2px white;
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

#first-block {
  height: 3000px;
  width: 100%;
  background-color: black;
}
#smoke-image {
  padding-top: 100px;
  height: 500px;
  width: 700px;
}
.text1 {
  font-size: 30px;
  color: white;
}
#today-box {
  width: 700px;
  height: 500px;
}
.content-detail {
  padding-top: 30px;
  border-bottom: solid 2px white;
  color: white;
  text-align: center;
  display: inline;
}
.explain-box {
  padding-top: 300px;
  display: flex;
  justify-content: space-between;
}

h2 {
  color: white;
}
#explain-text {
  color: white;
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

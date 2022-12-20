<template>
  <header class="header-nav">
    <nav><a href="./">TOP</a></nav>
    <nav><a href="./history">歴史</a></nav>
    <nav><a href="./explain">説明</a></nav>
  </header>

  <div id="block">
    <div id="title-box">
      <h1 id="title">今日のフレーバー</h1>
      <a class="link" href="./show"></a>
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
  margin-top: 200px;
  height: 40%;
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 2px solid black;
}
.link {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
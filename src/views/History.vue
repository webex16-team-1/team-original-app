<template>
  <header class="header-nav">
    <nav><a href="./">TOP</a></nav>
    <nav><a href="./history">歴史</a></nav>
    <nav><a href="./explain">説明</a></nav>
  </header>

  <div id="block">
    <div id="history-box">
      <p>シーシャの歴史</p>
    </div>
  </div>

  <div class="history">
    <h1>This is my page</h1>
  </div>

  <footer>
    <p>©2022 webex</p>
  </footer>
</template>

<style>
.header-nav {
  background-color: #1a1a1a;
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
  color: #fafafa;
}
a {
  color: #fafafa;
  text-decoration: none;
}
#block {
  height: 800px;
  width: 100%;
  background-color: azure;
  display: flex;
  justify-content: center;
}
#history-box {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
#title {
  font-size: 80px;
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

<template>
  <header class="header-nav">
    <nav><a href="./">TOP</a></nav>
    <nav><a href="./history">歴史</a></nav>
    <nav><a href="./explain">説明</a></nav>
  </header>

  <div id="block-explain">
    <div id="explain-box">
      <p>
        別名”水タバコ”とも呼ばれる「シーシャ」。近年SNSなどで話題を呼んでおり、愛好家が少しずつ増えている注目のトレンドです。
        シーシャには、煙にさまざまなフレーバーをプラスできるという特徴もあります。水タバコで燃やすタバコの葉には、さまざまなフレーバーがついているため、フルーティーな甘い味わい、刺激的なスパイシーな味わいなど、実に多彩な味や香りを楽しめます。そのため男性はもちろん、女性からも「おしゃれ」「おいしい」と親しまれています。
      </p>
    </div>
  </div>

  <div class="my-page"></div>

  <footer>
    <p>©2022 webex</p>
  </footer>
</template>

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
#block-explain {
  height: 800px;
  width: 100%;
  /* background-color: azure; */
  background-image: url("../static/images/background.png");
  display: flex;
  justify-content: center;
}
#block-explain p {
  color: #fff;
}
#explain-box {
  display: flex;
  padding: 20%;
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

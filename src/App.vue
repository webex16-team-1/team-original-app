<template>
  <div>
    <div id="routes">
      <router-link to="/" class="text">Home</router-link> |
      <router-link to="/detail" class="text">Detail</router-link> |
      <router-link to="/tweet" class="text">Show</router-link> |
    </div>
    <router-view />
  </div>
</template>
<style>
#routes {
  background-color: black;
}
.text {
  color: black;
}
</style>

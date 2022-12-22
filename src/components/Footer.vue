// eslint-disable-next-line vue/multi-word-component-names
<template>
  <footer class="footer">
    <div>
      This Application is made by
      <span class="names">win, zukky, takaba, and yuki</span>.
    </div>
    <div class="explanation">
      <small
        >The Application is created as a part of the GeekSalon WebExpert
        Course.</small
      >
    </div>
  </footer>
</template>

<style scoped>
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
.names {
  display: inline-flex;
  justify-content: center;
  gap: 1rem;
}
#explanation {
  margin: 1px;
}
</style>

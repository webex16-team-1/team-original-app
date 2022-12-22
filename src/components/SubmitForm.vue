<template>
  <div class="container" id="app" v-cloak>
    <h1>評価</h1>
    <div v-if="length">
      <h2>評価点 : {{ averageScore }}</h2>
    </div>
    <form v-on:submit.prevent>
      <input type="textarea" v-model="comment" />
      <select v-model="rate">
        <option value="0">☆☆☆☆☆</option>
        <option value="1">★☆☆☆☆</option>
        <option value="2">★★☆☆☆</option>
        <option value="3">★★★☆☆</option>
        <option value="4">★★★★☆</option>
        <option value="5">★★★★★</option>
      </select>
      <button v-on:click="submit">送信</button>
      <button v-on:click="sort">⬇︎</button>
      <button v-on:click="sortUp">⬆︎</button>
    </form>
    <div v-for="(comment, index) in comments" :key="comment.id">
      <ul>
        <li>
          満足度 : <span>{{ "★".repeat(comment.rate) }}</span>
        </li>
        <p>
          コメント : <span>{{ comment.comment }}</span>
        </p>
        <button v-on:click="deleteItem(index)">delete</button>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comment: "",
      rate: 0,
      comments: [],
      sun: 0,
      length: false, //使いたい変数達
    }
  },
  methods: {
    submit: function () {
      if (this.comment == "") return
      if (this.comment.length > 100) return
      let commentItem = {
        comment: this.comment,
        rate: this.rate,
      }
      this.comments.unshift(commentItem)
      this.sun = this.sun + Number(commentItem.rate)
      this.comment = ""
      this.rate = 0
      if (this.comments.length > 0) {
        this.length = true
      }
    },
    deleteItem: function (index) {
      this.sun = this.sun - Number(this.comments[index].rate)
      this.comments.splice(index, 1)
      if (this.comments.length < 1) {
        this.length = false
      }
    },
    sortUp: function () {
      let arr = this.comments
      arr.sort(function (a, b) {
        if (a.rate > b.rate) return 1
        if (a.rate < b.rate) return -1
        return 0
      })
      this.comments = arr
    },
    sort: function () {
      let arr = this.comments
      arr.sort(function (a, b) {
        if (a.rate > b.rate) return -1
        if (a.rate < b.rate) return 1
        return 0
      })
      this.comments = arr
    },
  },
  computed: {
    averageScore: function () {
      return (this.sun / this.comments.length).toFixed(2)
      //算出プロパティと言います。変数averageScoreをhtml側で呼び出すと
      //自動的に関数内の処理を実行してくれます。他にも監視プロパティというものもありますが監視プロパティに比べて
      //処理結果をキャッシュしてくれるというのが大きな特徴です。
    },
  },
}
</script>

<style scoped>
.form__wrapper {
  padding: 1rem;
}
.form__textarea {
  width: 100%;
  height: calc(1.3rem * 3 + 0.5rem * 2);
  padding: 0.5rem;
  line-height: 1.3rem;
  border-radius: 5px;
  border: none;
  resize: none;
}
.form__textarea:focus {
  outline: none;
}
.form__buttons {
  display: flex;
  justify-content: flex-end;
}
</style>

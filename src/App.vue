<template>
  <div class="app">
    <button v-on:click="postTweet">ツイートします</button>
  </div>
</template>

<script>
import { collection, addDoc } from "firebase/firestore"
// firebase.js で db として export したものを import
import { db } from "./firebase"

export default {
  methods: {
    postTweet() {
      addDoc(collection(db, "tweets"), {
        text: "こんにちは、ツイートの本文です。",
      })
    },
  },
}
</script>

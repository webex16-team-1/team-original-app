import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCO3sRcLtrHG33L_GiF9HhWsQGusXlWrEw",
  authDomain: "team-original-app-4041b.firebaseapp.com",
  projectId: "team-original-app-4041b",
  storageBucket: "team-original-app-4041b.appspot.com",
  messagingSenderId: "885888451910",
  appId: "1:885888451910:web:0c9c453fd908b4ae079147",
  measurementId: "G-BG4183WSP8",
}

// Firebaseアプリオブジェクトを初期化
const app = initializeApp(firebaseConfig)
// Firestoreを読み込み、db(databaseの略)として export
export const db = getFirestore(app)

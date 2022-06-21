import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWV0gL_iSWnTr4gbrBeLLQDpFiwBrr0ak",
  authDomain: "team6-original-app-3eb13.firebaseapp.com",
  projectId: "team6-original-app-3eb13",
  storageBucket: "team6-original-app-3eb13.appspot.com",
  messagingSenderId: "632059118716",
  appId: "1:632059118716:web:1efc4ff6a55d7e5cacf5f9",
  measurementId: "G-KZCZVTGCEV",
}

// Firebaseアプリオブジェクトを初期化
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)

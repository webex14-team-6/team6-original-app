import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkf_cuVnbs-cu-9bGy_ZogGsKLiFMlFmQ",
  authDomain: "team6-original-app.firebaseapp.com",
  projectId: "team6-original-app",
  storageBucket: "team6-original-app.appspot.com",
  messagingSenderId: "349348355384",
  appId: "1:349348355384:web:2fa8c700db9bdca6c235cd",
  measurementId: "G-26HMFK35RQ",
}

// Firebaseアプリオブジェクトを初期化
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)

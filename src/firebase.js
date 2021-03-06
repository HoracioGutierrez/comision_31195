import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: "comision-31195.firebaseapp.com",
  projectId: "comision-31195",
  storageBucket: "comision-31195.appspot.com",
  messagingSenderId: "920580470689",
  appId: "1:920580470689:web:e2d7b39659e98064d43de0"
}

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
//1) Me traigo le metodo de autenticacion con firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

//2) Traigo los keys privados de la plataforma web
const firebaseConfig = {
  apiKey: "AIzaSyCbIHZ-8-phA1jKBd1inNwR8s1jo7cuwGg",
  authDomain: "comision-31195.firebaseapp.com",
  projectId: "comision-31195",
  storageBucket: "comision-31195.appspot.com",
  messagingSenderId: "920580470689",
  appId: "1:920580470689:web:e2d7b39659e98064d43de0"
}

//3) Me autentico usando el metodo del paso 1 y los keys del 2
const app = initializeApp(firebaseConfig);

//4) Obtener una referencia/puntero a la base de datos
export const db = getFirestore(app)
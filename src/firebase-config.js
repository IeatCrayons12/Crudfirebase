import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyA-jaHiY3TiMyWp6MPvoy_oB8eLejVypuI",
    authDomain: "cool-crud-system.firebaseapp.com",
    projectId: "cool-crud-system",
    storageBucket: "cool-crud-system.appspot.com",
    messagingSenderId: "432213297302",
    appId: "1:432213297302:web:e5c2eb629ed69d68fc9ab7",
    measurementId: "G-V81MGHB5K2"
  };
  const app = initializeApp(firebaseConfig)
  export const db = getFirestore(app)
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBC5gkGCHCdEByNXMM85yTkcv7Vi6H2B-A",
  authDomain: "localhost",
  projectId: "flexfit-63c0c",
  storageBucket: "gs://flexfit-63c0c.appspot.com",
  messagingSenderId: "1086911363831",
  appId: "1:1086911363831:web:8dac101ceb861e5c71b1f2",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

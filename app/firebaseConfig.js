import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyABPnnpNd4gAogs_YeCbsZAGD1qaozj2Uk",
  authDomain: "chocadeira-68d24.firebaseapp.com",
  projectId: "chocadeira-68d24",
  storageBucket: "chocadeira-68d24.appspot.com",
  messagingSenderId: "747075073134",
  appId: "1:747075073134:web:8f3e984b604a165984e27f",
  databaseURL: "https://chocadeira-68d24-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
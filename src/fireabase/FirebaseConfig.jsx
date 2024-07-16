// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyAg3r4UOIg6A4rgy2SKaF5F6SxZpoH3-iA",
  authDomain: "glass-memento-388105.firebaseapp.com",
  databaseURl:
    "https://glass-memento-388105-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "glass-memento-388105",
  storageBucket: "glass-memento-388105.appspot.com",
  messagingSenderId: "938239714367",
  appId: "1:938239714367:web:8876432adb23d0d32f848a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export { fireDB, auth };
// writting to fetch the name and shop name
const database = getDatabase(app);
export { database };

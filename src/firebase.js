// src/firebase.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyD9izUgxuMWaJUEckfSDOiK-oRJcR3N_Y4",
    authDomain: "mytestproject-9bc94.firebaseapp.com",
    projectId: "mytestproject-9bc94",
    storageBucket: "mytestproject-9bc94.appspot.com",
    messagingSenderId: "489240438085",
    appId: "1:489240438085:web:8327d562dc33b7f050ca2c"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const firestore = getFirestore(app);
const ImgDB = getFirestore(app);

export { storage, firestore, ImgDB };


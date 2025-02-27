import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyDx3bI7KY9xVKxGcu99U-qnrNvRwUzk-w4",
    authDomain: "my-portfolio-78a54.firebaseapp.com",
    projectId: "my-portfolio-78a54",
    storageBucket: "my-portfolio-78a54.firebasestorage.app",
    messagingSenderId: "382874621641",
    appId: "1:382874621641:web:367acd99ebe271f197df18",
    measurementId: "G-QJ4HMWHT13"
  };

  const app = getApp.length > 0 ? getApp() : initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export { app, db }
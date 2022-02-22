import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig2 = {
    apiKey: "AIzaSyDhYuWK_8Uy4S-BtkFmFfityIjQnt4M3Is",
    authDomain: "pizzerialove-00.firebaseapp.com",
    projectId: "pizzerialove-00",
    storageBucket: "pizzerialove-00.appspot.com",
    messagingSenderId: "356504995914",
    appId: "1:356504995914:web:c5fee404edbf5f32affeb3",
    measurementId: "G-CK1N9HMEKD"
  };


    const firebaseConfig = {
      apiKey:process.env.REACT_APP_FIREBASE_API_KEY,
      authDomain:process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
      projectId:process.env.REACT_APP_FIREBASE_PROJECT_ID,
      storageBucket:process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
      messagingSenderId:process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
      appId:process.env.REACT_APP_FIREBASE_APP_ID,
      measurementId:process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
    };
      
    

// Initialize Firebase
const app = initializeApp(firebaseConfig4);
const analytics = getAnalytics(app);
const db= getFirestore();
const auth=getAuth();

export {app,analytics,db,auth};
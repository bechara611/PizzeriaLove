import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey:process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "pizzerialove-00.firebaseapp.com",
  projectId: "pizzerialove-00",
  storageBucket: "pizzerialove-00.appspot.com",
  messagingSenderId: "356504995914",
  appId: "1:356504995914:web:c5fee404edbf5f32affeb3",
  measurementId: "G-CK1N9HMEKD"
};

const firebaseConfig2 = {
    apiKey: "AIzaSyDhYuWK_8Uy4S-BtkFmFfityIjQnt4M3Is",
    authDomain: "pizzerialove-00.firebaseapp.com",
    projectId: "pizzerialove-00",
    storageBucket: "pizzerialove-00.appspot.com",
    messagingSenderId: "356504995914",
    appId: "1:356504995914:web:c5fee404edbf5f32affeb3",
    measurementId: "G-CK1N9HMEKD"
  };
  const firebaseConfig3 = {
    apiKey:process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain:process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
    projectId:process.env.REACT_APP_FIREBASE_PROJECTID,
    storageBucket:process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
    messagingSenderId:process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
    appId:process.env.REACT_APP_FIREBASE_APPID,
    measurementId:process.env.REACT_APP_FIREBASE_MEASUREMENTID
    };
    
    

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db= getFirestore();
const auth=getAuth();

export {app,analytics,db,auth};
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAS-NPz-2TR2KoZsnfhx_pL2VU00UBOyWE",
    authDomain: "donation-app-aa920.firebaseapp.com",
    projectId: "donation-app-aa920",
    storageBucket: "donation-app-aa920.appspot.com",
    messagingSenderId: "72584724639",
    appId: "1:72584724639:web:97bef84e36cfdcfaa022aa"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth }
export default db;
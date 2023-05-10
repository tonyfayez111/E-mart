// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGQxr_07e-lHtDRYikmZHvpId5WDbh100",
  authDomain: "emart-b1248.firebaseapp.com",
  projectId: "emart-b1248",
  storageBucket: "emart-b1248.appspot.com",
  messagingSenderId: "30766403507",
  appId: "1:30766403507:web:1de7af26a90df0dbdcc5c6",
  measurementId: "G-1FKWHD885R",
};

firebase.initializeApp(firebaseConfig);

export default firebase;

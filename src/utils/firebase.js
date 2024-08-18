import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDVtnt_ZpyvpPfL0MuyVeAA8wQS7vikRrc",
  authDomain: "biteway-dc684.firebaseapp.com",
  projectId: "biteway-dc684",
  storageBucket: "biteway-dc684.appspot.com",
  messagingSenderId: "24643858720",
  appId: "1:24643858720:web:59181f9aa8fa821c6c2745"
};

export const initFirebase = initializeApp(firebaseConfig);
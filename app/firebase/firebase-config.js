// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQPvUbmPgtcG4gknq4YvjgGJke0mC_b0Q",
  authDomain: "planetageek-750d3.firebaseapp.com",
  projectId: "planetageek-750d3",
  storageBucket: "planetageek-750d3.appspot.com",
  messagingSenderId: "555479139552",
  appId: "1:555479139552:web:2746bef537ec2d0902fc85",
  measurementId: "G-C90TEKXMK3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBC5eIb22oXgy7PpnGDgNydmVWnM23QEUk",
  authDomain: "fir-ecommerce-cbce7.firebaseapp.com",
  projectId: "fir-ecommerce-cbce7",
  storageBucket: "fir-ecommerce-cbce7.appspot.com",
  messagingSenderId: "424555425144",
  appId: "1:424555425144:web:105b9d0a8fefa017c1ec8d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDb = getFirestore(app);

export default fireDb;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';
// import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyr_JvDA7hGHTI02mvbaCyoLFUPLh5PDw",
  authDomain: "book-store-wms.firebaseapp.com",
  projectId: "book-store-wms",
  storageBucket: "book-store-wms.appspot.com",
  messagingSenderId: "626642600932",
  appId: "1:626642600932:web:fe59c8021619a10f393df1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const storage = getStorage(app);
// export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
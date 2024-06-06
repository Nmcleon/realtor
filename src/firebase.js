// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBb_n4obGhwYTT3SwrSsUAWHzONZZG5INQ',
  authDomain: 'realtor-clone-e0a90.firebaseapp.com',
  projectId: 'realtor-clone-e0a90',
  storageBucket: 'realtor-clone-e0a90.appspot.com',
  messagingSenderId: '517910863753',
  appId: '1:517910863753:web:087bc252c5adad0d8e8b58',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

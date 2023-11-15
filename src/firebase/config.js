import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQ767MHG3bVbfPLUiXx13wKR_IC2FX7UU",
  authDomain: "fir-3ea1e.firebaseapp.com",
  projectId: "fir-3ea1e",
  storageBucket: "fir-3ea1e.appspot.com",
  messagingSenderId: "674928691445",
  appId: "1:674928691445:web:4b7a80a02ee7ec526b9dbc",
  measurementId: "G-J033PFJCJY"
};

  const firebaseapp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseapp)
  
  export default db
  
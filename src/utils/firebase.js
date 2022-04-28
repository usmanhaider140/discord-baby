// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDVwVzbJm-DVZllUnFKBdv98px8OO4nHY8",
  authDomain: "netflix-clone-5aad0.firebaseapp.com",
  projectId: "netflix-clone-5aad0",
  storageBucket: "netflix-clone-5aad0.appspot.com",
  messagingSenderId: "944510313055",
  appId: "1:944510313055:web:93cd568525ec430a2571ea",
  measurementId: "G-RTKQCQRD9Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const provider = new GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
const auth = getAuth();

export { auth, db, provider };

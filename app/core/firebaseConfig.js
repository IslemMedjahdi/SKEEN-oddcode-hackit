import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAWmDhZtCkPKIRjnj7cfHd2RPyVxltGPww",
  authDomain: "oddcode-b1d64.firebaseapp.com",
  projectId: "oddcode-b1d64",
  storageBucket: "oddcode-b1d64.appspot.com",
  messagingSenderId: "866491719866",
  appId: "1:866491719866:web:a9c64ffd3bbd4fa938e283",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

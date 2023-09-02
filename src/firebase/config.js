import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"


export const firebaseConfig = {
  apiKey: "AIzaSyBI69LgZWp_hZYdjqiXDCgGcKZjDk8mvjI",
  authDomain: "kial-e732d.firebaseapp.com",
  projectId: "kial-e732d",
  storageBucket: "kial-e732d.appspot.com",
  messagingSenderId: "969515615795",
  appId: "1:969515615795:web:6bd70aa5a444e4ba600546"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
export default app
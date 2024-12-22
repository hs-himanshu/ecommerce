import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDa6V1lHBpdxwGCUQgWLZqGCmzGWJxKPwo",
  authDomain: "ecommerce-e99be.firebaseapp.com",
  projectId: "ecommerce-e99be",
  storageBucket: "ecommerce-e99be.firebasestorage.app",
  messagingSenderId: "120339538800",
  appId: "1:120339538800:web:d2f8f4b6588e48887ba5b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
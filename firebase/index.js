import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyARWYbZoRQm5OWcsuXBrxMsY3PhUjfrqrw",
  authDomain: "todo-app-b1a00.firebaseapp.com",
  projectId: "todo-app-b1a00",
  storageBucket: "todo-app-b1a00.appspot.com",
  messagingSenderId: "231582485133",
  appId: "1:231582485133:web:8927f1cc0ac0e1588530c4",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

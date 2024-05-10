import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBnnBKpPE4oxOlCDNdCwyijXL2rC3s6XEQ",
  authDomain: "mart-17727.firebaseapp.com",
  projectId: "mart-17727",
  storageBucket: "mart-17727.appspot.com",
  messagingSenderId: "810557736454",
  appId: "1:810557736454:web:71885477777acc6c626587",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBvW5KNkNQqcl1h63yJdM1-Nqg_xF8C4ds",
  authDomain: "ilcapuccino-f128f.firebaseapp.com",
  projectId: "ilcapuccino-f128f",
  storageBucket: "ilcapuccino-f128f.appspot.com",
  messagingSenderId: "21010490544",
  appId: "1:21010490544:web:06f9e6b39feb1944098775"
};


const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpLOpnrfmgmqc1gdDji2JP0n2pHp1_lUs",
  authDomain: "pi-tdm-2.firebaseapp.com",
  projectId: "pi-tdm-2",
  storageBucket: "pi-tdm-2.firebasestorage.app",
  messagingSenderId: "727266621927",
  appId: "1:727266621927:web:d39fef7442930662546542"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
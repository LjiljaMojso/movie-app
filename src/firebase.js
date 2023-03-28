import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAN8Nxj1j1gwHoHyjIISTKiNxSmSoFsN2w",
  authDomain: "moviewatchlistapp-4c56e.firebaseapp.com",
  projectId: "moviewatchlistapp-4c56e",
  storageBucket: "moviewatchlistapp-4c56e.appspot.com",
  messagingSenderId: "443400533481",
  appId: "1:443400533481:web:88655abb4b248f5fc90778",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

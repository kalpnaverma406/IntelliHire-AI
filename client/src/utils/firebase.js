
import { initializeApp } from "firebase/app";
import {getAuth ,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "intellihire-1ff27.firebaseapp.com",
  projectId: "intellihire-1ff27",
  storageBucket: "intellihire-1ff27.firebasestorage.app",
  messagingSenderId: "243573475142",
  appId: "1:243573475142:web:f73a6113a5dc66e8458747"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);
const provider=new GoogleAuthProvider();
provider.setCustomParameters({
  prompt:"select_account"
});
export {auth,provider};
import { initializeApp } from "firebase/app";
import { EmailAuthProvider, GoogleAuthProvider, getAuth, linkWithPopup } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAjaQSCgDEqZRWrOfVeAQUiBgVIVA5so-c",
  authDomain: "wayte-30d8c.firebaseapp.com",
  projectId: "wayte-30d8c",
  storageBucket: "wayte-30d8c.appspot.com",
  messagingSenderId: "671003878557",
  appId: "1:671003878557:web:b0a5da756ca9090f892074"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()

const provider = new GoogleAuthProvider()

linkWithPopup(auth.currentUser, provider).then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result)
    const user = result.user
}).catch((error) => {
    console.error(error)
})
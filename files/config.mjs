import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDBFRQk4_fJN9y92AVbBH4h3kHYSwLGAlo",
    authDomain: "website-no--1.firebaseapp.com",
    projectId: "website-no--1",
    storageBucket: "website-no--1.appspot.com",
    messagingSenderId: "569980740275",
    appId: "1:569980740275:web:8b392af2daf8eb7e5706c6"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
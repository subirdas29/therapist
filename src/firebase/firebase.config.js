// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLv7Kv10EY9x2Ie39wmNhqQb8UJmQeO0M",
  authDomain: "therapist-zone.firebaseapp.com",
  projectId: "therapist-zone",
  storageBucket: "therapist-zone.appspot.com",
  messagingSenderId: "254086742742",
  appId: "1:254086742742:web:dc6d0ad11cd7f7e8253f77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
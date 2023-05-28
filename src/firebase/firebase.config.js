
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBS5jpGns01CX4qRt0dUhQfL9PLnJPDDvU",
  authDomain: "the-book-house-auth-322e3.firebaseapp.com",
  projectId: "the-book-house-auth-322e3",
  storageBucket: "the-book-house-auth-322e3.appspot.com",
  messagingSenderId: "1029485169878",
  appId: "1:1029485169878:web:9080fc7314e8adb08f4d77"
};

const app = initializeApp(firebaseConfig);
export default app
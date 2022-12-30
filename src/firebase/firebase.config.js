// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBK3G7CGln3m0g8dJKcibVkFWnapF7PHdE",
    authDomain: "task-tracker-246b4.firebaseapp.com",
    projectId: "task-tracker-246b4",
    storageBucket: "task-tracker-246b4.appspot.com",
    messagingSenderId: "739593240598",
    appId: "1:739593240598:web:807f2df21aef99768b7537"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
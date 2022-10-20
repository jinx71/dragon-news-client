// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA-EnFc1kdvsTtmZJ1xJ7EEY9FHTjWipwM",
    authDomain: "dragon-news-client-auth.firebaseapp.com",
    projectId: "dragon-news-client-auth",
    storageBucket: "dragon-news-client-auth.appspot.com",
    messagingSenderId: "979720575457",
    appId: "1:979720575457:web:a8f58cc2551f9815985aa0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
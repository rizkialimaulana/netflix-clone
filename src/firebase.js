// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC581c2THOhpb_N09u21ZkaahFxYbyFYcA",
  authDomain: "netflix-clone-58fd1.firebaseapp.com",
  projectId: "netflix-clone-58fd1",
  storageBucket: "netflix-clone-58fd1.appspot.com",
  messagingSenderId: "440337767035",
  appId: "1:440337767035:web:7120103b459c7bc6df60de",
  measurementId: "G-FXEXY1V3C1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
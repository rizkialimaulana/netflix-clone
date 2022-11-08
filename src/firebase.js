import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

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
const app = initializeApp(firebaseConfig)
export const auth = getAuth();
export const google = new GoogleAuthProvider()
export default app;
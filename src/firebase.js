import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDxvCOUDYeEXmLdSPG4hk_PzeU2eaBVCTg",
  authDomain: "linkedin-clone-ff055.firebaseapp.com",
  projectId: "linkedin-clone-ff055",
  storageBucket: "linkedin-clone-ff055.appspot.com",
  messagingSenderId: "684168875737",
  appId: "1:684168875737:web:75b161dada6b88a6a9f8c8",
  measurementId: "G-Y6GSLDSMM9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

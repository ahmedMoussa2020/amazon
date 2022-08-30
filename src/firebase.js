// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCl5hXw_1LZgWnlk_Zx16w2uqPVvK_jSEI",
  authDomain: "challenge-d6e62.firebaseapp.com",
  projectId: "challenge-d6e62",
  storageBucket: "challenge-d6e62.appspot.com",
  messagingSenderId: "684504999067",
  appId: "1:684504999067:web:c625a2ea2a864136c2123e",
  measurementId: "G-9479XVGVDG"
};

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export { db, auth };

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };

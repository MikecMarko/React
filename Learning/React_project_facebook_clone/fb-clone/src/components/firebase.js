import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCpFH5deuv-Chjui7nKMrpRKT4Wbd8TfBc',
  authDomain: 'fb-clone-4fb8f.firebaseapp.com',
  projectId: 'fb-clone-4fb8f',
  storageBucket: 'fb-clone-4fb8f.appspot.com',
  messagingSenderId: '76215981669',
  appId: '1:76215981669:web:4b7ecaf7cf653204dc188c',
  measurementId: 'G-ZMT89SLNTR',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

//explicit export
export { auth, provider };
//default export
export default db;

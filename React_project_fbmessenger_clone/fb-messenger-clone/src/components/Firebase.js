// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDwtCmsfpI_PWTuvtVb00e9q00WTB6kuE4',
  authDomain: 'fbmessenger-clone-fe50e.firebaseapp.com',
  projectId: 'fbmessenger-clone-fe50e',
  storageBucket: 'fbmessenger-clone-fe50e.appspot.com',
  messagingSenderId: '1076281228226',
  appId: '1:1076281228226:web:59f8e96a0306ba3c11345b',
  measurementId: 'G-Q306JCCEPL',
});

const db = firebaseApp.firestore();

export default db;

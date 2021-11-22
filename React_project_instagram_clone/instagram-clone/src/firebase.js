import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDwWxqUOTiotnwFR7QLk6gqpYKz1WSmBkg',
  authDomain: 'instagram-clone-react-dc006.firebaseapp.com',
  databaseURL:
    'https://instagram-clone-react-dc006-default-rtdb.firebaseio.com',
  projectId: 'instagram-clone-react-dc006',
  storageBucket: 'instagram-clone-react-dc006.appspot.com',
  messagingSenderId: '523143693031',
  appId: '1:523143693031:web:5e4c07bd917968993c1842',
  measurementId: 'G-C8W1000F3Y',
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

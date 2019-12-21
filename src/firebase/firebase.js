import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'xxxxx',
  authDomain: 'xxxxx.firebaseapp.com',
  databaseURL: 'https://xxxxx.firebaseio.com',
  projectId: 'xxxxx',
  storageBucket: '',
  messagingSenderId: 'xxxxx',
};

firebase.initializeApp(firebaseConfig);

export default firebase;

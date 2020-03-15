import firebase from 'firebase';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyD099rOOSoe-kY7BNG6Cs0bav-6brXnlug',
  authDomain: 'insectnet-web-apps.firebaseapp.com',
  databaseURL: 'https://insectnet-web-apps.firebaseio.com',
  projectId: 'insectnet-web-apps',
  storageBucket: 'insectnet-web-apps.appspot.com',
  messagingSenderId: '783064939557',
  appId: '1:783064939557:web:77c155bb4e56af8ff953cc',
  measurementId: 'G-G8JNVE5QGE'
};
firebase.initializeApp(config);
const db = firebase.firestore();

export const dbPlayersRef = db.collection('Players');

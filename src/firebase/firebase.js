import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyADRPXBQJXBVFAOAQEQdm0D8I0wYiQgCLQ",
    authDomain: "emergency-f1f7a.firebaseapp.com",
    databaseURL: "https://emergency-f1f7a.firebaseio.com",
    projectId: "emergency-f1f7a",
    storageBucket: "emergency-f1f7a.appspot.com",
    messagingSenderId: "679995520268",
    appId: "1:679995520268:web:0728bf21caaf26ea1fc529"
  };

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firebaseDb = firebaseApp.firestore();

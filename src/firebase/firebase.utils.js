import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBOG4X6tB7u728OkVieZblU-WtVf1lGLx4",
    authDomain: "clothing-shop-db-37ee7.firebaseapp.com",
    databaseURL: "https://clothing-shop-db-37ee7.firebaseio.com",
    projectId: "clothing-shop-db-37ee7",
    storageBucket: "clothing-shop-db-37ee7.appspot.com",
    messagingSenderId: "799825953335",
    appId: "1:799825953335:web:7c7fd9632ea0776093f5b2",
    measurementId: "G-00XJBLPPSS"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'})
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
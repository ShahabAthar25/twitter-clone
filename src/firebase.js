import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDkLKvAdiQGAi0q44EM9xgZYVduafVHncc",
    authDomain: "twitter-clone-3c6c2.firebaseapp.com",
    projectId: "twitter-clone-3c6c2",
    storageBucket: "twitter-clone-3c6c2.appspot.com",
    messagingSenderId: "297928508006",
    appId: "1:297928508006:web:893d8cd3aa76c28806e3a7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export default db
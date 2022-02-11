import firebase from 'firebase/compat/app';

import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyBd4Z4H7kQ7JRV0JwHXnLK3Uyn-FlktNpY",
    authDomain: "todoapp-2fda3.firebaseapp.com",
    projectId: "todoapp-2fda3",
    storageBucket: "todoapp-2fda3.appspot.com",
    messagingSenderId: "311540770016",
    appId: "1:311540770016:web:fd1c1ddb356193aceb9c85",
    measurementId: "G-ZDVQRCSE4N"
});

const db = firebaseApp.firestore();

export { db };  
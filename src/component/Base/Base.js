import {initializeApp} from 'firebase/app'
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
import {getAuth} from "firebase/auth"


const app =initializeApp ({
    apiKey: "AIzaSyBIhxcnqw11o4yKP7xYKxkWjb7KpMwl1Fk",
    authDomain: "diarybydeekie.firebaseapp.com",
    projectId: "diarybydeekie",
    storageBucket: "diarybydeekie.appspot.com",
    messagingSenderId: "451982590099",
    appId: "1:451982590099:web:7e624d29f3fff38be84d66",
    measurementId: "G-89WDH3V49J"
  });


  export const db = getFirestore(app)
  export const storage= getStorage(app)
  export const auth = getAuth(app) 
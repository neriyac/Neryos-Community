import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyA2xQuVt_YznXS-aeHKv9A89i9s4j4Vr60",
    authDomain: "neryoscommunity.firebaseapp.com",
    projectId: "neryoscommunity",
    storageBucket: "neryoscommunity.appspot.com",
    messagingSenderId: "313697002913",
    appId: "1:313697002913:web:6703ed83a4209db2da17e0"
  };


//   init firebase
  firebase.initializeApp(firebaseConfig)

  // init services
  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()

  // timestamp
  const timestamp = firebase.firestore.Timestamp

  export { projectFirestore, projectAuth, timestamp }

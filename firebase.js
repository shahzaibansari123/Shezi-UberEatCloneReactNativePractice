import firebase from "firebase"
// import  from "@react-native-async-storage/async-storage";



const firebaseConfig = {
    apiKey: "AIzaSyAwo8wi_OppzFkbyKwKAnnawS-8Io_uTiY",
    authDomain: "ubereatclonepractice-23fcb.firebaseapp.com",
    projectId: "ubereatclonepractice-23fcb",
    storageBucket: "ubereatclonepractice-23fcb.appspot.com",
    messagingSenderId: "313847455678",
    appId: "1:313847455678:web:fce24450d29be631cfa3ef"
  };

  !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

  export default firebase;
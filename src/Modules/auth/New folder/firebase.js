import firebase from 'firebase'

const config={
    apiKey: "AIzaSyAEzpTZS2_Yd07zrZTXE5qI5Pnor89cLXs",
  authDomain: "test-image-upload-cee94.firebaseapp.com",
  projectId: "test-image-upload-cee94",
  storageBucket: "test-image-upload-cee94.appspot.com",
  messagingSenderId: "258539900348",
  appId: "1:258539900348:web:a410fc9007ab97fe3dafb9",
  measurementId: "G-DKQWE8JCTT"
}
firebase.initializeApp(config);
export default firebase
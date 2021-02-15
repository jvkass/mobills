import firebase from 'firebase/app'

var config = {
  apiKey: "AIzaSyAecEZC8arpMEMf7rOSyquccrWrMln6Cs8",
  authDomain: "mobills-6a524.firebaseapp.com",
  projectId: "mobills-6a524",
  storageBucket: "mobills-6a524.appspot.com",
  messagingSenderId: "482767768838",
  appId: "1:482767768838:web:b3e31706d28c1e8c3a2287",
  measurementId: "G-8R47N53G4E"
};

const fire = firebase.initializeApp(config);
 export default fire;

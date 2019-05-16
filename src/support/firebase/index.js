import Firebase from 'firebase'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDzYPqt0ggvEgtu68y9ag_wF263M3C9iYk",
    authDomain: "managerapp-a848d.firebaseapp.com",
    databaseURL: "https://managerapp-a848d.firebaseio.com",
    projectId: "managerapp-a848d",
    storageBucket: "managerapp-a848d.appspot.com",
    messagingSenderId: "318500374975",
    appId: "1:318500374975:web:8802ec89013f6daf"
  };
  // Initialize Firebase
 export const Fire = Firebase.initializeApp(firebaseConfig);

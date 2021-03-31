import firebase from "firebase";
export const initializeFirebase =()=>{
  
  const config ={
    apiKey: "AIzaSyBQUcCD9I7_tTXmkqluTql9HLDUkO78rFk",
    authDomain: "iamplay-ebc63.firebaseapp.com",
    databaseURL: "https://iamplay-ebc63.firebaseio.com",
    projectId: "iamplay-ebc63",
    storageBucket: "iamplay-ebc63.appspot.com",
    messagingSenderId: "629938780411",
    appId: "1:629938780411:web:22d4a3fad7fb0a20bf585e",
    measurementId: "G-P1DD1V0FT1"

  }
  firebase.initializeApp(config);
 
}

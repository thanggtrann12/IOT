var fireBase = fireBase || firebase;
var hasInit = false;
var config = {
  apiKey: "AIzaSyA3k1fnRpoxpTgazwrg245N5riPc7nj6Sw",
  authDomain: "iot-primary.firebaseapp.com",
  databaseURL: "https://iot-primary-default-rtdb.firebaseio.com",
  projectId: "iot-primary",
  storageBucket: "iot-primary.appspot.com",
  messagingSenderId: "527853565604",
  appId: "1:527853565604:web:9e8c3024bd00305be01831",
  measurementId: "G-S2GXXQB13J",
  };
if(!hasInit){
    firebase.initializeApp(config);
    hasInit = true;
    firebase.analytics();
}




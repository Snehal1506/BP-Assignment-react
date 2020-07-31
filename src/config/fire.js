import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBteT_JNVhjYb4Sin-DcISCuj_p4eVGWwg",
    authDomain: "my-new-app-edf52.firebaseapp.com",
    databaseURL: "https://my-new-app-edf52.firebaseio.com",
    projectId: "my-new-app-edf52",
    storageBucket: "my-new-app-edf52.appspot.com",
    messagingSenderId: "340236782723",
    appId: "1:340236782723:web:6950263dad6e5347d3dfb6",
    measurementId: "G-W4W06GVX5Y"
  };

  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;

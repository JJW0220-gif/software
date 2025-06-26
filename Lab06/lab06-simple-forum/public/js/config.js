// Initialize Firebase
// TODO 1: Change to your firebase configuration
//     Steps:
//     1. Create new Firebase project
//     2. Copy and paste firebase config below
//     Important: Make sure there is databaseURL in the config.
//     Note: If there is no databaseURL in the config,
//           go to firebase console -> Realtime Database to find the databaseURL.
/*var config = {

};
firebase.initializeApp(config);
*/
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdzF1qStdYYfIKkssGhY3fZG-bnY7q6H4",
  authDomain: "lab06-2ffc6.firebaseapp.com",
  projectId: "lab06-2ffc6",
  storageBucket: "lab06-2ffc6.firebasestorage.app",
  messagingSenderId: "821480564753",
  appId: "1:821480564753:web:5192089ca02f38d4ee29b0",
  measurementId: "G-TCZRWS4X0S"
};

// 初始化 Firebase App
firebase.initializeApp(firebaseConfig);
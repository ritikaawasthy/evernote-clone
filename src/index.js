import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app';
import 'firebase/firestore';



const firebaseConfig= {
  // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional

   apiKey: "AIzaSyA---_TIDtGuiTbOakcWpbxDqtrD_3OgVE",
   authDomain: "evernote-clone-5a92e.firebaseapp.com",
   projectId: "evernote-clone-5a92e",
   storageBucket: "evernote-clone-5a92e.appspot.com",
   messagingSenderId: "864442352251",
   appId: "1:864442352251:web:71960dae2d1953208058de",
   measurementId: "G-FKJTCE3FQR"
};

firebase.initializeApp(firebaseConfig);





ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

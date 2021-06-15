import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBkjQSNUUu1vLYgwPZfyisylfVE0-JDCaY",
  authDomain: "kamalcorporations.firebaseapp.com",
  projectId: "kamalcorporations",
  storageBucket: "kamalcorporations.appspot.com",
  messagingSenderId: "749262336555",
  appId: "1:749262336555:web:871bc846cab06bd27bf06e",
  measurementId: "G-4HVWXF8XWE"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

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

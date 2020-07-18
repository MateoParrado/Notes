import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import API_KEY from "./config"

//import firebase
const firebase = require("firebase");
require("firebase/firestore");

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "notes-a4167.firebaseapp.com",
  databaseURL: "https://notes-a4167.firebaseio.com",
  projectId: "notes-a4167",
  storageBucket: "notes-a4167.appspot.com",
  messagingSenderId: "1077306812757",
  appId: "1:1077306812757:web:8f7ff06d58b94e841fe7dc",
  measurementId: "G-DE3NYF9LNT"
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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

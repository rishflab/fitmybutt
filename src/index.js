import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import * as firebase from 'firebase/app';
//import 'firebase/auth';
//import 'firebase/database';
// import 'firebase/storage';


// var config = {
//     apiKey: "AIzaSyDQEAoSJQkSWIz_ffBfPBiizAqlAUMbceQ",
//     authDomain: "sizeup-172404.firebaseapp.com",
//     databaseURL: "https://sizeup-172404.firebaseio.com",
//     projectId: "sizeup-172404",
//     storageBucket: "sizeup-172404.appspot.com",
//     messagingSenderId: "80593664722"
// };

// firebase.initializeApp(config); 

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();



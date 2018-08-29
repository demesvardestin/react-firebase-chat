import React from 'react';
import ReactDOM from 'react-dom';
import './index2.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyBxdnjC687H-od7EBM1lEVRvBNfDc4Ccwk",
    authDomain: "react-firebase-chat-75c29.firebaseapp.com",
    databaseURL: "https://react-firebase-chat-75c29.firebaseio.com",
    projectId: "react-firebase-chat-75c29",
    storageBucket: "react-firebase-chat-75c29.appspot.com",
    messagingSenderId: "61503540407"
};
const app = firebase.initializeApp(config);


ReactDOM.render(<App title="This is the search bar" firebase={app.firestore()}/>, document.getElementById('root'));
registerServiceWorker();

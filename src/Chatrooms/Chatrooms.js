import React from 'react';
import Chatroom from './Chatroom/Chatroom';
// import firebase from 'firebase';

// const config = {
//     apiKey: "AIzaSyBxdnjC687H-od7EBM1lEVRvBNfDc4Ccwk",
//     authDomain: "react-firebase-chat-75c29.firebaseapp.com",
//     databaseURL: "https://react-firebase-chat-75c29.firebaseio.com",
//     projectId: "react-firebase-chat-75c29",
//     storageBucket: "react-firebase-chat-75c29.appspot.com",
//     messagingSenderId: "61503540407"
// };
// const app = firebase.initializeApp(config);

const Chatrooms = (props) => {

    return (
        <div className="container" align="center">
            <div className="App row">
                {
                    !(props.chatrooms == null) ?
                    props.chatrooms.map(chatroom => {
                      return <Chatroom title={chatroom.title} key={chatroom.id} />;
                    }) : null
                }
            </div>
        </div>
    );
    
}

export default Chatrooms;
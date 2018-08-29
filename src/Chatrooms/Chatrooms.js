import React from 'react';
import Chatroom from './Chatroom/Chatroom';
import '../index2.css';

const Chatrooms = (props) => {

    return (
        <div className="container" align="center">
            <div className="App row">
                {
                    !(props.chatrooms == null) ?
                    props.chatrooms.map(chatroom => {
                      return <Chatroom title={chatroom.title} key={chatroom.id} id={chatroom.id} firestore={props.firestore} />;
                    }) : null
                }
            </div>
        </div>
    );
    
}

export default Chatrooms;
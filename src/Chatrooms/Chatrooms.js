import React from 'react';
import Chatroom from './Chatroom/Chatroom';

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
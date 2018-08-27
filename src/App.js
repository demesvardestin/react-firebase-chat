import React, { Component } from 'react';
import './App.css';
import Chatrooms from './Chatrooms/Chatrooms';
import Banner from './Banner/Banner';
import Buttons from './BottomButtons/Buttons';


class App extends Component {
  
  state = {
    chatrooms: [ {title: 'Dynamic', id: 'chat-1'}, {title: 'Static', id: 'chat-2'} ],
    chatroomsPresent: true
  };
  
  chatrooms = [...this.state.chatrooms];
  
  changeChatroomTitle = (event) => {
    this.setState({
      chatrooms: [{title: event.target.value === '' ? 'Base' : event.target.value}, {title: event.target.value}]
    });
  };
  
  toggleClassrooms = () => {
    let condition = this.state.chatroomsPresent;
    this.setState({chatroomsPresent: !condition});
  };
  
  searchChatroom = (event) => {
    const currentChatrooms = [...this.state.chatrooms];
    const newChatrooms = 
    event.target.value === '' ? this.chatrooms : currentChatrooms
    .filter(chatroom => chatroom.title.toLowerCase()
    .includes(event.target.value.toLowerCase()));
    
    this.setState({chatrooms: newChatrooms});
  };
  
  render(props) {
    
    let chatrooms = null;
    
    if (this.state.chatroomsPresent) {
      chatrooms = [...this.state.chatrooms];
    }
    
    return (
        <div>
          <Banner changed={this.searchChatroom} />
          
          <Chatrooms chatrooms={chatrooms} />
          
          <Buttons toggleClicked={this.toggleClassrooms} />
        </div>
    );
  }
}

export default App;

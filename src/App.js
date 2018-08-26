import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Chatroom from './Chatroom/Chatroom'


class App extends Component {
  
  state = {
    chatrooms: [ {title: 'Dynamic'}, {title: 'Static'} ]
  };
  
  chatroomInfoHandler = (title1, title2) => {
    let count = this.state.chatrooms.length;
    let newChats = title1 && title2 ? [{title: title1}, {title: title2}] : null;
    console.log(newChats);
    if (newChats != null) {
      this.setState(
        {
          chatrooms: [newChats[count - 1], newChats[count - 2]]
        }
      );
    } else {
      this.setState(
        {
          chatrooms: [this.state.chatrooms[count - 1], this.state.chatrooms[count - 2]]
        }
      );
    }
  };
  
  render() {
    return (
        <div className="App row">
          <Chatroom changeChat={ () => this.chatroomInfoHandler('Comp', 'Licated') } title={this.state.chatrooms[0].title}/>
          <Chatroom changeChat={ () => this.chatroomInfoHandler('Comp', 'Licated') } title={this.state.chatrooms[0].title}/>
          <Chatroom changeChat={ () => this.chatroomInfoHandler('Comp', 'Licated') } title={this.state.chatrooms[0].title}/>
          <Chatroom changeChat={ () => this.chatroomInfoHandler('Comp', 'Licated') } title={this.state.chatrooms[0].title}/>
        </div>
    );
  }
}

export default App;

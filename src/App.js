import React, { Component } from 'react';
import './App.css';
import Chatrooms from './Chatrooms/Chatrooms';
import Banner from './Banner/Banner';
import Buttons from './BottomButtons/Buttons';


class App extends Component {
  
  componentDidMount() {
    this.resetState();
  }
  
  resetState = () => {
    const chatrooms = [];
    this.props.firebase.collection('chatrooms').get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        chatrooms.push({title: doc.data().name, id: doc.data().id, creator: doc.data().creator});
      });
      this.setState({chatrooms: chatrooms});
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
  }
  
  state = {
    chatrooms: [],
    chatroomsPresent: true,
  };
  
  chatrooms = [...this.state.chatrooms];
  
  toggleClassrooms = () => {
    let condition = this.state.chatroomsPresent;
    this.setState({chatroomsPresent: !condition});
  };
  
  createChatroom = (event) => {
    event.preventDefault();
    
    const form = document.querySelector('#createChatroomForm');
    const chatName = document.querySelector('.chat-name');
    const creator = document.querySelector('.your-name');
    const btn = document.querySelector('.create-chat');
    btn.innerHTML = 'Creating chat...';
    
    this.props.firebase.collection('chatrooms').add({
      name: chatName.value,
      id: Math.floor(Math.random() * 1234),
      creator: creator.value
    }).then(docRef => {
      // Add transition effect to open chat following creation
      // Update DOM
      
      console.log('Chat created!');
      btn.innerHTML = 'Create chat';
      form.reset();
      this.resetState();
    });
  }
  
  searchChatroom = (event) => {
    let currentChatrooms = [...this.state.chatrooms];
    let newChatrooms = null;
    
    if (event.target.value === '') {
      this.resetState();
    } else {
      newChatrooms = currentChatrooms
        .filter(chatroom => chatroom.title.toLowerCase()
        .includes(event.target.value.toLowerCase()));
      
      this.setState({chatrooms: newChatrooms});
    }
  };
  
  render(props) {
    
    let chatrooms = null;
    
    if (this.state.chatroomsPresent) {
      chatrooms = [...this.state.chatrooms];
    }
    
    return (
        <div>
          <Banner changed={this.searchChatroom} />
          
          <Chatrooms chatrooms={chatrooms} firestore={this.props.firebase}/>
          
          <Buttons toggleClicked={this.toggleClassrooms} createChatroom={this.createChatroom}/>
        </div>
    );
  }
}

export default App;

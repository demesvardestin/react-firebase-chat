import React, { Component } from 'react';
import './App.css';
import Chatroom from './Chatroom/Chatroom'


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
      chatrooms = (
        <div className="App row">
          {
            this.state.chatrooms.map(chatroom => {
              return <Chatroom title={chatroom.title} key={chatroom.id}/>;
            })
          }
        </div>
      );
    }
    return (
        <div>
          <section className="banner">
            <section class="search-input container">
              <div className="row banner-row" id="banner-row">
                  <div className="col-md-6 offset-md-3">
                    <form id="search-chatrooms">
                      <h1 className="app-tagline">React Firebase Chat</h1>
                      <div className="input-group mb-3">
                        <input className="form-control" type="search" placeholder="Search a chatroom" aria-label="Search" onChange={this.searchChatroom} />
                        <div className="input-group-append">
                          <span className="input-group-text" id="basic-addon2">
                            <button type="submit" className="btn btn-light submit search-submit">
                              Search
                            </button>
                          </span>
                        </div>
                      </div>
                    </form>
                  </div>
              </div>
            </section>
          </section>
          
          <div className="container" align="center">
            {chatrooms}
          </div>
          
          <section className="buttons-container">
            <section className="buttons-section container">
              <div className="row">
                <div className="col-md-2 offset-md-3">
                  <button className="btn btn-primary box-shadow btn-block">
                    Log in
                  </button>
                </div>
                <div className="col-md-2">
                  <button className="btn btn-danger box-shadow btn-block" onClick={this.toggleClassrooms}>
                    Toggle Chatrooms
                  </button>
                </div>
                <div className="col-md-2">
                  <button className="btn btn-info box-shadow btn-block">
                    Create a chatroom
                  </button>
                </div>
              </div>
            </section>
          </section>
        </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './chatroom.css';

class Chatroom extends Component {
    
    state = {
        messages: [{content: 'Hey how are you?'}, {content: 'I didn\'t see you yesterday'}],
        participants: [{name: 'Dem Destin', id: '1'}, {name: 'Cee Milan', id: '2'}],
        someoneIsTyping: false
    };
    
    id = Math.floor(Math.random() * 1234);
    
    participantIsTyping = (event) => {
        let messages = this.state.messages;
        let check = event.target.value.length > 0 ?
                    true : false;
        this.setState({someoneIsTyping: check});
        console.log(event.key);
        
        // If participant hits Enter
        
        if (event.key === 'Enter') {
            // document.querySelector('#' + this.id).
            messages.push({content: event.target.value});
            this.setState({
                messages: messages,
                someoneIsTyping: false
            });
        }
    }
    
    render() {
        
        let messages, participants, someoneIsTyping = null;
    
        if (this.state.messages) {
            messages = [...this.state.messages];
        }
        
        if (this.state.participants) {
            participants = [...this.state.participants];
        }
        
        if (this.state.someoneIsTyping) {
            someoneIsTyping = 'someone is typing...';
        }
        
        return (
            <div className="col-md-3">
                <div className="modal" id={"chatroom" + this.id} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content chat-modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{this.props.title}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body chat-modal-body">
                        <div className={"float-left chat-panel chat-panel" + this.id}>
                            <section className="chat-panel-search-box">
                                <input className="form-control chatroom-search-input" placeholder={'Search ' + this.props.title + '...'} />
                            </section>
                            <hr />
                            <section className="text-left chat-participants">
                                <h5>Members</h5>
                                {
                                    !(participants == null) ?
                                    participants.map(participant => {
                                      return <p className="participant" key={participant.id}>{participant.name}</p>;
                                    }) : null
                                }
                            </section>
                        </div>
                        <div className={"float-right chat-body chat-body" + this.id}>
                            <section className="chat-body-messages">
                                <section className="incoming-outgoing">
                                    <div className="left-side">
                                        {
                                            !(messages == null) ?
                                            messages.map(message => {
                                              return <p className="message" key={message.id}>{message.content}</p>;
                                            }) : null
                                        }
                                    </div>
                                    <div className="right-side">
                                        outgoing (your) texts
                                    </div>
                                </section>
                            </section>
                            <section className="someone-is-typing">
                                {someoneIsTyping}
                            </section>
                            <section className="chat-modal-footer">
                                <input className="form-control text-form-input" placeholder="Type a message" onKeyUp={this.participantIsTyping} />
                                <button type="button" className="btn btn-secondary dismiss-modal" data-dismiss="modal">Close</button>
                            </section>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card chat-card box-shadow" data-toggle="modal" data-target={"#chatroom" + this.id}>
                    <div className="card-header">
                        <h5 className="font-16">{this.props.title}</h5>
                    </div>
                    <div className="card-body">
                        
                    </div>
                </div>
            </div>
        );
    }
};

export default Chatroom;
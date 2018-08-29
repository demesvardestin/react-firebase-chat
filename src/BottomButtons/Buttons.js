import React from 'react';
import '../index2.css';
import './buttons.css'

const Buttons = (props) => {
    return (
        <section className="buttons-container">
            <div className="modal" id="createChatroom" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">New chatroom</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form id="createChatroomForm" onSubmit={props.createChatroom}>
                      <div className="field text-left">
                        <label>Chat name</label>
                        <input type="text" className="form-control chat-name" placeholder="Chat name"/>
                      </div>
                      <div className="field text-left">
                        <label>Your name</label>
                        <input type="text" className="form-control your-name" placeholder="Your name"/>
                      </div>
                      <button type="hidden" className="hidden">
                        Create chat
                      </button>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button type="submit" className="btn btn-success box-shadow create-chat" onClick={props.createChatroom} >
                      Create chat
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <section className="buttons-section container">
              <div className="row">
                <div className="col-md-2 offset-md-3">
                  <button className="btn btn-primary box-shadow btn-block">
                    Log in
                  </button>
                </div>
                <div className="col-md-2">
                  <button className="btn btn-danger box-shadow btn-block" onClick={props.toggleClicked}>
                    Toggle Chatrooms
                  </button>
                </div>
                <div className="col-md-2">
                  <button className="btn btn-info box-shadow btn-block" data-toggle="modal" data-target="#createChatroom">
                    Create a chatroom
                  </button>
                </div>
              </div>
            </section>
        </section>
    );
};

export default Buttons
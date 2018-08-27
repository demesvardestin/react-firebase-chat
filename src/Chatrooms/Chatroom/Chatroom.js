import React from 'react';
import './chatroom.css';

const Chatroom = (props) => {
    let id = Math.floor(Math.random() * 1234);
    return (
        <div className="col-md-3">
            <div className="modal" id={"chatroom" + id} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content chat-modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">{props.title}</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body chat-modal-body">
                    <div className={"float-left chat-panel chat-panel" + id}>
                        <input className="form-control chatroom-search-input" placeholder={'Search ' + props.title + '...'} />
                    </div>
                    <div className={"float-right chat-body chat-body" + id}>
                        <div className="chat-body-messages">
                            
                        </div>
                        <div className="chat-modal-footer">
                            <form id="textForm">
                                <input className="form-control text-form-input" placeholder="Type a message" />
                                <button type="button" className="btn btn-secondary dismiss-modal" data-dismiss="modal">Close</button>
                            </form>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card chat-card box-shadow" data-toggle="modal" data-target={"#chatroom" + id}>
                <div className="card-header">
                    <h5 className="font-16">{props.title}</h5>
                </div>
                <div className="card-body">
                    
                </div>
            </div>
        </div>
    );
};

export default Chatroom;
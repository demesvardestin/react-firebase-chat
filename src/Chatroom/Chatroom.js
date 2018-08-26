import React from 'react';
import './chatroom.css';

const Chatroom = (props) => {
    let id = Math.floor(Math.random() * 1234);
    return (
        <div className="col-md-3">
            <div className="modal fade" id={"chatroom" + id} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <p>This modal's _id is {id}</p>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
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
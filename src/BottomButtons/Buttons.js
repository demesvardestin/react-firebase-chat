import React from 'react';
import '../index2.css';

const Buttons = (props) => {
    return (
        <section className="buttons-container">
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
                  <button className="btn btn-info box-shadow btn-block">
                    Create a chatroom
                  </button>
                </div>
              </div>
            </section>
        </section>
    );
};

export default Buttons
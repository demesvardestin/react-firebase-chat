import React from 'react';
import '../index2.css';

const Banner = (props) => {
    return (
        <section className="banner">
            <section className="search-input container">
              <div className="row banner-row" id="banner-row">
                  <div className="col-md-6 offset-md-3">
                    <form id="search-chatrooms">
                      <h1 className="app-tagline">React Firebase Chat</h1>
                      <div className="input-group mb-3">
                        <input className="form-control search-chatrooms" type="search" placeholder="Search a chatroom" aria-label="Search" onChange={props.changed} />
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
    );
};

export default Banner;
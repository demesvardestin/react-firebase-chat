import React from 'react';

const Banner = (props) => {
    return (
        <section class="banner">
            <div class="row banner-row" id="banner-row">
                <div className="col-md-6 offset-md-3">
                  <form id="search-chatrooms">
                    <h1 className="app-tagline">React Firebase Chat</h1>
                    <div className="input-group mb-3">
                      <input className="form-control" type="search" placeholder="Search a chatroom" aria-label="Search" onChange={props.fillCards()} />
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
    );
};

export default Banner;
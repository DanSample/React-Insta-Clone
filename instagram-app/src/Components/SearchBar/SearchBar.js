import React from 'react';
import './SearchBar.css';

const SearchBar = props => {
  return (
    <div className="search-bar-wrapper">
      <div className="image-wrapper">
        <div className="fab fa-instagram fa-2x" />
      </div>
      <div className="right-bar-wrapper">
        <img
          className="logo"
          src="https://fontmeme.com/images/instagram-new-logo.png"
          alt="instagram logo"
        />
        <div className="input-bar">
          <input
            type="text"
            placeholder="Search"
            value={props.search}
            onChange={props.filterPosts}
          />
        </div>
        <div className="social-wrapper">
          <div className="social">
            <i className="fa fa-compass fa-2x" />
          </div>
          <div className="social">
            <i className="fa fa-heart fa-2x" />
          </div>
          <div className="social">
            <i className="fa fa-user-circle fa-2x" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

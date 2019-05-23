import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar-wrapper">
      <div className="image-wrapper">
        <div className="fab fa-instagram fa-3x" />
      </div>
      <div className="input-bar">
        <input type="text" placeholder="Search" />
      </div>
      <div className="social-wrapper">
        <div className="social">
          <i className="fa fa-compass fa-3x" />
        </div>
        <div className="social">
          <i className="fa fa-heart fa-3x" />
        </div>
        <div className="social">
          <i className="fa fa-user-circle fa-3x" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

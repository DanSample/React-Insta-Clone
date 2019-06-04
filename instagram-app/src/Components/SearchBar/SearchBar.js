import React from 'react';
import {
  SearchBarWrapper,
  ImageWrapper,
  RightBarWrapper,
  Logo,
  Icon,
  Input,
  SocialWrapper,
  Button
} from '../Styles/SearchBarStylePkg';

const SearchBar = props => {
  return (
    <SearchBarWrapper>
      <ImageWrapper>
        <div className="fab fa-instagram fa-2x" />
      </ImageWrapper>
      <RightBarWrapper>
        <Logo
          src={require('../../img/instagram_logo.png')}
          alt="instagram logo"
        />
        <div>
          <Input
            type="text"
            placeholder="Search"
            innerRef={props.search}
            onChange={props.filterPosts}
          />
        </div>
        <SocialWrapper>
          <div className="social">
            <Icon className="far fa-compass fa-2x" />
          </div>
          <div className="social">
            <Icon className="far fa-heart fa-2x" />
          </div>
          <div className="social">
            <Icon className="far fa-user-circle fa-2x" />
          </div>
        </SocialWrapper>
        <Button logout onClick={props.logOut}>
          Log Out
        </Button>
      </RightBarWrapper>
    </SearchBarWrapper>
  );
};

export default SearchBar;

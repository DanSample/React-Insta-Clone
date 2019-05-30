import React from 'react';

const Likes = props => {
  return (
    <div className="comment-icon-wrapper">
      <div className="likes" onClick={props.addLike}>
        <div className="icon far fa-heart fa-2x" />
      </div>
      <div className="icon far fa-comment fa-2x" />
      {props.likes} Likes
    </div>
  );
};
export default Likes;

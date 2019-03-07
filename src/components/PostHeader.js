import React from 'react';
import PropTypes from 'prop-types';

const PostHeader = Props => (
  <div className="post-header-container">
    <img className="avatar" src={Props.avatar} alt="avatar" />
    <div className="data-container">
      <strong>{Props.name}</strong>
      <span>{Props.time}</span>
    </div>
  </div>
);

PostHeader.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default PostHeader;

import React from "react";
import propTypes from "prop-types";
import styles from "./styles.scss";

const PhotoComments = props => (
  <div>
    <ul>
      <Comment username={props.creator} comment={props.caption} />
      {props.comments.map(comment => (
        <Comment
          username={comment.creator.username}
          comment={comment.message}
          key={comment.id}
        />
      ))}
    </ul>
  </div>
);

const Comment = props => (
  <li>
    <span>{props.username}</span>
    <span>{props.comment}</span>
  </li>
);

PhotoComments.propTypes = {
  caption: propTypes.string.isRequired,
  creator: propTypes.string.isRequired,
  comments: propTypes.arrayOf(
    propTypes.shape({
      message: propTypes.string.isRequired,
      creator: propTypes.shape({
        profile_image: propTypes.string,
        username: propTypes.string.isRequired
      }).isRequired
    })
  ).isRequired
};

export default PhotoComments;

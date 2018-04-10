import React from "react";
import propTypes from "prop-types";
import styles from "./styles.scss";
import PhotoActions from "components/PhotoActions";

const FeedPhoto = (props, context) => {
  return (
    <div className={styles.feedPhoto}>
      <header>
        <img
          src={props.creator.profile_image || require("images/noPhoto.jpg")}
          alt={props.creator.username}
        />
        <div>
          <span>{props.creator.username}</span>
          <span>{props.location}</span>
        </div>
      </header>
      <img src={props.file} alt={props.caption} />
      <div>
        ><PhotoActions number={props.like_count} />
      </div>
    </div>
  );
};

FeedPhoto.propTypes = {
  creator: propTypes.shape({
    profile_image: propTypes.string,
    username: propTypes.string.isRequired
  }),
  location: propTypes.string.isRequired,
  file: propTypes.string.isRequired,
  like_count: propTypes.number.isRequired,
  caption: propTypes.string.isRequired,
  comments: propTypes.arrayOf(
    propTypes.shape({
      message: propTypes.string.isRequired,
      creator: propTypes.shape({
        profile_image: propTypes.string,
        username: propTypes.string.isRequired
      }).isRequired
    })
  ).isRequired,
  created_at: propTypes.string.isRequired
};

export default FeedPhoto;

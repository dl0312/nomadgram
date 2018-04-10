import React from "react";
import propTypes from "prop-types";
import styles from "./styles.scss";

const CommentBox = (props, context) => (
  <form>
    <textarea placeholder={context.t("Add a comment...")} />
  </form>
);

CommentBox.contextTypes = {
  t: propTypes.func.isRequired
};

export default CommentBox;

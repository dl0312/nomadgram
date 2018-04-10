import React from "react";
import propTypes from "prop-types";
import Ionicon from "react-ionicons";
import styles from "./styles.scss";

const PhotoActions = (props, context) => (
  <div>
    <div>
      <span>
        <Ionicon icon="ios-heart-outline" fontSize="28px" color="black" />
      </span>
    </div>
    <div>
      <span>
        <Ionicon icon="ios-text-outline" fontSize="28px" color="black" />
      </span>
    </div>
    <span>
      {props.number}
      {props.number === 1 ? context.t("like") : context.t("likes")}
    </span>
  </div>
);

PhotoActions.contextTypes = {
  t: propTypes.func.isRequired
};

PhotoActions.propTypes = {
  number: propTypes.number.isRequired
};

export default PhotoActions;

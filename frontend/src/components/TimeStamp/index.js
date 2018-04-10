import React from "react";
import propTypes from "prop-types";
import styles from "./styles.scss";
const TimeStamp = (props, context) => props.time;

TimeStamp.propTypes = {
  time: propTypes.string.isRequired
};

export default TimeStamp;

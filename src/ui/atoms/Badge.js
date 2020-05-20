import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Colors from "../particles/Colors";

export const types = {
  purple: "purple",
  gray: "gray"
};

const BadgeWrapper = styled.span`
  background-color: ${props =>
    props.type === types.purple ? Colors.brand_primary : Colors.darker_grey};
  margin-right: 8px;
  padding: 4px 8px;
  border-radius: 12px;
`;

const Badge = props => {
  const { text } = props;
  return <BadgeWrapper> {text}</BadgeWrapper>;
};

Badge.propTypes = {
  type: PropTypes.oneOf(Object.keys(types)),
  text: PropTypes.string
};

Badge.defaultProps = {
  type: types.gray
};

export default Badge;

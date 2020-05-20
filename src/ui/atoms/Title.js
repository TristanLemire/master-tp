import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TitleWrapper = styled.h1`
  color: white;
  font-weight: bold;
  font-size: 16px;
`;

/*const TitleWrapper2 = styled(({ type, ...props }) => 
  React.createElement(type, props))`
    color: white;
    font-weight: bold;
    font-size: 32px;
  `*/

// 1ère technique
/*const Title2 = props => {
  // Rendu final : <Title text={text} />
  const { text } = props;

  return <TitleWrapper>{text}</TitleWrapper>;
};*/

// 2ème technique
const Title = props => {
  // Rendu final : <Title>children</Title>
  const { children } = props;

  return <TitleWrapper>{children}</TitleWrapper>;
};

Title.PropTypes = {
  text: PropTypes.string
};

export default Title;

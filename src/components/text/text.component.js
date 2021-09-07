import React from 'react';
import Styled from "./text.styled";

const Text = ({
  bold,
  children,
  color,
  fontSize,
}) => {
  return (
    <Styled.Text bold={bold} color={color} fontSize={fontSize}>
      {children}
    </Styled.Text>
  )
}

export default Text;
import React from 'React';
import Styled from "./text.styled";

const Text = ({
  bold,
  children,
  color,
}) => {
  return (
    <Styled.Text color={color} bold={bold}>
      {children}
    </Styled.Text>
  )
}

export default Text;
import React from 'react';
import Styled from './section.styled';

const Section = ({ children, ...rest }) => {
  return (
    <Styled.Section {...rest}>
      {children}
    </Styled.Section>
  )
}

export default Section
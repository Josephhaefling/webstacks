import React from 'react';
import Styled from './section.styled';

const Section = ({ children }) => {
  return (
    <Styled.Section>
      {children}
    </Styled.Section>
  )
}

export default Section
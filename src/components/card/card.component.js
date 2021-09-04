import React from "react";
import Styled from "./card.styled";

const Header = ({ children, ...rest}) => (
  <Styled.Header {...rest}>{children}</Styled.Header>
);

const Body = ({ children, ...rest}) => (
  <Styled.Body {...rest}>{children}</Styled.Body>
);

const Footer = ({ children, ...rest}) => (
  <Styled.Footer {...rest}>{children}</Styled.Footer>
);

const Card = ({ children }) => {
  return (
    <Styled.Card>
      {children}
    </Styled.Card>
  );
};

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;

export default Card;

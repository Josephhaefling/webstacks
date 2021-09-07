import React, {createElement} from "react";
import Styled from "./heading.styled";

const Heading = ({ children, color, level }) => {

  const validLevels = [1, 2, 3, 4, 5]
  //Interpolate the appropriate tag basef on the level argument
  const tagType = validLevels.includes(level) ? `h${level}` : 'h1'

  return (
    <Styled.Heading color={color} >
      {createElement(tagType, null, children)}
    </Styled.Heading>
  );
};

export default Heading;

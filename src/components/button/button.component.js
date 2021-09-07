import React from "react";
import Text from "../text/text.component";

import Styled from "./button.styled";
import { Colors } from "../../../helpers/ui";
import { FiChevronRight } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";

const Button = ({ backgroundColor, color, image, label }) => {
  const validImages = {
    chevronRight: <FiChevronRight color={color || Colors.white} size={18} />,
    menu: <FiMenu color={color || Colors.white}  size={18} />,
  }
  return (
    <Styled.Button backgroundColor={backgroundColor}>
      <Styled.Label>
        <Text bold color={color} fontSize={14.4}>{label}</Text>
      </Styled.Label>
      {image &&
        <Styled.ImageContainer>
          {validImages[image]}
        </Styled.ImageContainer>
      }
    </Styled.Button>
  );
};

export default Button;

import React from "React";
import Text from "../text/text.component";
import { Colors } from "../../../helpers/ui";
import Styled from "./button.styled";
import { FiChevronRight } from "react-icons/fi";


const Button = ({ backgroundColor, color, image, label }) => {
  const validImages = {
    chevronRight: <FiChevronRight color={color || Colors.white} size={18} />,
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

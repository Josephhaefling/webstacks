import React from "React";
import Text from "../text/text.component";
import { Colors } from "../../../helpers/ui";
import Styled from "./button.styled";
import { FiChevronRight } from "react-icons/fi";


const Button = ({ color, image, label }) => {
  const validImages = {
    chevronRight: <FiChevronRight color={Colors.white} size={18} />,
  }

  return (
    <Styled.Button color={color}>
      <Styled.Label>
        <Text bold color={Colors.white}>{label}</Text>
        {image &&
          <Styled.ImageContainer>
            {validImages[image]}
          </Styled.ImageContainer>
        }
      </Styled.Label>
    </Styled.Button>
  );
};

export default Button;

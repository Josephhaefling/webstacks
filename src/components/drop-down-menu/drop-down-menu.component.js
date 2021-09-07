import React, { useEffect, useState } from "react";
import Navigation from "../navigation/navigation.component";
import { FiMenu } from "react-icons/fi";
import { Colors } from "../../../helpers/ui";
import Styled from "./drop-down-menu.styled";

const DropDownMenu = () => {

  const [dropDownOpen, setDropDownOpen] = useState();

  const handleClick = () => {
    setDropDownOpen(!dropDownOpen)
  };

  useEffect(() => {
    setDropDownOpen(false);
  }, [])
  
  return (
    <Styled.Section onClick={handleClick}>
      <FiMenu color={Colors.white} size={24} />
      {dropDownOpen && (
        <Styled.DropDownContainer>
          <Navigation />
        </Styled.DropDownContainer>
      )
    }
    </Styled.Section>
  )
}

export default DropDownMenu;
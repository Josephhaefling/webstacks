import React from "React";
import { Colors } from "../../../helpers/ui";
import Button from "../button/button.component";
import Styled from "./navigation.styled";

const Navigation = () => {
  return (
    <Styled.Navigation>
      <Button 
        label="What’s included?" 
      />
      <Button
        label="Pricing" 
      />
      <Button
        label="Sign in" 
      />
      <Button
        backgroundColor={Colors.blue}
        color={Colors.white}
        image='chevronRight'
        label="Get started" 
      />
    </Styled.Navigation>
  );
};

export default Navigation;

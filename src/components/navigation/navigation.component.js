import React from "React";
import { Colors } from "../../../helpers/ui";
import Button from "../button/button.component";
import Styled from "./navigation.styled";

const Navigation = () => {
  return (
    <Styled.Navigation>
      <Button 
        // color={Colors.black} 
        label="What’s included?" 
      />
      <Button
        // color={Colors.black}
        label="Pricing" 
      />
      <Button
        // color={Colors.black}
        label="Sign in" 
      />
      <Button
        color={Colors.blue}
        image='chevronRight'
        label="Get started" 
      />
    </Styled.Navigation>
  );
};

export default Navigation;

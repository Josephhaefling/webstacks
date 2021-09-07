import styled from "styled-components";
import { Colors } from "../../../helpers/ui";

const Styled = {
  Section: styled.section`
    margin-right: 50px;
  `,

  DropDownContainer: styled.section`
    background-color: ${Colors.black};
    border-radius: 4px;
    opacity: .85;
    position: absolute;
    right: 20px;

    button {
      margin-right: 0px;
    }
  `
}

export default Styled;
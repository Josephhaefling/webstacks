import styled from "styled-components";
import Section from "../section/section.component";

const Styled = {
  Page: styled.section``,

  TopSection: styled(Section)`
    margin-top: 50px;
    padding: 0px 255px 115px 255px;
  `,

  BottomSection: styled(Section)`
    margin-top: 50px;
    padding: 0px 255px 100px 255px;
  `,

  ButtonSection: styled(Section)`
    justify-content: space-between;
    margin: 28px 0px;
    padding: 0px;
  `
};

export default Styled;
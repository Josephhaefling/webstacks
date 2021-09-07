import styled from "styled-components";
import Section from "../section/section.component";
import Card from '../card/card.component';

const Styled = {
  Page: styled.section``,

  TopSection: styled(Section)``,

  BottomSection: styled(Section)`
    display: flex;
    justify-content: center;
  `,

  ButtonSection: styled(Section)`
    display: flex;
    flex-direction: column;
    margin: 28px 0px;
    padding: 0px;

    @media(min-width: 768px) {
      flex-direction: row;
    }
  `,

  Card: styled(Card)``
};

export default Styled;
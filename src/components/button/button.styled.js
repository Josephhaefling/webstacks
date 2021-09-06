import styled from "styled-components";

const Styled = {
  Button: styled.button`
    align-items: center;
    background-color: ${(props) => props.backgroundColor ? props.backgroundColor : 'unset'};
    border: none;
    border-radius: 3px;
    display: flex;
    max-height: 40px;
    padding: 11px 24px 11px 24px;
  `,

  Label: styled.section`
    display: flex;
    white-space: nowrap;
  `,

  ImageContainer: styled.section`
    margin: 17px 0px 14px 8px;
  `,
};

export default Styled;

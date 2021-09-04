import styled from "styled-components";

const Styled = {
  Button: styled.button`
    background-color: ${(props) => props.color ? props.color : 'unset'};
    border: none;
    border-radius: 3px;
  `,

  Label: styled.section`
    align-items: center;
    display: flex;
    padding: 11px 36px 11px 36px;
  `,

  ImageContainer: styled.section`
    margin-left: 8px;
  `,
};

export default Styled;

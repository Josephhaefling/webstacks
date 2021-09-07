import styled from "styled-components";

const Styled = {
  Button: styled.button`
    align-items: center;
    background-color: ${(props) => props.backgroundColor ? props.backgroundColor : 'unset'};
    border: none;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    max-height: 40px;
    margin-top: 15px;
    padding: 11px 24px 11px 24px;

    @media(min-width: 768px) {
      margin-right: 15px;
    }

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

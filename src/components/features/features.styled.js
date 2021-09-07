import styled from "styled-components";
import Card from '../card/card.component';

const Styled = {
  Features: styled.section`
    display: flex;
    flex-direction: column;
    height: 100%;

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: center;
    }

    @media (min-width: 1024px) {
      width: 100%;
    }
  `,

  ImageContainer: styled.section`
    display: flex;
    height: 65px;
    justify-content: flex-end;
    transform: ${props => {
        switch(props.id) {
          case 'mobile':
            return 'translate(25px, -45%)';
          case 'virtual-reality': 
            return 'translate(10px, -45%)';
          case 'augmented-reality':
            return 'translate(15px, -45%)';
          default:
            return'';
          }
        }
      };
    width: 100%;

    @media(min-width: 768px) {
      transform: ${props => {
        switch(props.id) {
          case 'mobile':
            return 'translate(40px, -50%)';
          case 'virtual-reality': 
            return 'translate(10px, -50%)';
          case 'augmented-reality':
            return 'translate(15px, -50%)';
          default:
            return'';
        }
      }};
    }

    @media(min-width: 1024px) {
      transform: ${props => {
        switch(props.id) {
          case 'mobile':
            return 'translate(20px, -70%)';
          case 'virtual-reality': 
            return 'translate(10px, -70%)';
          case 'augmented-reality':
            return 'translate(1px, -70%)';
          default:
            return'';
        }
      }};
    }

    @media(min-width: 1280px) {
      transform: ${props => {
        switch(props.id) {
          case 'mobile':
            return 'translate(73px, -100%)';
          case 'virtual-reality': 
            return 'translate(20px, -100%)';
          case 'augmented-reality':
            return 'translate(25px, -100%)';
          default:
            return'';
        }
      }};
    }

    img {
      filter: drop-shadow(-1px -1px 2px black);
      height: 100px;
      object-fit: contain;

        @media(min-width: 1280px) {
          height: 200px;
        }
      }
  `,

  Card: styled(Card)`
    margin-right: 30px;
    width: 100%;

    &:last-of-type {
      margin-right: 0px;
    }
  `,

  CardHeader: styled(Card.Header)`
      height: auto;
    @media (min-width: 1200px) {
      height: 100px;
    }
  `,

  CardBody: styled(Card.Body)`
      padding: 0px 5px;
    @media(min-width: ) {
      padding-left: 32px;
    }
  `, 

  CardFooter: styled(Card.Body)`
    padding-bottom: 10px;
    padding-left: 8px;
  `
};

export default Styled;

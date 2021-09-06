import styled from "styled-components";
import Card from '../card/card.component';

const Styled = {
  Features: styled.section`
    display: flex;
    height: 100%;
    width: 100%;
  `,

  ImageContainer: styled.section`
    bottom: 65px;
    height: 200px;
    position: relative;
    left: ${props => {
      switch(props.id) {
        case 'mobile':
          return '245px';
        case 'virtual-reality':
          return '215px';
        case 'augmented-reality':
          return '225px';
        default:
          return'';
      }
    }};
    width: 200px;

    img {
      filter: drop-shadow(-1px -1px 2px black);
      height: 200px;
      object-fit: contain;
    }
  `,

  Card: styled(Card)`
    margin-right: 30px;
  `,

  CardHeader: styled(Card.Header)`
    height: 85px;
  `,

  CardBody: styled(Card.Body)`
    padding-left: 32px;
  `, 

  CardFooter: styled(Card.Body)`
    padding-bottom: 10px;
    padding-left: 8px;
  `
};

export default Styled;

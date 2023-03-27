import * as Styled from '../styles/Card.Styled';

import Rating from './Rating';
import Stats from './Stats';

const Card = () => {
    return (
        <Styled.Container>
            <Rating />
            <Stats />
        </Styled.Container>
    );
}

export default Card;
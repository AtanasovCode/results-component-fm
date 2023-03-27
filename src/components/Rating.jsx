import * as Styled from '../styles/Rating.Styled'

const Rating = () => {
    return (
        <Styled.Container>
            <Styled.Title>
                Your Result
            </Styled.Title>
            <Styled.ScoreBubble>
                <Styled.UserScore>
                    77
                </Styled.UserScore>
                <Styled.TotalScore>
                    out of 100
                </Styled.TotalScore>
            </Styled.ScoreBubble>
            <Styled.Rank>
                Great
            </Styled.Rank>
            <Styled.Description>
                You scored higher than 
                65% of the people that have
                taken these tests.
            </Styled.Description>
        </Styled.Container>
    );
};

export default Rating;
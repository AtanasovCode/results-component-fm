import styled from "styled-components";

export const Container = styled.div`
    flex: 100%;
    height: 100%;
    background: linear-gradient(
        to bottom,
        ${props => props.theme.lightBlue},
        ${props => props.theme.royalBlue}
    );
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border-radius: ${props => props.theme.borderRadius};
    color: ${props => props.theme.fontColor};
    padding: 15px;
`;

export const Title = styled.div`
    color: ${props => props.theme.fontFaded};
`;

export const ScoreBubble = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    aspect-ratio: 1;
    border-radius: 50%;
    background: linear-gradient(
        to bottom,
        ${props => props.theme.circleColorOne},
        ${props => props.theme.circleColorTwo}
    );
`;

export const UserScore = styled.div`
    font-size: 40px;
    font-weight: ${props => props.theme.fontBold};
`;

export const TotalScore = styled.div`
    font-size: 15px;
    color: ${props => props.theme.fontFaded};
    opacity: .7;
`;

export const Rank = styled.div`
    color: ${props => props.theme.fontColor};
`;

export const Description = styled.div`
    font-size: 14px;
    color: ${props => props.theme.fontFaded};
    text-align: center;
`;

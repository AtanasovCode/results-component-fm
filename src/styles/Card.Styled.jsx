import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.backgroundCard};
    max-width: 600px;
    height: 400px;
    border-radius: ${props => props.theme.borderRadius};
    overflow: hidden;
`;
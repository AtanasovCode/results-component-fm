import styled from "styled-components";

export const Container = styled.div`
    flex: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: 100%;
    padding: 35px;
`;

export const Title = styled.div`
    font-size: 22px;
    font-weight: ${props => props.theme.fontSemiBold};
`;

export const Categories = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    width: 100%;
    margin-left: 10px;
`;

export const Category = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0;
    width: 100%;
    font-size: 15px;
`;

export const Name = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const CategoryIcon = styled.img`
    width: 17px;
    height: 17px;
    margin-right: 7px;
`;

export const CategoryName = styled.div`
    color: hsl(234, 85%, 45%);
    ${props => props.name === "Reaction" && `
        color: hsl(0, 100%, 67%);
    `}
    ${props => props.name === "Memory" && `
        color: hsl(39, 100%, 56%);
    `}
    ${props => props.name === "Verbal" && `
        color: hsl(166, 100%, 37%);
    `}
`;

export const UserScore = styled.div`
    color: black;
    margin-right: 7px;
`;

export const CategoryScore = styled.div`
    color: darkgray;
    display: flex;
    align-items: center;
    justify-content: center;
`;


export const Button = styled.input`
    width: 100%;
    height: 40px;
    border-radius: 15px;
    border: none;
    background-color: ${props => props.theme.royalBlue};
    color: #fff;
`;
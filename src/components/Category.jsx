import * as Styled from '../styles/Stats.Styled';

const Category = ({
    name,
    score,
    icon,
}) => {
    return (
        <Styled.Category>
            <Styled.Name>
                <Styled.CategoryIcon
                    src={icon}
                />
                <Styled.CategoryName name={name}>
                    {name}
                </Styled.CategoryName>
            </Styled.Name>
            <Styled.CategoryScore>
                <Styled.UserScore>
                    {score}
                </Styled.UserScore>
                / 100
            </Styled.CategoryScore>
        </Styled.Category>
    );
}

export default Category;
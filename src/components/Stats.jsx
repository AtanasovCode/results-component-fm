import * as Styled from '../styles/Stats.Styled';

import memory from '../assets/images/icon-memory.svg';
import reaction from '../assets/images/icon-reaction.svg';
import verbal from '../assets/images/icon-verbal.svg';
import visual from '../assets/images/icon-visual.svg';

import Category from './Category';
import { Data } from '../assets/data/Data';


const Stats = () => {
    return (
        <Styled.Container>
            <Styled.Title>
                Summary
            </Styled.Title>
            <Styled.Categories>
                {
                    Data.map((data) => {
                        return (
                            <Category
                                key={data.category} 
                                name={data.category}
                                score={data.score}
                                icon={data.icon}
                            />
                        );
                    })
                }
            </Styled.Categories>
            <Styled.Button 
                type="button"
                value="Continue"
            />
        </Styled.Container>
    );
}

export default Stats;
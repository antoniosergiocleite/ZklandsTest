import React from 'react'
import Icon1 from '../../images/svg-2.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-2.svg'
import Icon4 from '../../images/svg-2.svg'

import { CoursesContainer, CoursesH1, CoursesWrapper, 

CoursesCard, CoursesIcon, CoursesH2, CoursesP} from './CoursesElements'
const Courses = () => {
  return (
    <CoursesContainer id="courses">
        <CoursesH1> Our Courses </CoursesH1>
            <CoursesWrapper>
                <CoursesCard>
                    <CoursesIcon src={Icon1}/>
                    <CoursesH2> Section 1</CoursesH2>
                    <CoursesP> Prerequisite topic </CoursesP>
                </CoursesCard>
                <CoursesCard>
                    <CoursesIcon src={Icon2}/>
                    <CoursesH2> Section 2</CoursesH2>
                    <CoursesP> ZK (pre-blockchain</CoursesP>
                </CoursesCard>
                <CoursesCard>
                    <CoursesIcon src={Icon2}/>
                    <CoursesH2> Section 2</CoursesH2>
                    <CoursesP> ZK (pre-blockchain)</CoursesP>
                </CoursesCard>
                <CoursesCard>
                    <CoursesIcon src={Icon3}/>
                    <CoursesH2> Section 3</CoursesH2>
                    <CoursesP> ZK (post-blockchain)</CoursesP>
                </CoursesCard>
                <CoursesCard>
                    <CoursesIcon src={Icon4}/>
                    <CoursesH2> Section 4</CoursesH2>
                    <CoursesP> Challenges</CoursesP>
                </CoursesCard>
            </CoursesWrapper>
        
    </CoursesContainer>
  )
}

export default Courses
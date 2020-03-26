import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Section, SubTitle } from "./styledComponents/styles";
import Container from "@material-ui/core/Container";

const ProgressSection = styled(Section).attrs({
  id:"skills"
})`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProgressContainer = styled.div`
  box-shadow: 0px 10px 20px 4px #00000015;
  width: 30rem;
  padding: 2rem;

  & h2 {
    text-align: center;
  }
`;

const ProgressList = styled.ul`
  & li {
    position: relative;
    list-style: none;
    margin: 50px 0;
    font-weight: 500;
    text-transform: uppercase;
  }
`;

const ProgressListItem = styled.li`
  :before {
    content: "";
    position: absolute;
    top: 2rem;
    left: 0;
    width: 100%;
    height: 1rem;
    background-color: rgba(54, 126, 223, 0.5);
    border-radius: 5rem;
  }

  :after {
    content: "";
    position: absolute;
    top: 2rem;
    left: 0;
    width: ${props => props.width}%;
    height: 1rem;
    background-color: rgba(54, 126, 223, 1);
    border-radius: 5rem;
  }
`;

const SkillProgress = () => {
  const skills = useSelector(state => state.userReducer.user.skills);
  console.log(skills);
  return (
    <ProgressSection>
      <ProgressContainer>
        <SubTitle>Yetenekler</SubTitle>
        <ProgressList>
          {skills.map(skill => (
            <ProgressListItem key={skill._id} width={skill.skillPercent}>
              {skill.skillName}
            </ProgressListItem>
          ))}
        </ProgressList>
      </ProgressContainer>
    </ProgressSection>
  );
};

export default SkillProgress;

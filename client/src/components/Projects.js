import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  Section,
  Paragraph,
  SubTitle,
  WorkTimelineSection
} from "./styledComponents/styles";
import Container from "@material-ui/core/Container";

const ProjectFeatures = styled.div`
  display: flex;

  & span {
    margin: 0 0 1rem 1rem;
    background-color: #e0e0e0;
    padding: 0.7rem;
    border-radius: 1rem;
  }
`;

const ProjectLink = styled.a`
  display: inline-block;
  margin-top: 2rem;
  padding: 0.5rem 1rem;
  border: 1px solid black;
  color:black;

  :hover {
    background-color: #e0e0e0;
    
  }
`;

const Skills = () => {
  const projects = useSelector(state => state.userReducer.user.projects);
  console.log(projects);
  return (
    <WorkTimelineSection>
      <Container>
        <VerticalTimeline>
          {projects.map(project => (
            <VerticalTimelineElement
              key={project._id}
              className="vertical-timeline-element--work"
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)"
              }}
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            >
              <ProjectFeatures>
                {project.technologies.map(technologie => {
                  return <span key={technologie._id}>{technologie.name}</span>;
                })}
              </ProjectFeatures>
              
              <SubTitle className="vertical-timeline-element-subtitle">{project.title}</SubTitle>
              <Paragraph>{project.content}</Paragraph>
              <ProjectLink target="_blank" href={project.sourceLink}>View Source Code</ProjectLink>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </Container>
    </WorkTimelineSection>
  );
};

export default Skills;

import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Container from "@material-ui/core/Container";
import { Section, Paragraph, SubTitle } from "./styledComponents/styles";
import { MdWork } from "react-icons/md";

const WorkTimelineSection = styled(Section)`
  & .vertical-timeline-element-content p {
    font-size: 1.3rem;
  }

  & .vertical-timeline-element-date {
    font-size: 1.3rem;
  }
`;
const WorkTimeline = () => {
  const experiences = useSelector(state => state.userReducer.user.experiences);

  return (
    <WorkTimelineSection>
      <Container>
        <VerticalTimeline>
          {experiences.map(experience => (
            <VerticalTimelineElement
            key={experience._id}
              className="vertical-timeline-element--work"
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)"
              }}
              date={
                experience.employer === "İletişim Yazılım"
                  ? "2019 Hazira-Temmuz"
                  : "2019 Ağustos-Eylül"
              }
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<MdWork />}
            >
              <h3 className="vertical-timeline-element-title">
                {experience.employer}
              </h3>
              <SubTitle className="vertical-timeline-element-subtitle">
                {experience.jobTitle}
              </SubTitle>
              <Paragraph>{experience.jobContent}</Paragraph>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </Container>
    </WorkTimelineSection>
  );
};

export default WorkTimeline;

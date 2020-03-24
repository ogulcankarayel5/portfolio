import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Container from "@material-ui/core/Container";
import { Paragraph, SubTitle } from "./styledComponents/styles";
import svg from "../assets/computer.svg";

const GridContainer = styled.div`
  display: grid;

  grid-template-rows: 1fr 1fr;
  

  grid-auto-columns: 1fr;
  justify-items: center;
  align-items: center;
  margin-top: 10rem;

  & img {
    width: 15rem;
    height: auto;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 2rem;
  text-align: left;

  line-height: 1.5rem;
  font-weight: 500;

  & p {
    padding: 1rem;
    text-align: left;
  }
`;
const About = () => {
  const user = useSelector(state => state.userReducer.user);
  const { about } = user;
  const about1 = about.slice(0, 102);
  const about2 = about.slice(102);

  return (
    <Container>
      <GridContainer>
        <Content>
          <img src={svg} />
        </Content>
        <Content>
          <SubTitle>About Me</SubTitle>
          <Paragraph>{about1}</Paragraph>
          <Paragraph>{about2}</Paragraph>
        </Content>
      </GridContainer>
    </Container>
  );
};

export default About;

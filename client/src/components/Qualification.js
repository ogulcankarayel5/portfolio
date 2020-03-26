import React from "react";
import styled from "styled-components";
import { FaCode, FaMobileAlt } from "react-icons/fa";
import {
  SubTitle,
  Paragraph,
  FlexContainer,
  Section
} from "./styledComponents/styles";
import Container from "@material-ui/core/Container";
//
const QualificationContainer = styled(FlexContainer)`
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media (min-width:992px){
    flex-direction:row;
  }
`;

const Card = styled(FlexContainer)`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  box-shadow: 0px 2px 11px -1px rgba(0, 0, 0, 0.75);
  width: 70%;
  height: auto;
  margin: 0 auto;
  margin-top: 1rem;
  padding: 2rem;

  @media (min-width:992px){
    width:40%;
    height:15rem;
  }
`;

const QualificationParagraph = styled(Paragraph)`
  padding-top: 1rem;
`;

const Qualification = () => {
  return (
    <Section>
      <Container>
      <SubTitle>What I do</SubTitle>
        <QualificationContainer>
          
          <Card>
            <FaCode size={75} color={"#800080"} />
            <SubTitle>Web Development</SubTitle>
            <QualificationParagraph>
              React,Nodejs gibi teknolojiler kullanarak statik veya dinamik web
              siteleri geliştirebilirim.
            </QualificationParagraph>
          </Card>
          <Card>
            <FaMobileAlt size={75} color={"#45A5E6"} />
            <SubTitle>Mobile App</SubTitle>
            <QualificationParagraph>
              Flutter ile mobil uygulamalar geliştirebilirim
            </QualificationParagraph>
          </Card>
        </QualificationContainer>
      </Container>
    </Section>
  );
};

export default Qualification;

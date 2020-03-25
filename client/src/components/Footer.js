import React from "react";
import styled from "styled-components";
import { Paragraph } from "./styledComponents/styles";
const FooterComponent = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;

  background: black;

  & p {
    color: ${props => props.theme.colors.whiteText};
  }
`;

function Footer() {
  return (
    <FooterComponent>
      <Paragraph>Made by Oğulcan KARAYEL &copy; 2020</Paragraph>
    </FooterComponent>
  );
}

export default Footer;

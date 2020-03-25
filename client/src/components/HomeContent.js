import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";
import { makeStyles } from "@material-ui/core/styles";
import useWindowDimensions from "../hooks/useWindowDimensions ";
import { Title, SubTitle, Paragraph } from "./styledComponents/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    
    // [theme.breakpoints.up('md')]: {
    //   backgroundColor:"red"
    // },
  },
  img: {
    border: "20px solid rgba(0,0,0,0.17)",
    borderRadius: "50%"
  },
  margin: {
    margin: theme.spacing(4, 0, 0, 0)
  },
  paddingLeft: {
    marginLeft: theme.spacing(1)
  }
}));

const Span = styled.span`
  padding: 1rem 3rem;
  font-size: 1.5rem;
  background-color: ${props => props.theme.colors.titleColor};
  color: ${props => props.theme.colors.whiteText};
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
  border-bottom-left-radius: 0;
`;
const HomeContent = () => {
  const classes = useStyles();
  const user = useSelector(state => state.userReducer.user);
  
  const { name, email, phone } = user;
  const { height, width } = useWindowDimensions();
  return (
    <Grid
      className={(classes.margin, classes.root)}
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Grid item xs={12} md={4}>
        <Grid container direction="column" justify="center" alignItems="center">
          <Span>Hello I'm</Span>
          <Title className={classes.margin}>{name}</Title>
          <SubTitle className={classes.margin}>Computer Engineer</SubTitle>
          <Grid
            container
            className={classes.margin}
            justify="center"
            alignItems="center"
          >
            <FaEnvelope />
            <Paragraph className={classes.paddingLeft}>{email}</Paragraph>
          </Grid>
          <Grid
            container
            className={classes.margin}
            justify="center"
            alignItems="center"
          >
            <FaPhone />
            <Paragraph className={classes.paddingLeft}>{phone}</Paragraph>
          </Grid>
          <Grid
            container
            className={classes.margin}
            justify="center"
            alignItems="center"
          >
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/ogulcankarayel5"
            >
              <FaGithub size={"2.5rem"} style={{ color: "#484848" }} />
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/ogulcankarayel5"
            >
              <FaLinkedin
                className={classes.paddingLeft}
                size={"2.5rem"}
                style={{ color: "#484848" }}
              />
            </a>
          </Grid>
        </Grid>
      </Grid>
      <Grid className={classes.margin} item xs={4} md={4}>
        <img
          className={classes.img}
          src="https://avatars1.githubusercontent.com/u/40337665?s=460&v=4"
        />
      </Grid>
    </Grid>
  );
};

export default HomeContent;

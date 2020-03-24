import React, { useState,useEffect,useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";
import Container from "@material-ui/core/Container";


const Header = styled.header`
    width: 100%;
    
    margin-bottom:3rem;
    position: relative;
    top: 0;
    left: 0;
    z-index: 1;
   
    .open svg:nth-child(1) {
      display: none;
    }
    .open svg:nth-child(2) {
      display: block;
    }

    .open ul {
      transform: translateX(0);
    }

   

   
  `;

  const Nav = styled.nav`
    height: 5rem;

    &::before {
      content: "";
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.2);
      z-index: 1000;
      opacity: ${props => (props.toggle === true ? 1 : 0)};
      transform:scale(0); /*scale(1) açıldığında */
      transition: opacity 2s;
    }
  `;

  const MenuToggle = styled.div`
    position: absolute;
    right: 3rem;
    top: 50%;
    z-index: 1500;
    
    transform: translateY(-50%);
    cursor: pointer;

    svg{
      font-size:1.2rem;
    }
    svg:nth-child(2) {
      display: none;
    }
  `;

  const NavList = styled.ul`
    list-style: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 80%;
    height: 100vh;
    background-color: ${props => props.theme.colors.primary};
    padding: 4.4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    z-index: 1250;
    transform: translateX(-100%);
    transition: transform 0.5s;

    & .nav-item{
      border-bottom:2px solid rgba(255,255,255,.3);
    }
    
    & .nav-link{
      display:block;
    font-size:1.2rem;
    text-transform: uppercase;
    
    letter-spacing: 2px;
    margin-right: -2px;
    transition: color .5s;
    text-align:center;
    }
  `;

const Navbar = props => {
  

 
 

  const [toggle, setToggle] = useState(false);
  // const ref=useRef(null);
  const onToggle = () => {
     console.log(toggle);
     setToggle(!toggle);
    
    
    // const wrapper = ref.current;
    // wrapper.classList.toggle("open");
  };
  return (
    <Header>
      <Container>
        <Nav toggle={toggle} className={`${toggle === false ? "" : "open"}`} >
          <MenuToggle>
            <FaBars onClick={onToggle} />
            <FaTimes onClick={onToggle} />
          </MenuToggle>
          <NavList>
            <li className="nav-item"><a className="nav-link" href="/#">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="/#">Education</a></li>
            <li className="nav-item"><a className="nav-link" href="/#">Portfolio</a></li>
            <li className="nav-item"><a className="nav-link" href="/#">Contact</a></li>
            

          </NavList>
        </Nav>
      </Container>
    </Header>
  );
};

export default Navbar;

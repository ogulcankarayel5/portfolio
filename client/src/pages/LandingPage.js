import React from "react";
import { useSelector,useDispatch} from "react-redux";
import styled from "styled-components";
import HomePage from "./HomePage";
import { FlapperSpinner } from "react-spinners-kit";

const Center = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LandingPage = () => {
  
    
  const isLoading = useSelector(state => state.userReducer.isLoading);

  return isLoading ? (
    <Center>
      
      <FlapperSpinner size={40} color="#1B6749" />
    </Center>
  ) : (
    <HomePage />
  );
};

export default LandingPage;

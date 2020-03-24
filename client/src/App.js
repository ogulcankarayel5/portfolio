import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import store from "./store";
import {getUser} from './actions/userAcions';

import LandingPage from "./pages/LandingPage";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

html{
  font-size:10px;
}

body{
  background-color:#FFFFFF;
  
 
}

a{
  text-decoration:none;
  color:#FFFFFF;
}

ul{
  list-style:none;
}
img{
    width:100%;
    max-width: 100%;
    height:auto;
}
`;

const theme = {
  colors: {
    
    primary: "#252525",
    secondary: "#474747",
    titleColor:"#63B4F6",
    subTitleColor:"#484848",
    whiteText:"#FFFFFF"
  }
};



function App() {

 

  useEffect(() => {
    store.dispatch(getUser());
   
  },[]);

  
 
 
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <LandingPage/>
      </ThemeProvider>
    </Provider>
  );
}

export default App;

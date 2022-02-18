import React from "react";
import './App.css';
import PostMessages from './components/PostMessages';
import { Provider } from "react-redux";
import { store} from "./actions/store";
import {AppBar, Container, Typography} from "@material-ui/core";
import ButterToast,{POS_RIGHT,POS_TOP} from "butter-toast";

function App() {
  return (
    <Provider store = {store} >
      <Container maxWidth="lg">
        <AppBar position="static" color="inherit">
          <Typography
          variant = "h2"
          align = "center">
            Post Box
          </Typography>
        </AppBar>
      <PostMessages />
      <ButterToast position={{vertical:POS_TOP,horizontal:POS_RIGHT}} />
      </Container>
    </Provider>
  );
}

export default App;

import GlobalStyle from "./styles/global.js";
import styled from "styled-components";
import Form from "./components/form.js";
import Grid from "./components/grid.js";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2``;

function App() {

  return (
    <>
      <Container>
        <Title>RESIDENTS</Title>
        <Form/>
        <Grid residents={residents}/>
      </Container>
      <ToastContainer autoClose={3000} position={toast.BOTTOM_LEFT}/>
      <GlobalStyle/>
    </>
  );
}

export default App;

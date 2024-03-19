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
  const [residents, setResidents] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getResidents = async () => {
    try {
      const response = await axios.get("http://localhost:8800");
      setResidents(response.data.sort((a, b) => a.name.localeCompare(b.name)));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getResidents();
  }, [setResidents]);

  return (
    <>
      <Container>
        <Title>RESIDENTS</Title>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getResidents={getResidents}/>
        <Grid residents={residents} setResidents={setResidents} setOnEdit={setOnEdit}/>
      </Container>
      <ToastContainer autoClose={3000} position={toast.BOTTOM_LEFT}/>
      <GlobalStyle/>
    </>
  );
}

export default App;

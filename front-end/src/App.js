import GlobalStyle from "./styles/global.js";
import styled from "styled-components";
import Form from "./components/form.js";
import Grid from "./components/grid.js";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Container = styled.div`
  width: 100%;
  max-width: 800px;
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
      </Container>
      <ToastContainer autoClose={3000} position={toast.BOTTOM_LEFT}/>
      <GlobalStyle/>
    </>
  );
}

export default App;

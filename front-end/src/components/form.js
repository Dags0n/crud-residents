import React, { useRef } from "react";
import styled from "styled-components";

const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  border-shadow: 0 0 5px #ccc;
  border-radius: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 155px;  
  height: 40px;
  padding: 0 10px;
  border-radius: 5px;
  border: 1px solid #bbb;
`;

const Label = styled.label``;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #2c73d2;
  color: #fff;
  height: 42px;
  width: 85px
`;


const Form = ({ onEdit }) => {
  const ref = useRef();

  return (
    <FormContainer ref={ref}>
      <InputArea>
        <Label>Name</Label>
        <Input name="name" />
      </InputArea>

      <InputArea>
        <Label>Email</Label>
        <Input type="email" name="email" />
      </InputArea>

      <InputArea>
        <Label>Phone</Label>
        <Input type="tel" name="phone" />
      </InputArea>

      <InputArea>
        <Label>CPF</Label>
        <Input name="cpf" />
      </InputArea>

      <InputArea>
        <Label>RG</Label>
        <Input name="rg" />
      </InputArea>

      <InputArea>
        <Label>Birthday</Label>
        <Input name="date_birth" type="date" />
      </InputArea>
      
      <InputArea>
        <Label>Sex</Label>
        <Input name="sex" />
      </InputArea>

      <Button type="submit">SAVE</Button>
    </FormContainer>
  );
}

export default Form;
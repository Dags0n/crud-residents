import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { toast } from "react-toastify";

const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 0 5px #ccc;
  border-radius: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 107px;  
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


const Form = ({ onEdit, setOnEdit, getResidents }) => {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const resident = ref.current;

      resident.name.value = onEdit.name;
      resident.cpf.value = onEdit.cpf;
      resident.email.value = onEdit.email;
      resident.phone.value = onEdit.phone;
      resident.rg.value = onEdit.rg;
      resident.date_birth.value = onEdit.date_birth;
      resident.sex.value = onEdit.sex;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const resident = ref.current;

    if(
      !resident.name.value || 
      !resident.cpf.value || 
      !resident.email.value || 
      !resident.phone.value || 
      !resident.rg.value || 
      !resident.date_birth.value || 
      !resident.sex.value
    ) {
      return toast.warn("Fill in all fields");
    };

    if (onEdit) {
      await axios.put(`http://localhost:8800/${onEdit.cpf}`, {
        name: resident.name.value,
        cpf: resident.cpf.value,
        email: resident.email.value,
        phone: resident.phone.value,
        rg: resident.rg.value,
        date_birth: resident.date_birth.value,
        sex: resident.sex.value,
      })
      .then(({ data }) => toast.success(data))
      .catch(({ data }) => toast.error(data));
    } else {
      await axios.post("http://localhost:8800", {
        name: resident.name.value,
        cpf: resident.cpf.value,
        email: resident.email.value,
        phone: resident.phone.value,
        rg: resident.rg.value,
        date_birth: resident.date_birth.value,
        sex: resident.sex.value
      })
      .then(({ data }) => toast.success(data))
      .catch(({ data }) => toast.error(data));
    };

    resident.name.value = "";
    resident.cpf.value = "";
    resident.email.value = "";
    resident.phone.value = "";
    resident.rg.value = "";
    resident.date_birth.value = "";
    resident.sex.value = "";

    setOnEdit(null);
    getResidents();
  };

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
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
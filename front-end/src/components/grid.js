import React from "react";
import axios from "axios";
import styled from "styled-components";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";

const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 0 5px #ccc;
  border-radius: 5px;
  max-width: 1100px;
  margin: 20px auto;
  word-break: break-all;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
  text-align: start;
  padding-bottom: 5px;
  border-bottom: inset 1px #ccc;
`;

export const Td = styled.td`
  padding-top: 10px;
  text-align: ${(props) => (props.align ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};
`;

const Grid = ({ residents, setResidents, setOnEdit }) => {

  const handleDelete = async (cpf) => {
    await axios.delete(`http://localhost:8800/${cpf}`).then(({ data }) => {
      
      const newResidents = residents.filter((resident) => resident.cpf !== cpf);

      setResidents(newResidents);
      toast.success(data);

    }).catch(({ data }) => toast.error(data));

    setOnEdit(null);
  };

  const handleUpdate = (item) => {
    setOnEdit(item);
  };

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>CPF</Th>
          <Th>RG</Th>
          <Th>Email</Th>
          <Th>Phone</Th>
          <Th>Sex</Th>
          <Th>Birthdate</Th>
          <Th></Th>
          <Th></Th>
        </Tr>
      </Thead>

      <Tbody>
        {residents.map((item, i) => (
          <Tr key={i}>
            <Td width="16%">{item.name}</Td>
            <Td width="12%">{item.cpf}</Td>
            <Td width="12%">{item.rg}</Td>
            <Td width="16%">{item.email}</Td>
            <Td width="12%">{item.phone}</Td>
            <Td width="12%">{item.sex}</Td>
            <Td width="12%">{item.date_birth}</Td>  
            <Td align="center" width="4%">
              <FaEdit onClick={() => handleUpdate(item.cpf)}/>
            </Td>
            <Td align="center" width="4%">
              <FaTrash onClick={() => handleDelete(item.cpf)}/>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default Grid;
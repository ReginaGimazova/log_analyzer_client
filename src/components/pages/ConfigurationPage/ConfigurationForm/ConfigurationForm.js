import React from "react";
import styled from "styled-components";
import Form from 'react-bootstrap/Form';
import Subtitle from "../../../atoms/Subtitle/Subtitle";
import {Button} from "react-bootstrap";

const Input = styled(Form.Control)`
  width: ${({size}) => size === 'small' ? '100px' : '300px'};
`;

const Label = styled(Form.Label)`
  font-size: 1rem;
`;

const FormGroup = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 500px;
  margin-right: 20px;
  
  &:not(:last-child){
    margin-bottom: 10px;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const FakeLink = styled.span`
  text-decoration: underline;
  margin-left: 10px;
  cursor: pointer;
`;

const valuesList = [
  {
    id: 0,
    name: 'removing tmp table',
    value: 0.01,
    active: true
  },
  {
    id: 1,
    name: 'rolling back',
    value: 0.025,
    active: false
  },
  {
    id: 2,
    name: 'rename result table',
    value: 0.3,
    active: false
  },
  {
    id: 3,
    name: 'opening tables',
    value: 0.0178,
    active: true
  }
];

const ConfigurationForm = () => {
  return (
    <Form>
      <Subtitle>Total volume of critical statuses</Subtitle>
      <Input type="number" />
      <br/>
      <Subtitle>Check critical statuses with threshold value</Subtitle>
      {valuesList.map(item => (
        <FormGroup key={item.id}>
          <InputWrapper>
            <Form.Check checked={item.active}/>
            <Label>{item.name}</Label>
          </InputWrapper>
          <InputWrapper>
            <Input disabled={true} value={item.value} size='small'/>
            <FakeLink>change</FakeLink>
          </InputWrapper>
        </FormGroup>
      ))}
      <Button variant='success'>Apply</Button>
    </Form>
  )
};
export default ConfigurationForm;

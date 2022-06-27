import styled from "styled-components";
import { InputNumber, Input } from "antd";
const { TextArea } = Input;
export const ProductContainer = styled.div`
  align-items: center;
  height: 100%;
  width: 100%;
  margin: 2rem;
  float: left;
`;

export const ProductHeader = styled.h1`
  text-decoration: none;
  text-align: left;
  font-family: verdana;
`;

export const StyledInputNumber = styled(InputNumber)`
  width: 20%;
  padding: 0.1rem 1rem 0 0;
`;

export const StyledInput = styled.input`
  width: 20%;
  display: block;
  padding: 0.1rem 1rem 0 0;
`;

export const Label = styled.label`
  font-weight: bold;
  display: block;
  width: 100px;
  float: left;
`;

export const StyledTextArea = styled.textarea`
  font-family: "PT Sans", sans-serif;
  font-size: 0.8rem;
  display: block;
  padding: 0.1rem 1rem 0 0;
  width: 60%;
  resize: none;
  max-width: 60%;
`;

export const Submit = styled.input`
  background: #e32227;
  color: white;
  text-transform: uppercase;
  margin-top: 20px;
  padding: 10px;
  font-size: 8px;
  font-weight: 100;
  letter-spacing: 5px;
`;

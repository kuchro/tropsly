import styled from "styled-components";

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

export const Input = styled.input`
  font-family: "PT Sans", sans-serif;
  font-size: 0.8rem;
  display: block;
  margin: 25px;
  padding: 0.1rem 1rem 0 0;
`;

export const Label = styled.label`
  font-weight: bold;
  display: block;
  width: 100px;
  float: left;
`;

export const TextArea = styled.textarea`
  font-family: "PT Sans", sans-serif;
  font-size: 0.8rem;
  display: block;
  padding: 0.1rem 1rem 0 0;
  width: 60%;
  resize: none;
  max-width: 60%;
`;

export const Select = styled.select`
  display: block;
  font-size: 0.8rem;
  margin: 20px;
  font-family: sans-serif;
  font-weight: 700;
  color: #444;
  line-height: 0.8rem;
  padding: 0.6em 1.4em 0.5em 0.8em;
  width: 150px;
`;

export const Submit = styled.input`

  background: #E32227;
  color: white;
  text-transform: uppercase;
  margin-top: 20px;
  padding: 10px;
  font-size: 8px;
  font-weight: 100;
  letter-spacing: 5px;

`
import styled from "styled-components";
import { Button, Card, Divider, Row, Select } from "antd";



export const MainBox = styled.div`
  margin: '4rem auto'
`;

export const StyledGrid = styled(Row)`
  padding: 10px;
  flex-direction: table;
  display: flex;
`;


export const StyledCard = styled(Card)`
 float: left;
 display: inline-block;
`;

export const StyledDivider = styled(Divider)`
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.5s linear;
  display: none;
  ${StyledCard}:hover & {
    visibility: visible;
    opacity: 1;
  }
`;

export const StyledButton = styled(Button)`
  visibility: hidden;
  opacity: 0;
  transition: visibility 0.5s, opacity 1s linear;
  margin: 10px;
  ${StyledCard}:hover & {
    visibility: visible;
    opacity: 1;
  }
`;

export const StyledSelect = styled(Select)`
  width: 55%;
`;

export const SelectOptions = styled.select`
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


export const MainContainer = styled.div`
  height: 100%;
  width: 100%;
  margin: 2rem;
  display: flex;
  flex-direction: row;
`;

export const ProductsContainer = styled.div`
  width: 100%;
  text-align: right;
`;

export const FilterBox = styled.div`
  width: 20%;
  height: 100vh;
`;

export const Label = styled.label`
  font-weight: bold;
  margin: 5px;
`;

export const DivBlock = styled.div`
 display: block;
 margin: 5px;

`
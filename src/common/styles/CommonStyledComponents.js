import styled from "styled-components";
import { Button, Card, Divider, Row } from "antd";



export const MainBox = styled.div`
  align-items: center;
  padding: 25px 25px 25px 25px;
`;

export const StyledGrid = styled(Row)`
  padding: 20px;
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
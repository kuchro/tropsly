import styled from "styled-components";
import { Button, Card, Divider } from "antd";
const { Meta } = Card;

export const StyledImage = styled.img`
  margin: 10px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 60%;
  object-fit: cover;
  max-width: 220px;
  border-radius: 5px;
`;

export const StyledCard = styled(Card)``;

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

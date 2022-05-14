import styled from "styled-components";
import { AppBar } from "@mui/material";

//A92159 Womens color
export const StyledAppBar = styled(AppBar)`
  background-color: #73AFB6;
`;

export const StyledDiv = styled.div`
  display: flex;
  margin-left: auto;
`;

export const StyledA = styled.a`
  display: flex;
  align-items: center;
  text-decoration: center;
  padding: 20px;
 
  &.active {
    border-bottom: 5px solid #01bf71;
    cursor: default;
  }
  &.StyledAppBar {
    background-color: #73afb6;
  }
  &:hover {
    transition: all 0.2 ease-in-out;
  }
`;

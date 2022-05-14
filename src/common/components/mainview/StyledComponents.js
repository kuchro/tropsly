import styled from "styled-components";
import { Box } from "@mui/material";


export const MainBox = styled(Box)`
    margin: 15px;
  &:after {
    content: "";
    display: flex;
    clear: both;

  }
`;

export const ChildrenBox = styled(Box)`
  float: left;
  width: 100%;
  padding: 10px;
  height: 300px;
`;

import styled from "styled-components";
import { Layout, Image, Typography } from "antd";
const { Content } = Layout;
const { Paragraph, Text } = Typography;

export const StyledLayout = styled(Layout)`
  background-color: inherit;
  align-items: center;
  padding: 20px 20px 20px 20px;
  width: 100%;
  
`;

export const DetailsLayout = styled(Layout)`
  background-color: inherit;
  padding: 25px 25px 25px 25px;
  align-items: left;
  width: 50%;
`;



export const StyledImage = styled(Image)`
  width: 300px;
  float: left;
  margin-top: 25px;
`;
export const StyledContent = styled(Content)`
  font-size: 10px;
  font-family: "Roboto", sans-serif;
  width: 120%;
`;

export const Description = styled(Paragraph)`
    font-size: 15px;
    inline-size: 100%;
`;

export const StyledText = styled(Text)`
    font-size: 15px;
    font-weight: bold;
`;


export const Input = styled.input`
  font-family: "PT Sans", sans-serif;
  font-size: 0.8rem;
  display: block;
  padding: 0.1rem 1rem 0 0;
`;

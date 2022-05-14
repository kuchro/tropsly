import Box from "@mui/material/Box";
import { MainBox, ChildrenBox } from "./StyledComponents";

const MainView = () => {
  return (
    <MainBox>
      <ChildrenBox sx={{ backgroundColor: "#aaa" }}></ChildrenBox>
      <ChildrenBox sx={{ backgroundColor: "#bbb" }}></ChildrenBox>
      <ChildrenBox sx={{ backgroundColor: "#ccc" }}></ChildrenBox>
      <ChildrenBox sx={{ backgroundColor: "#ddd" }}></ChildrenBox>
    </MainBox>
  );
};
export default MainView;

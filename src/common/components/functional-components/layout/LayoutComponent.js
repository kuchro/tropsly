import NavigationBar from "../navbar/index.js";
import { Layout as Nav } from "antd";

const LayoutComponent = ({ children }) => {
  return (
    <>
      <Nav>
        <NavigationBar />
      </Nav>
      <main>{children}</main>
    </>
  );
};

export default LayoutComponent;

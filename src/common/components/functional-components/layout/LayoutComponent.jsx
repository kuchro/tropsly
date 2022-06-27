import NavigationBar from "../navbar/NavBar";
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

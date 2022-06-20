import NavigationBar from "../functional-components/navbar/index.js";
import { Layout as Nav } from "antd";

const Layout = ({ children }) => {
  return (
    <>
      <Nav>
        <NavigationBar />
      </Nav>
      <main>{children}</main>
    </>
  );
};

export default Layout;

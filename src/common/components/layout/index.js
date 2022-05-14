import NavigationBar from "../navbar/index.js";

const Layout =({ children }) => {
  return (
    <>
      <NavigationBar />
      <main>{children}</main>
    </>
  );
}

export default Layout;
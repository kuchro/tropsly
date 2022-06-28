import "../styles/globals.css";
import Layout from "common/components/functional-components/layout/LayoutComponent";
import "antd/dist/antd.css";
import { UserContextProvider } from "store/user-context";
export default function MyApp({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserContextProvider>
  );
}

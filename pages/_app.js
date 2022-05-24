import "../styles/globals.css";
import Layout from "common/components/layout/index.js";
import "antd/dist/antd.css";
export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

import { useRouter } from "next/router";
import Link from "next/link";
import MensComponent from 'common/components/mens/index.js'
import { PRODUCT_DATA as mockdata } from "mockdata";


export const getServerSideProps = async () => {
    const mensProducts = mockdata.filter((product) => product.category === "1");
    return {
      props: {data: mensProducts}
    }
  
  };

const MensPage = ({data}) => {
  return (
    <div>
      <h1>The mens page</h1>
      <MensComponent data={data} />
    </div>
  );
};

export default MensPage;

import { useRouter } from "next/router";
import Link from "next/link";
import WonensComponent from 'common/components/womens/index.js'
import { PRODUCT_DATA as mockdata } from "mockdata";

export const getServerSideProps = async () => {
    const womensProducts = mockdata.filter((product) => product.category === "3");
    return {
      props: {data: womensProducts}
    }
  
  };

const WomensPage = ({data}) => {
  return (
    <div>
      <WonensComponent data={data}/>
    </div>
  );
};

export default WomensPage;

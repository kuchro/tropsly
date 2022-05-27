import { useRouter } from "next/router";
import Link from "next/link";
import KidsComponent from 'common/components/kids/index.js'
import { PRODUCT_DATA as mockdata } from "mockdata";

export const getServerSideProps = async () => {
  const kidsProducts = mockdata.filter((product) => product.category === "3");
  return {
    props: {data: kidsProducts}
  }

};
const KidsPage = ({data}) => {


  return (
    <div>
      <KidsComponent data={data}/>  
    </div>
  );
};

export default KidsPage;

import { useRouter } from "next/router";
import Link from "next/link";
import FavoritesComponent from 'common/components/user-action/favorites-component/FavoritesComponent'
import { HOST_DATA } from "hostdata";
import axios from "axios";

export const getServerSideProps = async () => {
  let categoryDataResponse = await axios.get(`${HOST_DATA.API_URL}${HOST_DATA.CATEGORY}`);
  let catData = categoryDataResponse.data;
  return {
    props: {data: catData}
  }
  
  };

const FavoritePage = ({data}) => {
  return (
    <div>
      <FavoritesComponent data={data} />
    </div>
  );
};

export default FavoritePage;
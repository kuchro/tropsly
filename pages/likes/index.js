import FavoritesComponent from 'common/components/user-action/favorites-component/FavoritesComponent'
import {
  GET_CATEGORY_DATA,
} from "common/http/RequestData.js";

export const getServerSideProps = async () => {
  let categoryDataResponse = await GET_CATEGORY_DATA();
  return {
    props: {data: categoryDataResponse}
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
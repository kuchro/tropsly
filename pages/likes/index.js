import FavoritesComponent from 'common/components/user-action/favorites-component/FavoritesComponent'
import {
  GET_CATEGORY_DATA,GET_MATERIAL_TYPE,
} from "common/http/RequestData.js";

export const getServerSideProps = async () => {
  let categoryDataResponse = await GET_CATEGORY_DATA();
  let transferData=[]
  let materialTypes = await GET_MATERIAL_TYPE();
  if(materialTypes){
    transferData = materialTypes;
  }
  return {
    props: {data: categoryDataResponse, material:transferData}
  }
  
  };

const FavoritePage = ({data, material}) => {
  return (
    <div>
      <FavoritesComponent data={data} materialTypes={material} />
    </div>
  );
};

export default FavoritePage;
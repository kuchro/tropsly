import { useRouter } from "next/router";
import Link from "next/link";
import FavoritesComponent from 'common/components/favorites-component/FavoritesComponent'


export const getServerSideProps = async () => {
    const mensProducts = [];
    return {
      props: {data: mensProducts}
    }
  
  };

const FavoritePage = ({data}) => {
  return (
    <div>
      <FavoritesComponent product={data} />
    </div>
  );
};

export default FavoritePage;
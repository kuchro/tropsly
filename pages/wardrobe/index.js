import { useRouter } from "next/router";
import Link from "next/link";
import WardrobeComponent from 'common/components/wardrobe/WardrobeComponent'


export const getServerSideProps = async () => {
    const mensProducts = [];
    return {
      props: {data: mensProducts}
    }
  
  };

const WardrobePage = ({data}) => {
  return (
    <div>
      <WardrobeComponent product={data} />
    </div>
  );
};

export default WardrobePage;
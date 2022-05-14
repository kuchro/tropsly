import { useRouter } from "next/router";
import Womens from "common/components/womens/index.js";

const ClothesWomensTypePage = () => {
  const router = useRouter();
  const { type } = router.query;
  return (
    <div>
      <Womens />
    </div>
  );
};

export default ClothesWomensTypePage;

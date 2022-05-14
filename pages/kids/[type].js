import { useRouter } from "next/router";
import KidsComponent from "common/components/kids/index.js";

const ClothesKidsTypePage = () => {
  const router = useRouter();
  const { type } = router.query;
  return (
    <div>
      <KidsComponent />
    </div>
  );
};

export default ClothesKidsTypePage;

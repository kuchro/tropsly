import { useRouter } from "next/router";
import Mens from "common/components/mens/index.js";

const ClothesMensTypePage = () => {
  const router = useRouter();
  const { type } = router.query;
  return (
    <div>
      <Mens />
      <p>Type is:{type}</p>
    </div>
  );
};

export default ClothesMensTypePage;

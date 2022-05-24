import { useRouter } from "next/router";

const ClothesKidsTypePage = () => {
  const router = useRouter();
  const { type } = router.query;
  return (
    <div>
      <p>Type is:{type}</p>
    </div>
  );
};

export default ClothesKidsTypePage;

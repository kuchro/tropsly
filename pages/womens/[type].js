import { useRouter } from "next/router";


const ClothesWomensTypePage = () => {
  const router = useRouter();
  const { type } = router.query;
  return (
    <div>
      <p>Type is:{type}</p>
    </div>
  );
};

export default ClothesWomensTypePage;

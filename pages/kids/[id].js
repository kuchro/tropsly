
import { useRouter } from "next/router";
import { useEffect,useState } from "react";
import ProductDetailsPage from "common/components/product-details/ProductDetailsPage.js";
import { PRODUCT_DATA as mockdata } from "mockdata";

const ClothesKidsTypePage = () => {
  const router = useRouter();
 
  const [productData, setProductData] = useState();
  
  useEffect(async () => {
    if(!router.isReady) return;
    const { id } = router.query;
    let obj = mockdata.filter((product) => product.id == id);
    console.log(obj)
    setProductData(obj);
    }, [router.isReady]);

  return (
    <div>
      <div>{productData}</div>
    </div>
  );
};

export default ClothesKidsTypePage;

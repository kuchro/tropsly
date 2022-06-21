import { useRouter } from "next/router";
import Link from "next/link";
import ShoppingCart from "common/components/user-action/shopping-cart/ShoppingCart.js";
import { HOST_DATA } from "hostdata";
import axios from "axios";

export const getServerSideProps = async () => {
  let categoryDataResponse = await axios.get(
    `${HOST_DATA.API_URL}${HOST_DATA.CATEGORY}`
  );
  let catData = categoryDataResponse.data;
  return {
    props: { data: catData },
  };
};

const CartPage = ({ data }) => {
  return (
    <div>
      <ShoppingCart data={data} />
    </div>
  );
};

export default CartPage;

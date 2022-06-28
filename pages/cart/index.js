import ShoppingCart from "common/components/user-action/shopping-cart/ShoppingCart";
import { GET_CATEGORY_DATA } from "common/http/RequestData.js";

export const getServerSideProps = async () => {
  let categoryDataResponse = await GET_CATEGORY_DATA();
  return {
    props: { data: categoryDataResponse },
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

import { useRouter } from "next/router";
import Link from "next/link";
import ShoppingCart from 'common/components/user-action/shopping-cart/ShoppingCart.js'
import { HOST_DATA } from "hostdata";
import axios from "axios";



const CartPage = () => {


  return (
    <div>
    <ShoppingCart/>  
    </div>
  );
};

export default CartPage;
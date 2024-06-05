import React from "react";
import { useSelector } from "react-redux";

function Orders() {
  const {orderProd} = useSelector((state) => state.productSlice);
  console.log(orderProd);
  return <div>User Order</div>;
}

export default Orders;

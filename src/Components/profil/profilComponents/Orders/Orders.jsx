import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Orders.scss";

function Orders() {
  const { checkProd } = useSelector((state) => state.productSlice);
  return (
    <div className="cost">
      <div className="orders">
        {checkProd.map((order) => {
          return (
            <div key={order.id} className="order-cont">
              <div className="order-lol">
                <div className="order-cont-img">
                  <img src={order.img} alt="" />
                </div>
                <div className="order-cont-name">
                  <p className="order-cont-p">{order.name}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Orders;

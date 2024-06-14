import React, { useEffect, useState } from "react";
import axios from "axios";

function Orders() {
  const [order, setOrder] = useState([]);
  console.log(order);

  const goProfilOrder = async () => {
    const { data } = await axios.get("http://localhost:3000/order");
    setOrder(data);
  };

  useEffect(() => {
    goProfilOrder();
  }, []);

  return (
    <div className="cost">
      <div className="orders">
        {order.map((order) => {
          return (
            <>
              <div className="order">
                <div className="order-img">
                  <img src={order.img} alt="" />
                </div>
                <div className="order-name">
                  <p className="order-p">{order.name}</p>
                </div>
              </div>
            </>
          )
        })}
      </div>
    </div>
  );
}

export default Orders;

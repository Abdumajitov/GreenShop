import React, { useState } from "react";
import { useSelector } from "react-redux";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import "./Orders.scss";

function Orders() {
  const [strel, setStrel] = useState(false);
  const { checkProd } = useSelector((state) => state.productSlice);
  const strelka = (order) => {
    const existing = checkProd.find((item) => item.id === order.id);
    if (existing) {
      setStrel((prev) => !prev);
    }
  };
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
              <div onClick={() => strelka(order)} className="strelka">
                {strel ? (
                  <div className="strelka1">
                    <ArrowBackIosNewIcon sx={{ fontSize: 20 }} />
                  </div>
                ) : (
                  <div className="strelka2">
                    <ArrowBackIosNewIcon sx={{ fontSize: 20 }} />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Orders;

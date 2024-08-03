import React, { useEffect, useState } from "react";
import "./OrPg.scss";
import thankImg from "../../../assets/PageImg/login/Group (5).png";
import { useDispatch, useSelector } from "react-redux";
import { saleProduct } from "../../../toolkit/userSlice/productSlice";

function OrPg({ para, prodQty, setModal }) {
  const [total, setTotal] = useState(0);
  console.log(total);
  const dispatch = useDispatch();
  const { korzinaProduct } = useSelector((state) => state.productSlice);

  const accProfilDetal = JSON.parse(localStorage.getItem("accDetal"));

  const totalAmount = () => {
    setTotal(
      para.reduce((a, product) => a + product.price * product.qty, 0)
    );
  };

  useEffect(() => {
    totalAmount();
  }, [total]);

  const goCheck = () => {
    localStorage.setItem(
      "accDetal",
      JSON.stringify({ ...accProfilDetal, total: total })
    );
    dispatch(saleProduct(korzinaProduct));
    setModal((prev) => !prev);
  };

  const randomData = Date.now();

  const date = new Date();
  const year = date.getFullYear();
  const month = date.toLocaleString("default", { month: "long" });
  const day = String(date.getDate()).padStart(2, "0");
  const formattedDate = ` ${day} ${month} ${year}`;

  return (
    <div className="orderPage">
      <div className="order-hand">
        <img src={thankImg} alt="" />
        <p className="oreder-hand-p">Your order has been received</p>
      </div>
      <div className="order-number">
        <div className="order-number-cont">
          <p className="number">Order Number</p>
          <p className="api">{randomData}</p>
        </div>
        <div className="order-number-cont">
          <p className="number">Date</p>
          <p className="api">{formattedDate}</p>
        </div>
        <div className="order-number-cont">
          <p className="number">Total</p>
          <p className="api">${total}</p>
        </div>
        <div className="order-number-cont">
          <p className="number">Payment Method</p>
          <p className="api">Cash on delivery</p>
        </div>
      </div>
      <div className="order-detals">
        <p className="order-detals-p">Order Details</p>
        <div className="order-detals-cont">
          <p className="prder-cont-product">Order Details</p>
          <div className="qty">
            <p className="qty-p">Qty</p>
            <p className="subtotal">Subtotal</p>
          </div>
        </div>
      </div>
      <div className="order-products">
        {para.map((orderProd, i) => {
          return (
            <div key={i} className="order-product">
              <div className="order-img">
                <img src={orderProd.img} alt="" />
                <div className="order-about">
                  <p className="name">{orderProd.name}</p>
                  <p className="api2">SKU: 1995751877966</p>
                </div>
              </div>
              <div className="order-qty">
                <p className="order-qty-p">(x {prodQty})</p>
                <p className="order-total">${orderProd.price * prodQty}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="shipping">
        <div className="ship">
          <p className="ship-p">Shiping</p>
          <p className="ship-price">$7</p>
        </div>
        <div className="ship2">
          <p className="total-p">Total</p>
          <p className="total-price">$</p>
        </div>
      </div>
      <div className="thank-you">
        <p className="thank">
          Your order is currently being processed. You will receive an order
          confirmation email shortly with the expected delivery date for your
          items.
        </p>
        <button onClick={goCheck} className="thank-btn">
          Track your order
        </button>
      </div>
    </div>
  );
}

export default OrPg;

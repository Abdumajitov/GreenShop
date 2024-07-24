import React, { useEffect, useState } from "react";
import "./Order.scss";
import thankImg from "../../../assets/PageImg/login/Group (5).png";
import { useDispatch, useSelector } from "react-redux";
import { saleProduct } from "../../../toolkit/userSlice/productSlice";
import { useNavigate } from "react-router-dom";

function Order({ total, setModal }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { korzinaProduct } = useSelector((state) => state.productSlice);
  const accProfilDetal = JSON.parse(localStorage.getItem("accDetal"));
  
  const goCheck = () => {
    localStorage.setItem(
      "accDetal",
      JSON.stringify({ ...accProfilDetal, total: total })
    );
    dispatch(saleProduct(korzinaProduct));
    setModal(false);
    navigate("/");
  };

  return (
    <div className="oreder">
      <div className="order-hand">
        <img src={thankImg} alt="" />
        <p className="oreder-hand-p">Your order has been received</p>
      </div>
      <div className="order-number">
        <div className="order-number-cont">
          <p className="number">Order Number</p>
          <p className="api">19586687</p>
        </div>
        <div className="order-number-cont">
          <p className="number">Date</p>
          <p className="api">15 Sep, 2021</p>
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
        {korzinaProduct.map((orderProd, i) => {
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
                <p className="order-qty-p">(x {orderProd.qty})</p>
                <p className="order-total">
                  ${orderProd.price * orderProd.qty}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="shipping">
        <div className="ship">
          <p className="ship-p">Shiping</p>
          <p className="ship-price">${korzinaProduct.length * 7}</p>
        </div>
        <div className="ship2">
          <p className="total-p">Total</p>
          <p className="total-price">${total + korzinaProduct.length * 7}</p>
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

export default Order;

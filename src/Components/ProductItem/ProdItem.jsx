import React, { useEffect, useState } from "react";
import "./ProdItem.scss";
import serach from "../../assets/PageImg/logo/search-interface-symbol.png";
import ShopingBag from "../../assets/PageImg/logo/shopping-bag.png";
import heart from "../../assets/PageImg/logo/heart 1.png";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { korzinaProd } from "../../toolkit/userSlice/productSlice";
import Korzina from "../Korzina/Korzina";

function ProdItem({ img, name, price, id }) {
  const dispatch = useDispatch();
  const [cartItem, setCartItem] = useState([]);
  console.log(cartItem);
  const navigate = useNavigate();
  const goProdPage = () => {
    navigate("/productItem");
  };
  console.log(cartItem);

  useEffect(() => {
    dispatch(korzinaProd(cartItem));
  }, [cartItem]);

  const addKorzina = (prod) => {
    const existing = cartItem.find((item) => item.id === prod.id);
    if (existing) {
      const newItem = cartItem.map((item) =>
        item.id === prod.id ? { ...item, qty: item.qty + 1 } : item
      );
      setCartItem(newItem);
    } else {
      setCartItem((prev) => {
        return [...prev, { ...prod, qty: 1 }];
      });
    }
  };

  const delKorzina = (prod) => {
    const existing = cartItem.find((item) => item.id === prod.id);

    if (existing.qty === 1) {
      setCartItem((prev) => {
        return prev.filter((item) => item.id !== prod.id);
      });
    } else {
      setCartItem((prev) => {
        return prev.map((item) =>
          item.id === prod.id ? { ...item, qty: item.qty - 1 } : item
        );
      });
    }
  };

  return (
    <div key={id} className="greenshop-product">
      <div className="product-img">
        <img
          onClick={goProdPage}
          name="img"
          src={img}
          alt=""
          className="imger"
        />
        <div className="bottom-img">
          <img
            onClick={() => addKorzina({ name, price, img, id })}
            className="bottom-imger1"
            src={ShopingBag}
            alt=""
          />
          <img src={heart} alt="" className="bottom-imger" />
          <img className="bottom-imger2" src={serach} alt="" />
        </div>
      </div>
      <div onClick={goProdPage} className="product-sale">
        <p name="name" className="product-name">
          {name}
        </p>
        <p name="price" className="product-price">
          ${price}
        </p>
      </div>
      <div style={{ display: "none" }} className="noneKorzina">
        <Korzina addKorzina={addKorzina} delKorzina={delKorzina} />
      </div>
    </div>
  );
}

export default ProdItem;

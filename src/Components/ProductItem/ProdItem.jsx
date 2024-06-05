import React from "react";
import "./ProdItem.scss";
import serach from "../../assets/PageImg/logo/search-interface-symbol.png";
import ShopingBag from "../../assets/PageImg/logo/shopping-bag.png";
import heart from "../../assets/PageImg/logo/heart 1.png";

import { useNavigate } from "react-router-dom";

function ProdItem({ img, name, price, id, addKorzina, liked }) {
  const navigate = useNavigate();
  const goProdPage = () => {
    navigate("/productItem");
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
          <img
            src={heart}
            alt=""
            onClick={() => liked({ name, price, img, id })}
            className="bottom-imger"
          />
          <img className="bottom-imger2" src={serach} alt="" />
        </div>
      </div>
      <div onClick={goProdPage} className="product-sale">
        <div className="product-sale-p">
          <p name="name" className="product-name">
            {name}
          </p>
          <p name="price" className="product-price">
            ${price}
          </p>
        </div>
        <div className="product-sale-bag">
          <img
            onClick={() => addKorzina({ name, price, img, id })}
            className="bottom-imger12"
            src={ShopingBag}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default ProdItem;

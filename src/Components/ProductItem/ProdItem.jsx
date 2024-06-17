import React from "react";
import "./ProdItem.scss";
import serach from "../../assets/PageImg/logo/search-interface-symbol.png";
import ShopingBag from "../../assets/PageImg/logo/shopping-bag.png";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { useNavigate } from "react-router-dom";
function ProdItem({ img, name, price, id, cartItem, addKorzina, like }) {
  const navigate = useNavigate();
  const goProdPage = () => {
    navigate("/productItem");
  };
  console.log([...cartItem].like === true);

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
          <p
            onClick={() => like({ name, price, img, id })}
            className={
              [...cartItem].like === true ? "bottom-imger-like" : "bottom-imger"
            }
          >
            <FavoriteIcon />
          </p>
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

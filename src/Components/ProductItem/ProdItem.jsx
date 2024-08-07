import React, { useState } from "react";
import "./ProdItem.scss";
import serach from "../../assets/PageImg/logo/search-interface-symbol.png";
import ShopingBag from "../../assets/PageImg/logo/shopping-bag.png";
import FavoriteIcon from "@mui/icons-material/Favorite";
import useCateHook from "../../Hooks/CategoryHook/CateHook";

function ProdItem({ img, name, price, id, addKorzina, goProdPage }) {
  const [faller, setFaller] = useState(false);
  const { inputHandler } = useCateHook();
  const geter = () => {
    setFaller((prev) => !prev);
  };

  return (
    <div key={id} className="greenshop-product">
      <div className="product-img">
        <img
          onClick={() => goProdPage({ id })}
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
          <p onClick={geter} className={faller ? "reder" : "bottom-imger"}>
            <FavoriteIcon />
          </p>
          <img className="bottom-imger2" src={serach} alt="" />
        </div>
      </div>
      <div onClick={() => goProdPage({ id })} className="product-sale">
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

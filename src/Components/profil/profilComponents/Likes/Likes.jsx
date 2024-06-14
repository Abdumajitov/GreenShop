import React from "react";
import pro from "../../../../assets/ProductImg/image 7.png";
import serach from "../../../../assets/PageImg/logo/search-interface-symbol.png";
import ShopingBag from "../../../../assets/PageImg/logo/shopping-bag.png";
import "./Likes.scss"
import heart from "../../../../assets/PageImg/logo/heart 1.png";

function Likes() {
  return (
    <>
      <div className="like">
        <div className="greenshop-product">
          <div className="product-img">
            <img name="img" src={pro} alt="" className="imger" />
            <div className="bottom-img">
              <img
                onClick={() => addKorzina({ name, price, img, id })}
                className="bottom-imger1"
                src={ShopingBag}
                alt=""
              />
              <img src={heart} className="bottom-imger" alt="" />
              <img className="bottom-imger2" src={serach} alt="" />
            </div>
          </div>
          <div className="product-sale">
            <p name="name" className="product-name">
              Barberton Daisy
            </p>
            <p name="price" className="product-price">
              $119.00
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Likes;

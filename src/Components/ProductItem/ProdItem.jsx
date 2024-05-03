import React from "react";
import "./ProdItem.scss";
import serach from "../../assets/PageImg/logo/search-interface-symbol.png";
import ShopingBag from "../../assets/PageImg/logo/shopping-bag.png";
import heart from "../../assets/PageImg/logo/heart 1.png";
import flowers1 from "../../assets/ProductImg/image_1__1_-removebg-preview.png";
import { useSelector } from "react-redux";

function ProdItem() {
  const products = useSelector((state) => state.product.products);
  console.log(products);
  return (
    <div className="greenProducts">
      {products.map((product) => {
        <div key={product.id} className="greenshop-product">
          <div className="product-img">
            <img src={product.img} alt="" className="imger" />
            <div className="bottom-img">
              <img className="bottom-imger1" src={ShopingBag} alt="" />
              <img src={heart} alt="" className="bottom-imger" />
              <img className="bottom-imger2" src={serach} alt="" />
            </div>
          </div>
          <div className="product-sale">
            <p className="product-name">{product.name}</p>
            <p className="product-price">${product.price}</p>
          </div>
        </div>;
      })}
    </div>
  );
}

export default ProdItem;

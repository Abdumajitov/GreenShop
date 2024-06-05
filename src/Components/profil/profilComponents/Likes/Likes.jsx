import React from "react";
import { useSelector } from "react-redux";

function Likes() {
  const { likeAdder } = useSelector((state) => state.productSlice);
  return (
    <>
      <div className="like">
        {likeAdder.map((likedProd, id) => {
          return (
            <div key={id} className="greenshop-product">
              <div className="product-img">
                <img name="img" src={likedProd.img} alt="" className="imger" />
              </div>
              <div className="product-sale">
                <p name="name" className="product-name">
                  {likedProd.name}
                </p>
                <p name="price" className="product-price">
                  ${likedProd.price}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Likes;

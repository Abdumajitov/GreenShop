import React from "react";
import "./Prod.scss";
import ProdItem from "../../Components/ProductItem/ProdItem";

const category = [
  "House Plants",
  "Potter Plants",
  "Seeds",
  "Small Plants",
  "Big Plants",
  "Succulents",
  "Trerrariums",
  "Gardening",
  "Accessories",
];

function Prod() {
  return (
    <div className="products">
      <div className="leftCategory">
        {category.map((cat) => {
          return (
            <>
              <div key={cat.id} className="leftCategory-cont">
                <p className="leftCategory-p">{cat}</p>
              </div>
            </>
          );
        })}
        <div className="leftCategory-size">
          <p className="sizeCategory">Small</p>
          <p className="sizeCategory">Medium</p>
          <p className="sizeCategory">Large</p>
        </div>
      </div>
      <div className="rigtBar">
        <div className="bottom-product">
          <ProdItem />
        </div>
      </div>
    </div>
  );
}

export default Prod;

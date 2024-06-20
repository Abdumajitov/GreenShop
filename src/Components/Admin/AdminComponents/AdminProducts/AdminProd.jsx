import React from "react";
import "./AdminProd.scss";
import { useSelector } from "react-redux";
import CreateIcon from "@mui/icons-material/Create";

function AdminProd() {
  const { products } = useSelector((state) => state.productSlice);
  console.log(products);

  return (
    <div className="adminProd">
      <div className="bottom-product2">
        {products.map((product, i) => {
          return (
            <div key={i} className="greenshop-product">
              <div className="product-img">
                <img name="img" src={product.img} alt="" className="imger" />
              </div>
              <div className="product-sale">
                <div className="product-sale-p">
                  <p name="name" className="product-name">
                    {product.name}
                  </p>
                  <p name="price" className="product-price">
                    ${product.price}
                  </p>
                </div>
                <div className="redactor">
                  <p className="redactor-p">
                    <CreateIcon />
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AdminProd;

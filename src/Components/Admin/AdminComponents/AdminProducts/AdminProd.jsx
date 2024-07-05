import React, { useState } from "react";
import "./AdminProd.scss";
import { useSelector } from "react-redux";
import CreateIcon from "@mui/icons-material/Create";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import AddProd from "./AddProd/AddProd";

function AdminProd() {
  const { products, korzinaProduct } = useSelector(
    (state) => state.productSlice
  );
  const [faller, setFaller] = useState(false);
  const [cre, setCre] = useState([]);

  const geter = () => {
    setFaller((prev) => !prev);
  };

  const create = (prod) => {
    const existing = products.find((item) => item.id === prod.id);
    if (existing) {
      setCre(existing.id);
    }
  };

  return (
    <div className="adminProd">
      <div style={{ marginBottom: "20px" }} className="adminUser-search">
        <div className="analistik-search">
          <input type="text" />
          <SearchIcon />
        </div>
        <div className="addUser">
          <div onClick={geter} className="addUser-cont">
            <AddIcon />
            <p className="crateUser">CREATE</p>
          </div>
        </div>
      </div>
      <div className="bot-creaet">
        <div className="bottom-product2">
          {products.map((product, i) => {
            return (
              <div
                onClick={() => create(product.id)}
                key={i}
                className={
                  cre === product.id
                    ? "greenshop-product1"
                    : "greenshop-product"
                }
              >
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
                    <p onClick={() => create(product)} className="redactor-p">
                      <CreateIcon />
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className={faller ? "create1" : "create"}>
          <AddProd />
        </div>
      </div>
    </div>
  );
}

export default AdminProd;

import React, { useState } from "react";
import "./AdminProd.scss";
import { useDispatch, useSelector } from "react-redux";
import CreateIcon from "@mui/icons-material/Create";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import AddProd from "./AddProd/AddProd";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { updateUser } from "../../../../toolkit/userSlice/productSlice";

function AdminProd() {
  const { products } = useSelector((state) => state.productSlice);
  const dispatch = useDispatch();
  const [faller, setFaller] = useState(false);
  const [cre, setCre] = useState([]);
  const [state, setState] = useState(products);

  const updataBtn = products.find((user) => user.id === cre.id);

  const geter = () => {
    setFaller((prev) => !prev);
  };

  const saveCreate = () => {
    dispatch(updateUser(updataBtn));
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    const id = e.target.getAttribute("data-id");

    const existing = state.map((prod) => {
      if (prod.id === id) {
        // prod[name] = value;

        return {
          id: prod.id,
          name: prod.value,
          price: prod.prev,
          img: prod.img,
          size: prod.size,
        };
      } else {
        return prod;
      }
    });

    setState(existing);
  };

  const create = (id) => {
    const existing = cre.find((id1) => id1 === id);
    if (existing) {
      const lol = cre.filter((ider) => ider !== id);
      setCre(lol);
    } else {
      setCre((prev) => {
        return [...prev, id];
      });
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
          {state.map((product) => {
            return (
              <div
                key={product.id}
                className={
                  cre.includes(product.id)
                    ? "greenshop-product1"
                    : "greenshop-product"
                }
              >
                <div className="prodDetal">
                  <div className="prodMain">
                    <div className="product-img">
                      <img
                        name="img"
                        src={product.img}
                        alt=""
                        className="imger"
                      />
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
                        <p
                          onClick={() => create(product.id)}
                          className="redactor-p"
                        >
                          <CreateIcon />
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="prodCustom">
                    <div className="numberInput">
                      <label htmlFor="prodImg">
                        <div className="userPhoto">
                          {/* <img src={product.img} alt="" /> */}
                          <AddPhotoAlternateIcon />
                        </div>
                      </label>
                      <input
                        style={{ display: "none" }}
                        type="file"
                        name="img"
                        id="prodImg"
                      />
                      <button className="change-but">Change</button>
                    </div>
                    <div className="prodNameCustom">
                      <div className="prodName-child">
                        <label htmlFor="">Name</label>
                        <input
                          type="text"
                          name="name"
                          value={product.name}
                          data-id={product.id}
                          onChange={onChangeHandler}
                          placeholder="Product Name"
                        />
                      </div>
                      <div className="prodName-child">
                        <label htmlFor="">Price</label>
                        <input
                          type="text"
                          name="price"
                          data-id={product.id}
                          onChange={onChangeHandler}
                          value={product.price}
                          placeholder="Product Price"
                        />
                      </div>
                      <div className="prodName-child2">
                        <div className="confirmation">
                          <input type="checkbox" name="" id="" />
                          <p className="consfer">confirm</p>
                        </div>
                        <select
                          name="size"
                          data-id={product.id}
                          onChange={onChangeHandler}
                        >
                          <option value="">Small</option>
                          <option value="">Medium</option>
                          <option value="">Large</option>
                        </select>
                      </div>
                    </div>
                    <button onClick={saveCreate} className="prodCustomSave">
                      Save
                    </button>
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

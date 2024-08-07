import React, { useState } from "react";
import "./AdminProd.scss";
import { useDispatch, useSelector } from "react-redux";
import CreateIcon from "@mui/icons-material/Create";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import AddProd from "./AddProd/AddProd";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { updateUser } from "../../../../toolkit/userSlice/productSlice";
import useCateHook from "../../../../Hooks/CategoryHook/CateHook";

function AdminProd() {
  const { products, seracher } = useSelector((state) => state.productSlice);
  console.log(seracher);
  const dispatch = useDispatch();
  const [faller, setFaller] = useState(false);
  const [cre, setCre] = useState([]);
  const [state, setState] = useState(products);
  console.log(state);
  const { inputHandler2 } = useCateHook();

  const updataBtn = products.find((prod) => prod.id === cre.id);

  const geter = () => {
    setFaller((prev) => !prev);
  };

  const saveCreate = () => {
    dispatch(updateUser(state));
  };

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value =
      e.target.type === "file"
        ? URL.createObjectURL(e.target.files[0])
        : e.target.value;
    console.log(e);
    const id = e.target.getAttribute("data-id");

    setState((prevState) =>
      prevState.map((prod) =>
        prod.id === id ? { ...prod, [name]: value } : prod
      )
    );
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
          <input onChange={inputHandler2} name="search" type="text" />
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
                        data-id={product.id}
                        onChange={onChangeHandler}
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

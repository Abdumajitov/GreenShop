import React, { useState } from "react";
import "./AddProd.scss";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../../../../toolkit/userSlice/productSlice";

function AddProd() {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    img: "",
    name: "",
    price: "",
    cate: "",
  });

  const inSave = (e) => {
    const name = e.target.name;
    const value =
      e.target.type === "file"
        ? URL.createObjectURL(e.target.files[0])
        : e.target.value;

    setState((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const submitHandler = () => {
    if (state.img && state.name && state.price && state.cate) {
      dispatch(addProduct(state));
    }
  };

  return (
    <div className="add">
      <div className="addProduct">
        <div className="addImg">
          <label className="lab" htmlFor="file">
            Add img
          </label>
          <input
            name="img"
            onChange={inSave}
            style={{ display: "none" }}
            id="file"
            type="file"
          />
        </div>
        <div className="addName">
          <div className="add-name-cont">
            <label htmlFor="">Product Name</label>
            <input
              name="name"
              onChange={inSave}
              type="text"
              placeholder="Product Name"
            />
          </div>
          <div className="add-name-cont">
            <label htmlFor="">Product Price</label>
            <input
              name="price"
              onChange={inSave}
              type="text"
              placeholder="Product Price"
            />
          </div>
          <div className="add-name-cont">
            <label htmlFor="">Product Category</label>
            <input
              name="cate"
              onChange={inSave}
              type="text"
              placeholder="Product Price"
            />
          </div>
          <button onClick={submitHandler} className="addBtn">
            Add+
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddProd;

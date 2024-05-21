import React, { useState } from "react";
import "./AddProduct.scss";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../toolkit/userSlice/productSlice";

function AddProduct() {
   const dispatch = useDispatch();

   const product = useSelector((state) => state.product.products);
   console.log(product);

   const [inputSave, setInputSave] = useState({
      name: "",
      img: "",
      price: "",
      about: "",
      category: "",
      size: "",
   });
   console.log(inputSave);

   const inputHandler = (e) => {
      const name = e.target.name;
      const value =
         e.target.type === "file"
            ? URL.createObjectURL(e.target.files[0])
            : e.target.value;

      setInputSave((prev) => {
         return { ...prev, [name]: value };
      });
   };

   const btnHandler = () => {
      if (
         inputSave.name &&
         inputSave.img &&
         inputSave.price &&
         inputSave.about
      ) {
         dispatch(addProduct(inputSave));
      }
   };

   return (
      <div className="AddProduct">
         <div className="addSetting">
            <div className="addImg">
               <label htmlFor="file">Add Img</label>
               <input
                  onChange={inputHandler}
                  type="file"
                  name="img"
                  id="file"
               />
            </div>
            <div className="AddBottom">
               <div className="inputName">
                  <label className="lable">Name:</label>
                  <input
                     onChange={inputHandler}
                     name="name"
                     type="text"
                     className="name"
                  />
               </div>
               <div className="inputName">
                  <label className="lable">Price:</label>
                  <input
                     onChange={inputHandler}
                     name="price"
                     type="text"
                     className="name"
                  />
               </div>
               <div className="inputName">
                  <label className="lable">Category:</label>
                  <input name="category" type="text" className="name" />
               </div>
               <div className="inputName">
                  <label className="lable">About:</label>
                  <input
                     onChange={inputHandler}
                     name="about"
                     type="text"
                     className="name"
                  />
               </div>
               <div className="acept">
                  <div className="inputAccept">
                     <label className="lable">Accept:</label>
                     <input type="radio" className="name" />
                  </div>
                  <div className="inputSize">
                     <label className="lable">Size:</label>
                     <select onChange={inputHandler} name="size" id="">
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                     </select>
                  </div>
               </div>
            </div>
         </div>
         <div className="AddBtn">
            <button onClick={btnHandler}>Add Product</button>
         </div>
      </div>
   );
}

export default AddProduct;

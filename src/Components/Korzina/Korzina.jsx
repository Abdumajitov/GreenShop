import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Korzina.scss";
import Footer from "../../Pages/Navbar/Footer/Footer";

function Korzina({ addKorzina, delKorzina }) {
   const { korzinaProduct } = useSelector((state) => state.productSlice);
   console.log("ProductKorzina", korzinaProduct);
   const [total, setTotal] = useState(0);
   const totalAmount = () => {
      setTotal(
         korzinaProduct.reduce(
            (a, product) => a + product.price * product.qty,
            0
         )
      );
   };
   useEffect(() => {
      totalAmount();
   }, [korzinaProduct]);
   return (
      <div className="bigKorzina">
         <div className="korzina">
            <div className="korzina-cart">
               <div className="you-cart">
                  <p className="you-cart-p">Your cart.</p>
                  <p className="you-cart-item">{korzinaProduct.length} items</p>
               </div>
               <div className="korzina-cart-products">
                  <div className="korzina-cont-nav">
                     <p className="korzina-nav-p">PRODUCT DETAILS</p>
                     <div className="korzina-cont-nav-rigt">
                        <p>AMOUNT</p>
                        <p>PRICE</p>
                        <p>TOTAL</p>
                     </div>
                  </div>
                  <div className="korzina-cont-products-all">
                     {korzinaProduct.map((korzin, i) => {
                        return (
                           <div
                              key={korzin.id}
                              className="korzina-cart-product"
                           >
                              <div className="korzina-product-detal">
                                 <img src={korzin.img} alt="" />
                                 <p>{korzin.name}</p>
                              </div>
                              <div className="how-many">
                                 <button
                                    style={{ cursor: "pointer" }}
                                    onClick={() => delKorzina(korzin)}
                                    className="btn"
                                 >
                                    -
                                 </button>
                                 <p>{korzin.qty}</p>
                                 <button
                                    style={{ cursor: "pointer" }}
                                    onClick={() => addKorzina(korzin)}
                                    className="btn"
                                 >
                                    +
                                 </button>
                              </div>
                              <p className="price">${korzin.price}</p>
                              <p className="total">
                                 ${korzin.price * korzin.qty}
                              </p>
                           </div>
                        );
                     })}
                  </div>
               </div>
            </div>
            <div className="korzina-total">
               <div className="total-cont">
                  <p className="older">Order summary</p>
                  <div className="items">
                     <p className="itmes-p"> ITEMS</p>
                     <p className="items-price">{korzinaProduct.length}</p>
                  </div>
                  <div className="promokode">
                     <label className="lable">Promocode</label>
                     <input
                        className="promo"
                        type="text"
                        name=""
                        placeholder="Promocode"
                        id=""
                     />
                  </div>
                  <div className="total-pice">
                     <p className="amount">Total amount</p>
                     <p className="price">${total}</p>
                  </div>
                  <div className="buy">
                     <button className="btn">Continue</button>
                  </div>
               </div>
            </div>
         </div>
         <Footer />
      </div>
   );
}

export default Korzina;

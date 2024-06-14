import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Korzina.scss";
import Footer from "../../Pages/Navbar/Footer/Footer";
import Order from "./Order/Order";
import {
   updateFilteredData,
   korzinaProd,
} from "../../toolkit/userSlice/productSlice";

function Korzina() {
   const dispatch = useDispatch();
   const { korzinaProduct } = useSelector((state) => state.productSlice);
   const [total, setTotal] = useState(0);
   const [skidka, setSkidka] = useState(false);
   const [modal, setModal] = useState(false);
   const [promo, setPromo] = useState({
      promo: "",
   });

   const [cartItem, setCartItem] = useState(korzinaProduct);

   useEffect(() => {
      dispatch(korzinaProd(cartItem));
   }, [cartItem]);

   const incrProductCount = (prod) => {
      const newItem = cartItem.map((item) =>
         item.id === prod.id ? { ...item, qty: item.qty + 1 } : item
      );
      setCartItem(newItem);
   };
   const decrProductCount = (prod) => {
      let resultItem;
      const newItem = cartItem.map((item) =>
         item.id === prod.id ? { ...item, qty: item.qty - 1 } : item
      );
      if (prod.qty === 1) {
         resultItem = newItem.filter((item) => item.qty !== 0);
      } else {
         resultItem = newItem;
      }
      setCartItem(resultItem);
   };

   const promoHand = (e) => {
      const { name, value } = e.target;
      setPromo((prev) => {
         return { ...prev, [name]: value };
      });
   };
   const totalAmount = () => {
      setTotal(
         korzinaProduct.reduce(
            (a, product) => a + product.price * product.qty,
            0
         )
      );
   };
   const thank = () => {
      if (korzinaProduct) {
         setModal(true);
      } else {
         setModal(false);
      }
   };
   const modalClose = () => {
      setModal(false);
   };
   useEffect(() => {
      if (promo.promo === "sam1005") {
         setSkidka(true);
      } else {
         setSkidka(false);
      }
   }, [promo]);

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
                                    onClick={() => decrProductCount(korzin)}
                                    className="btn"
                                 >
                                    -
                                 </button>
                                 <p>{korzin.qty}</p>
                                 <button
                                    style={{ cursor: "pointer" }}
                                    onClick={() => incrProductCount(korzin)}
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
                        onChange={promoHand}
                        name="promo"
                        placeholder="Promocode"
                        id=""
                     />
                     <div className="skidkaTran">
                        {skidka ? (
                           <div className="skidka">
                              <p className="skidka-p">-30% discount</p>
                           </div>
                        ) : (
                           ""
                        )}
                     </div>
                  </div>
                  <div className="total-pice">
                     <p className="amount">Total amount</p>
                     <p className="price">${total}</p>
                  </div>
                  <div className="buy">
                     <button onClick={thank} className="btn">
                        Proceed To Checkout
                     </button>
                  </div>
               </div>
            </div>
         </div>
         <div className="order">{modal && <Order total={total} />}</div>
         {modal && (
            <div
               onClick={modalClose}
               setModal={setModal}
               className="modal"
            ></div>
         )}
         <Footer />
      </div>
   );
}

export default Korzina;

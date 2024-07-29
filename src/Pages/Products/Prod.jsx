import React from "react";
import "./Prod.scss";
import { useEffect, useState } from "react";
import ProdItem from "../../Components/ProductItem/ProdItem";
import {
  updateFilteredData,
  korzinaProd,
} from "../../toolkit/userSlice/productSlice";
import { useDispatch, useSelector } from "react-redux";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import superSale from "../../assets/ProductImg/Super Sale Banner.png";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

import Pagination from "@mui/material/Pagination";

import useCateHook from "../../Hooks/CategoryHook/CateHook";
import { NavLink, useNavigate } from "react-router-dom";

function Prod() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { products, filterProduct, korzinaProduct } = useSelector(
    (state) => state.productSlice
  );
  const [cartItem, setCartItem] = useState(korzinaProduct);

  useEffect(() => {
    dispatch(korzinaProd(cartItem));
  }, [cartItem]);

  const addKorzina = (prod) => {
    const existing = cartItem.find((item) => item.id === prod.id);
    if (existing) {
      const newItem = cartItem.map((item) =>
        item.id === prod.id ? { ...item, qty: item.qty + 1 } : item
      );
      setCartItem(newItem);
    } else {
      setCartItem([...cartItem, { ...prod, qty: 1 }]);
    }
  };

  const filterHandler = () => {
    const newData = products.filter(
      (home) => home.price >= value[0] && home.price <= value[1]
    );
    dispatch(updateFilteredData(newData));
  };

  const [value, setValue] = React.useState([60, 137]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [loading, setLoading] = useState(false);

  const { inputHandler, setInputData } = useCateHook();

  const [cater, setCater] = useState(false);

  const catFall = () => {
    setCater((prev) => !prev);
  };

  const goProdPage = (prod) => {
    const existing = products.find((item) => item.id === prod.id);
    navigate(`/productItem/${existing.id}`);
  };

  const [page, setPage] = useState(1);
  const [lowPage, setLowPage] = useState(10);

  const lastIndex = page * lowPage;
  const postPage = lastIndex - lowPage;
  return (
    <div className="products">
      <div className="find">
        <p className="prof">Products</p>
        <NavLink className={"find-l"} to="/shop">
          Find More
        </NavLink>
      </div>
      <div className="rigtBar">
        {loading ? (
          <div className="loading">
            <Stack sx={{ color: "grey.500" }} spacing={2} direction="row">
              <CircularProgress color="success" />
            </Stack>
          </div>
        ) : (
          <div className="bottom-product">
            {products.slice(postPage, lastIndex).map((product, i) => {
              return (
                <ProdItem
                  goProdPage={goProdPage}
                  key={i}
                  cartItem={cartItem}
                  {...product}
                  addKorzina={addKorzina}
                  setInputData={setInputData}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Prod;

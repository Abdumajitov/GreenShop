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

function Prod() {
  const dispatch = useDispatch();
  const { korzinaProduct } = useSelector((state) => state.productSlice);
  const { products, filterProduct } = useSelector(
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

  const goProd = (id) => {};

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

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 700);
  }, [filterProduct]);

  const { inputHandler } = useCateHook();

  const [cater, setCater] = useState(false);

  const catFall = () => {
    setCater((prev) => !prev);
  };
  return (
    <div className="products">
      <div className="leftCategory">
        <div
          style={{ display: "flex", alignItems: "center", gap: "10px" }}
          className="category-text"
        >
          <p className="categoryAbzor-pp">Category</p>
          <p
            onClick={catFall}
            className={cater ? "categoryAbzor-pp3" : "categoryAbzor-pp2"}
          >
            <ArrowBackIosNewIcon />
          </p>
        </div>
        <div className={cater ? "leftCategory-mini2" : "leftCategory-mini"}>
          <div className="categoryAbzor">
            <div className="categoryAbzor-cont">
              <button
                onClick={inputHandler}
                name="category"
                value="House Plants"
                className="categoryAbzor-p"
              >
                House Plants
              </button>
            </div>
            <div className="categoryAbzor-cont">
              <button
                onClick={inputHandler}
                name="category"
                value="Potter Plants"
                className="categoryAbzor-p"
              >
                Potter Plants
              </button>
            </div>
            <div className="categoryAbzor-cont">
              <button
                onClick={inputHandler}
                name="category"
                value="Seeds"
                className="categoryAbzor-p"
              >
                Seeds
              </button>
            </div>
            <div className="categoryAbzor-cont">
              <button
                onClick={inputHandler}
                name="category"
                value="Small Plants"
                className="categoryAbzor-p"
              >
                Small Plants
              </button>
            </div>
            <div className="categoryAbzor-cont">
              <button
                onClick={inputHandler}
                name="category"
                value="Big Plants"
                className="categoryAbzor-p"
              >
                Big Plants
              </button>
            </div>
            <div className="categoryAbzor-cont">
              <button
                onClick={inputHandler}
                name="category"
                value="Succulents"
                className="categoryAbzor-p"
              >
                Succulents
              </button>
            </div>
          </div>
          <div className="range">
            <div className="range-cont">
              <Box sx={{ width: 300 }}>
                <Slider
                  getAriaLabel={() => "Temperature range"}
                  value={value}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  min={0}
                  max={250}
                  color="success"
                />
              </Box>
            </div>
            <div className="rangePrice">
              <p className="rangePrice-p">Price:</p>
              <span>{value[0]}$</span>
              <hr />
              <span>{value[1]}$</span>
            </div>
            <button onClick={filterHandler} className="filter">
              Filter
            </button>
          </div>
          <div className="leftCategory-size">
            <img src={superSale} alt="" />
          </div>
        </div>
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
            {filterProduct.map((product, i) => {
              return (
                <ProdItem
                  key={i}
                  cartItem={cartItem}
                  {...product}
                  addKorzina={addKorzina}
                />
              );
            })}
          </div>
        )}
        <div className="pagination">
          <Stack sx={{ color: "grey.500" }} spacing={2}>
            <Pagination count={10} />
          </Stack>
        </div>
      </div>
    </div>
  );
}

export default Prod;

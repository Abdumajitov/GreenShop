import React, { useEffect, useState } from "react";
import ProdItem from "../../Components/ProductItem/ProdItem";
import {
  updateFilteredData,
  korzinaProd,
} from "../../toolkit/userSlice/productSlice";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import "./Shop.scss";
import useCateHook from "../../Hooks/CategoryHook/CateHook";
import { NavLink, useNavigate } from "react-router-dom";
import Footer from "../../Pages/Navbar/Footer/Footer";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import superSale from "../../assets/ProductImg/Super Sale Banner.png";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function Shop() {
  const navigate = useNavigate();
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

  const { inputHandler3, inputHandler } = useCateHook();

  const [cater, setCater] = useState(false);

  const catFall = () => {
    setCater((prev) => !prev);
  };

  const goProdPage = (prod) => {
    const existing = products.find((item) => item.id === prod.id);
    navigate(`/productItem/${existing.id}`);
  };

  const [page, setPage] = useState(1);
  const [lowPage, setLowPage] = useState(9);
  const handleChange2 = (event, value) => {
    setPage(value);
  };

  const lastIndex = page * lowPage;
  const postPage = lastIndex - lowPage;
  const Pages = Math.ceil(filterProduct.length / lowPage);

  const categ = [
    { category: "House Plants" },
    { category: "Potter Plants" },
    { category: "Seeds" },
    { category: "Small Plants" },
    { category: "Big Plants" },
  ];
  const size = [{ size: "Small" }, { size: "Medium" }, { size: "Large" }];

  const [cateLengh, setCateLengh] = useState([]);
  const [cateSize, setCateSize] = useState([]);
  console.log(cateSize);

  const lenCate = () => {
    const newCateLengh = categ.map((cat) => {
      const newLeng = products.filter((item) => item.category === cat.category);
      return { category: cat.category, length: newLeng.length };
    });
    setCateLengh(newCateLengh);
  };
  const lenCate2 = () => {
    const newCateLengh = size.map((cat) => {
      const newLeng = products.filter((item) => item.size === cat.size);
      return { size: cat.size, length: newLeng.length };
    });
    setCateSize(newCateLengh);
  };

  useEffect(() => {
    lenCate();
    lenCate2();
  }, []);

  return (
    <div className="shop-page">
      <h1 className="shop-h1">Shop</h1>
      <div className="shop-detal">
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
              {cateLengh.map((cat, index) => (
                <div key={index} className="categoryAbzor-cont">
                  <button
                    onClick={inputHandler}
                    name="category"
                    value={cat.category}
                    className="categoryAbzor-p"
                  >
                    {cat.category}
                  </button>
                  <p>({cat.length})</p>
                </div>
              ))}
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
              <div className="size-p">Size</div>
              {cateSize.map((siz, index) => (
                <div key={index} className="categoryAbzor-cont">
                  <button
                    onClick={inputHandler3}
                    name="size"
                    value={siz.size}
                    className="categoryAbzor-p"
                  >
                    {siz.size}
                  </button>
                  <p>({siz.length})</p>
                </div>
              ))}
              <img src={superSale} alt="" />
            </div>
          </div>
        </div>
        <div className="rigtBar">
          <div className="bottom-product">
            {filterProduct.slice(postPage, lastIndex).map((product, i) => {
              return (
                <ProdItem
                  goProdPage={goProdPage}
                  key={i}
                  cartItem={cartItem}
                  {...product}
                  addKorzina={addKorzina}
                />
              );
            })}
          </div>
          <div className="pagination">
            <Stack spacing={2}>
              <Pagination
                color="success"
                count={Pages}
                page={page}
                onChange={handleChange2}
                variant="outlined"
                shape="rounded"
              />
            </Stack>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Shop;

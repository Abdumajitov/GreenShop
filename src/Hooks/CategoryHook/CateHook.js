import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { updateFilteredData, searchDet } from "../../toolkit/userSlice/productSlice"

function CateHook() {

    const dispatch = useDispatch()

    const { products, filterProduct } = useSelector(
        (state) => state.productSlice
    );

    const [inputData, setInputData] = useState({
        category: "all",
    });
    const [inputData2, setInputData2] = useState({
        search: "",
    });
    const [inputData3, setInputData3] = useState({
        size: "all",
    });

    useEffect(() => {
        filterData();
    }, [
        inputData.category,
    ]);
    useEffect(() => {
        filterData2()
    }, [
        inputData2.search,
    ]);
    useEffect(() => {
        filterData3()
    }, [
        inputData3.size,
    ]);

    const filterData = () => {
        let tempData = [...products];
        if (inputData.category !== "all") {
            tempData = tempData.filter(
                (shoe) => shoe.category === inputData.category
            );
        }
        dispatch(updateFilteredData(tempData))
    };

    const filterData2 = () => {
        let tempData = [];
        if (inputData2.search) {
            tempData = [...products]
            tempData = tempData.filter((shoe) =>
                shoe.name.toLowerCase().includes(inputData2.search)
            );
        }

        dispatch(searchDet(tempData))
    };

    const filterData3 = () => {
        let tempData = [...products];
        if (inputData3.size !== "all") {
            tempData = tempData.filter(
                (shoe) => shoe.size === inputData3.size
            );
        }
        dispatch(updateFilteredData(tempData))
    };


    const inputHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputData((prev) => {
            return { ...prev, [name]: value };
        });
    };
    const inputHandler2 = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputData2((prev) => {
            return { ...prev, [name]: value };
        });
    };
    const inputHandler3 = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputData3((prev) => {
            return { ...prev, [name]: value };
        });
    };

    return { inputData, inputHandler, setInputData, inputHandler2, inputHandler3 };
}

export default CateHook;

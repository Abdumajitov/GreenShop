import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { updateFilteredData } from "../../toolkit/userSlice/productSlice"

function CateHook() {

    const dsipatch = useDispatch()

    const { products, filterProduct } = useSelector(
        (state) => state.productSlice
    );

    const [inputData, setInputData] = useState({
        category: "all",
        search: "",
    });

    useEffect(() => {
        filterData();
    }, [
        inputData.category,
        inputData.search,
    ]);

    const filterData = () => {
        let tempData = [...products];
        tempData = tempData.filter((shoe) =>
            shoe.name.toLowerCase().includes(inputData.search)
        );
        if (inputData.category !== "all") {
            tempData = tempData.filter(
                (shoe) => shoe.category === inputData.category
            );
        }
        dsipatch(updateFilteredData(tempData))
    };


    const inputHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setInputData((prev) => {
            return { ...prev, [name]: value };
        });

    };

    return { inputData, inputHandler };
}

export default CateHook;

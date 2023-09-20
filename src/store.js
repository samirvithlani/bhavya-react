import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./redux/ProductSlice";

export const store = configureStore({
    // reducer: {
        reducer:{
            products:productReducer
        }
})
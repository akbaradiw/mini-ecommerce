import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/productSlice";
import handleReducer from "./features/handleSlice";

export const store = configureStore({
    reducer: {
        product: productReducer,
        handle: handleReducer
        }
})
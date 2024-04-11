import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/productSlice";
import handleReducer from "./features/handleSlice";
import instrumentReducer from "./features/instrumentSlice";
import menuReducer from "./features/menuSlice";


export const store = configureStore({
    reducer: {
        product: productReducer,
        handle: handleReducer,
        instrument: instrumentReducer,
        menu: menuReducer
        }
})
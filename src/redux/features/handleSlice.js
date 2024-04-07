import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    loading : false,
    error: "",
    item: [],
}

export const handleSlice = createSlice({
    name: "handle",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.item.push(action.payload)
        }
    },
})


export const { addToCart } = handleSlice.actions
export default handleSlice.reducer
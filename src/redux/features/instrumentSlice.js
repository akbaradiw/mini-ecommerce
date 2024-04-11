import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { instrumentData } from "../../data/instrumentData";

export const getInstrument = createAsyncThunk(
    "instrument/getInstrument", async () => {
        try {
            const res = await axios.get(instrumentData)
            return res.data
            console.log (res.data)
        } catch (error) {
            console.log(error)
            return error.res.data
        }
    }
)

const initialState = {
    instruments: [],
    loading : false,
    error: "",
}

const instrumentSlice = createSlice({
    name: "instrument",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getInstrument.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getInstrument.fulfilled, (state, action) => {
            state.loading = false
            state.instruments = action.payload
            state.error = ""
        })
        builder.addCase(getInstrument.rejected, (state, action) => {
            state.loading = false
            state.instruments = []
            state.error = action.error.message
        })
    }
})

export default instrumentSlice.reducer
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IItems } from "./types";
import { TItem } from "./types";

export const fetching = createAsyncThunk<IItems[], undefined>(
    "items/fetching",
    async function (_, { rejectWithValue }) {
        let res = await fetch(
            "https://6480a069f061e6ec4d499bd9.mockapi.io/items"
        );
        if (!res.ok) {
            return rejectWithValue("Server Error!");
        }
        let data = await res.json();
        localStorage.setItem("items", JSON.stringify(data));
        return JSON.parse(localStorage.getItem("items") || "");
    }
);
let initialState: TItem = {
    items: [],
};

const fetchingSlice = createSlice({
    name: "items",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetching.fulfilled, (state, action) => {
            state.items = action.payload;
        });
    },
});

export default fetchingSlice.reducer;

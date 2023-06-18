import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setItems } from "./itemsSlice";
import { AppDispatch, RootStore } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { IItems } from "../../components/PizzaBlock/types";

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
        return JSON.parse(localStorage.getItem('items') || '')
    }
);
interface item  {
    items: IItems[]
}
let initialState: item = {
    items: []
}

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

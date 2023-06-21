import { createSlice } from "@reduxjs/toolkit";
import { initState } from "./types";

const initialState: initState = {
    value: "",
};

const searchInput = createSlice({
    initialState,
    name: "searchInput",
    reducers: {
        setSearchInput(state, action) {
            state.value = action.payload;
        },
    },
});

export const { setSearchInput } = searchInput.actions;
export default searchInput.reducer;

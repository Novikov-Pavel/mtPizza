import { createSlice } from "@reduxjs/toolkit";
import { initState } from "./types";

const initialState: initState = {
    pageNumber: 1,
};

const pageSlice = createSlice({
    initialState,
    name: "page",
    reducers: {
        setPage(state, action) {
            state.pageNumber = action.payload;
        },
    },
});

export const { setPage } = pageSlice.actions;
export default pageSlice.reducer;

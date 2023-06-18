import { createSlice } from "@reduxjs/toolkit";
// import { TCategories } from "../../components/Categories/types";

const initialState = {
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

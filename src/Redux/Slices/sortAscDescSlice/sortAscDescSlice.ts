import { createSlice } from "@reduxjs/toolkit";
import { initState } from "./types";

const initialState: initState = {
    number: 0,
};

const sortAscDesc = createSlice({
    initialState,
    name: "sortAscDesc",
    reducers: {
        setSortAscDesc(state, action) {
            state.number = action.payload;
        },
    },
});

export const { setSortAscDesc } = sortAscDesc.actions;
export default sortAscDesc.reducer;

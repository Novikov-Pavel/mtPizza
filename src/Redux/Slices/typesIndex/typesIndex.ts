import { createSlice } from "@reduxjs/toolkit";
import { initState } from "./types";

export const initialState = {
    value: 0,
};

let typesIndex = createSlice({
    initialState,
    name: "typesIndex",
    reducers: {
        setTypesIndex(state, { payload }) {
            state.value = payload
        },
    },
});

export const { setTypesIndex } = typesIndex.actions;
export default typesIndex.reducer;

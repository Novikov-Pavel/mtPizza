import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initState } from "./types";

let initialState: initState = {
    items: [],
    sum: 0,
};

let basketSlice = createSlice({
    initialState,
    name: "basket",
    reducers: {
        addPizza(state, { payload }) {
            const findItem = state.items.find((e) => e.id === payload.id);
            findItem
                ? findItem.count++
                : state.items.push({
                      ...payload,
                      count: 1,
                  });
        },
        removePizza(state, { payload }: PayloadAction<number>) {
            state.items.filter((e) => e.id !== payload);
        },
        clearBasket(state) {
            state.items = [];
        },
    },
});

export default basketSlice.reducer;
export const { addPizza, removePizza, clearBasket } = basketSlice.actions;

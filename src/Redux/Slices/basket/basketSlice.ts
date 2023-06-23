import { createSlice } from "@reduxjs/toolkit";
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
            const findItem = state.items.find(
                (e) =>
                    e.id === payload.id &&
                    e.price === payload.price &&
                    e.sizes === payload.sizes &&
                    e.types === payload.types
            );
            findItem
                ? findItem.count++
                : state.items.push({
                      ...payload,
                      count: 1,
                  });
        },
        IncPizza(state, { payload }) {
            const findItem = state.items.find(
                (e) =>
                    e.id === payload.id &&
                    e.price === payload.price &&
                    e.sizes === payload.sizes &&
                    e.types === payload.types
            );
            findItem && findItem.count++;
        },
        DecPizza(state, { payload }) {
            const findItem = state.items.find(
                (e) =>
                    e.id === payload.id &&
                    e.price === payload.price &&
                    e.sizes === payload.sizes &&
                    e.types === payload.types
            );
            findItem && findItem?.count > 1
                ? findItem.count--
                : (state.items = state.items.filter(
                      (e) =>
                          e.sizes !== payload.sizes ||
                          e.types !== payload.types ||
                          e.price !== payload.price ||
                          e.id !== payload.id
                  ));
        },
        removePizza(state, { payload }) {
            state.items = state.items.filter(
                (e) =>
                    e.sizes !== payload.sizes ||
                    e.types !== payload.types ||
                    e.price !== payload.price ||
                    e.id !== payload.id
            );
        },
        clearBasket(state) {
            state.items = [];
        },
    },
});

export default basketSlice.reducer;
export const { addPizza, removePizza, clearBasket, IncPizza, DecPizza } =
    basketSlice.actions;

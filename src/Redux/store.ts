import { configureStore } from "@reduxjs/toolkit";
import activeCategory from "./Slices/activeCategorySlice/activeCategorySlice";
import page from "./Slices/pageSlice/pageSlice";
import searchInput from "./Slices/searchInputSlice/searchInputSlice";
import sortPriceNamePopul from "./Slices/sortPriceNamePopulSlice/sortPriceNamePopulSlice";
import sortAscDesc from "./Slices/sortAscDescSlice/sortAscDescSlice";
import optionItem from "./Slices/optionItemSlice/optionItemSlice";
import fetching from "./Slices/fetchingSlice/fetchingSlice";
import sortPriceNamePopulStatus from "./Slices/sortPriceNamePopulStatusSlice/sortPriceNamePopulStatusSlice";
import sortAscDescStatus from "./Slices/sortAscDescStatusSlice/sortAscDescStatusSlice";
import basket from "./Slices/basket/basketSlice";

export const store = configureStore({
    reducer: {
        activeCategory,
        page,
        searchInput,
        sortPriceNamePopul,
        sortAscDesc,
        optionItem,
        fetching,
        sortPriceNamePopulStatus,
        sortAscDescStatus,
        basket
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootStore = ReturnType<typeof store.getState>;

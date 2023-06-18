import { configureStore } from "@reduxjs/toolkit";
import activeCategory from "./Slices/activeCategorySlice";
import page from "./Slices/pageSlice";
import categories from "./Slices/categoriesSlice";
import searchInput from "./Slices/searchInputSlice";
import itemsPerPage from "./Slices/itemsPerPageSlice";
import sortPriceNamePopul from "./Slices/sortPriceNamePopulSlice";
import sortAscDesc from "./Slices/sortAscDescSlice";
import optionItem from './Slices/optionItemSlice'
import fetching from "./Slices/fetchingSlice";

export const store = configureStore({
    reducer: {
        activeCategory,
        page,
        categories,
        searchInput,
        itemsPerPage,
        sortPriceNamePopul,
        sortAscDesc,
        optionItem,
        fetching
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootStore = ReturnType<typeof store.getState>;

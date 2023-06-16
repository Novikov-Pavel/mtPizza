export interface IItems {
    imageUrl: string;
    title: string;
    types: number[];
    sizes: number[];
    price: number;
    category: number;
    rating: number;
}

export type TSort = {
    sortAscDesc: number;
    setSortAscDesc: React.Dispatch<React.SetStateAction<number>>;
    sortPriceNamePopul: number;
    setSortPriceNamePopul: React.Dispatch<React.SetStateAction<number>>;
    optionItem: string;
    setOptionItem: React.Dispatch<React.SetStateAction<string>>;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    itemsPerPage: string[]
};

export type TPagination = {
    page?: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    optionItem: string;
    items: IItems[];
    activeCategory: number;
};

export type TCategories = {
    setPage: React.Dispatch<React.SetStateAction<number>>;
    setActiveCategory: React.Dispatch<React.SetStateAction<number>>;
    activeCategory: number;
    categories: readonly string[];
};

export type TCategoriesArray = readonly [string, string, string, string, string, string]
export type TItemsPerPage = [string, string, string]
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
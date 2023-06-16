import { IItems } from "../PizzaBlock/types";

export type TPagination = {
    page?: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    optionItem: string;
    items: IItems[];
    activeCategory: number;
};
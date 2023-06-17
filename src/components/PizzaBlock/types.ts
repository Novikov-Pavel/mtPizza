export interface IItems {
    imageUrl: string;
    title: string;
    types: number[];
    sizes: number[];
    price: number;
    category: number;
    rating: number;
}
export type TItems = {
    items: IItems[];
    setItems: React.Dispatch<React.SetStateAction<IItems[]>>
};

export type TOptionItem = {
    optionItem: string;
    setOptionItem: React.Dispatch<React.SetStateAction<string>>
};
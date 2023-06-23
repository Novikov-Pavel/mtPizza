export interface IItems {
    id: number
    imageUrl: string;
    title: string;
    types: number[];
    sizes: number[];
    price: number[];
    category: number;
    rating: number;
    count?: number
}

export type TItem = {
    items: IItems[];
};

export type initState = {
    items: IPizza[],
    sum: number,
}

export interface IPizza {
    id?: number,
    title?: string,
    price: number,
    imageUrl?: string,
    types?: string,
    sizes?: string
    count: number
}
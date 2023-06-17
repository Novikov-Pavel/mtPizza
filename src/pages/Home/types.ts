export type TCategoriesArray = readonly [string, string, string, string, string, string]
export type TItemsPerPage = {
    itemsPerPage : string[]
}
export type TPage = {
    page: number,
    setPage: React.Dispatch<React.SetStateAction<number>>
}
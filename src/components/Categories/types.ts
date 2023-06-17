export type TCategories = {
    page: number
    setPage: React.Dispatch<React.SetStateAction<number>>;
    activeCategory: number;
    setActiveCategory: React.Dispatch<React.SetStateAction<number>>;
    categories: readonly string[];
};

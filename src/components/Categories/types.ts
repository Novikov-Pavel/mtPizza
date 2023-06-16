export type TCategories = {
    setPage: React.Dispatch<React.SetStateAction<number>>;
    setActiveCategory: React.Dispatch<React.SetStateAction<number>>;
    activeCategory: number;
    categories: readonly string[];
};

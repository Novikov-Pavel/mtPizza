import React from 'react'
import Home from './pages/Home'
import Header from './components/Header'
import Basket from './pages/Basket'
import NotFound from './pages/NotFound'
import { Route, Routes } from 'react-router-dom'
import { basket, main } from './const'
import { TSearchInput } from './components/Search/types'
import { TCategoriesArray, TItemsPerPage, TPage } from './pages/Home/types'
import { TCategories } from './components/Categories/types'
import { IItems, TItems, TOptionItem } from './components/PizzaBlock/types'
import { TSort } from './components/Sort/types'

let defaultValue = {
    searchInput: '',
    setSearchInput: (): void => {
        throw new Error('error');
    },
    page: 1,
    setPage: (): void => {
        throw new Error('error');
    },
    activeCategory: 0,
    setActiveCategory: (): void => {
        throw new Error('error');
    },
    categories: [],
    items: [],
    setItems: (): void => {
        throw new Error('error');
    },
    optionItem: '',
    setOptionItem: (): void => {
        throw new Error('error');
    },
    itemsPerPage: [],
    sortPriceNamePopul: 0,
    setSortPriceNamePopul: (): void => {
        throw new Error('error');
    },
    sortAscDesc: 0,
    setSortAscDesc: (): void => {
        throw new Error('error');
    },
}

export let search =
    React.createContext<TSearchInput & TCategories & TItems & TOptionItem & TItemsPerPage & TPage & TSort>(defaultValue);

const App: React.FC = () => {

    const [searchInput, setSearchInput] = React.useState<string>('')
    const [page, setPage] = React.useState<number>(1)
    const [activeCategory, setActiveCategory] = React.useState<number>(0)
    const categories: TCategoriesArray = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']
    const [items, setItems] = React.useState<IItems[]>([])
    const itemsPerPage = ['4', '8', 'все']
    const [sortPriceNamePopul, setSortPriceNamePopul] = React.useState<number>(0)
    const [sortAscDesc, setSortAscDesc] = React.useState<number>(0)
    const [optionItem, setOptionItem] = React.useState<string>(itemsPerPage[0])

    return (
        <div className="wrapper">
            <search.Provider value={{
                searchInput,
                setSearchInput,
                page,
                setPage,
                activeCategory,
                setActiveCategory,
                categories,
                items,
                setItems,
                optionItem,
                setOptionItem,
                itemsPerPage,
                sortPriceNamePopul,
                setSortPriceNamePopul,
                sortAscDesc,
                setSortAscDesc
            }} >
                <Header />
                <Routes>
                    <Route path={main} element={<Home />} />
                    <Route path={basket} element={<Basket />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </search.Provider>
        </div>
    )
}

export default App
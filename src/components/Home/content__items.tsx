import React from 'react'
import PizzaBlock from '../../components/PizzaBlock'
import SkeletonPizzaBlock from '../../components/PizzaBlock/SkeletonPizzaBlock'
import { useSelector } from 'react-redux'
import { RootStore } from '../../Redux/store'
import '../../SASS/app.scss'

let Content__items = () => {

    const activeCategory = useSelector((store: RootStore) => store.activeCategory.value)
    const page = useSelector((store: RootStore) => store.page.pageNumber)
    const sortPriceNamePopul = useSelector((store: RootStore) => store.sortPriceNamePopul.number)
    const sortAscDesc = useSelector((store: RootStore) => store.sortAscDesc.number)
    const optionItem = useSelector((store: RootStore) => store.optionItem.value)
    const searchInput = useSelector((store: RootStore) => store.searchInput.value)
    const items = useSelector((store: RootStore) => store.fetching.items)

    let startItem = page * (+optionItem || 100) - (+optionItem || 100)
    let endItem = startItem + (+optionItem || 100)

    return (
        <>{items.length !== 0
                ? items
                    .filter(obj => obj.title.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase()))
                    .filter(obj => obj.category === (activeCategory || obj.category))
                    .sort((a, b) =>
                        //  сортировка по популярности
                        sortPriceNamePopul === 0 && sortAscDesc === 0
                            ? (a.rating - b.rating)
                            : sortPriceNamePopul === 0 && sortAscDesc === 1
                                ? (b.rating - a.rating)
                                //  сортировка по цене
                                : sortPriceNamePopul === 1 && sortAscDesc === 0
                                    ? (Math.min(...a.price) - Math.min(...b.price))
                                    : sortPriceNamePopul === 1 && sortAscDesc === 1
                                        ? (Math.min(...b.price) - Math.min(...a.price))
                                        //  сортировка по алфавиту
                                        : sortPriceNamePopul === 2 && sortAscDesc === 0
                                            ? a.title.localeCompare(b.title)
                                            : sortPriceNamePopul === 2 && sortAscDesc === 1
                                                ? b.title.localeCompare(a.title)
                                                : b.title.localeCompare(a.title)
                    )
                    .slice(startItem, endItem)
                    .map(obj =>
                        // фильтр по категориям
                        obj.category === (activeCategory || obj.category)
                        &&
                        <PizzaBlock {...obj} />
                    )
                : [...Array(optionItem === 'все'
                    ? items.length || 100
                    : +optionItem)].map(e => <SkeletonPizzaBlock key={e} />)
        }</>
    )
}

export default Content__items
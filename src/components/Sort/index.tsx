import React from 'react'
import Dropdown from 'react-dropdown'
import sortUp from '../../assets/img/sort.svg'
import { AppDispatch, RootStore } from '../../Redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { setOptionItem } from '../../Redux/Slices/optionItemSlice/optionItemSlice'
import { setPage } from '../../Redux/Slices/pageSlice/pageSlice'
import { setSortAscDesc } from '../../Redux/Slices/sortAscDescSlice/sortAscDescSlice'
import { setSortPriceNamePopul } from '../../Redux/Slices/sortPriceNamePopulSlice/sortPriceNamePopulSlice'
import { setSortAscDescStatus } from '../../Redux/Slices/sortAscDescStatusSlice/sortAscDescStatusSlice'
import { setSortPriceNamePopulStatus } from '../../Redux/Slices/sortPriceNamePopulStatusSlice/sortPriceNamePopulStatusSlice'
import "react-dropdown/style.css"

let Sort: React.FC = () => {
    const sortRef = React.useRef<HTMLDivElement>(null)
    const sortPriceNamePopulMenu = ["популярности", "цене", "алфавиту"] as const
    const sortAscDescMenu = ["возрастанию", "убыванию"] as const
    const itemsPerPage: string[] = ["4", "8", "все"];

    const dispatch: AppDispatch = useDispatch()
    const sortPriceNamePopul = useSelector((store: RootStore) => store.sortPriceNamePopul.number)
    const sortAscDesc = useSelector((store: RootStore) => store.sortAscDesc.number)
    const optionItem = useSelector((store: RootStore) => store.optionItem.value)
    const sortPriceNamePopulStatus = useSelector((store: RootStore) => store.sortPriceNamePopulStatus.value)
    const sortAscDescStatus = useSelector((store: RootStore) => store.sortAscDescStatus.value)

    const closeSorting = () => {
        dispatch(setSortPriceNamePopulStatus(false))
        dispatch(setSortAscDescStatus(false))
    }
    const onClickSortPriceNamePopul = (i: number) => {
        dispatch(setSortPriceNamePopul(i))
        dispatch(setSortAscDesc(0))
        closeSorting()
    }
    const onClickSortAscDesc = (i: number) => {
        dispatch(setSortAscDesc(i))
        closeSorting()
    }

    React.useEffect(() => {
        const clickOutside = (e: any) => {
            !e.composedPath().includes(sortRef.current) && closeSorting()
        }
        document.body.addEventListener('click', clickOutside)
        return () => document.body.removeEventListener('click', clickOutside)
    }, [])

    return (
        <div ref={sortRef} className="sort">
            <div
                className={!sortPriceNamePopulStatus && !sortAscDescStatus
                    ? "sort__label sort__label--rotate"
                    : "sort__label"}
            >
                <img src={sortUp} alt='sort-up' />
                <b>Сортировка по:</b>
                {/* сортировка по популярности, цене или имени */}
                <span onClick={() => {
                    dispatch(setSortPriceNamePopulStatus(!sortPriceNamePopulStatus))
                    dispatch(setSortAscDescStatus(false))
                }
                }>{sortPriceNamePopulMenu[sortPriceNamePopul]}
                </span>
                и
                {/* сортировка по возрастанию или убыванию */}
                <span onClick={() => {
                    dispatch(setSortAscDescStatus(!sortAscDescStatus))
                    dispatch(setSortPriceNamePopulStatus(false))
                }
                }>{sortAscDescMenu[sortAscDesc]}
                </span>
                {/* выбор кол-ва элементов на странице */}
                <Dropdown
                    value={optionItem}
                    options={itemsPerPage}
                    onChange={(e) => {
                        dispatch(setOptionItem(e.value))
                        dispatch(setPage(1))
                    }}
                    onFocus={() => {
                        dispatch(setSortPriceNamePopulStatus(false))
                        dispatch(setSortAscDescStatus(false))
                    }}
                />
            </div>
            <div className="sort__popup">
                <ul>
                    {/* выбор сортировки по популярности, цене или имени из dropdown */}
                    {sortPriceNamePopulStatus && sortPriceNamePopulMenu.map((e, i) => (
                        <li
                            key={e}
                            className={sortPriceNamePopul === i ? 'active' : undefined}
                            onClick={() => onClickSortPriceNamePopul(i)}
                        >{e}</li>))}
                    {/* выбор сортировки по возрастанию или убыванию из dropdown */}
                    {sortAscDescStatus && sortAscDescMenu.map((e, i) => (
                        <li
                            key={e}
                            className={sortAscDesc === i ? 'active' : undefined}
                            onClick={() => onClickSortAscDesc(i)}
                        >{e}</li>))}
                </ul>
            </div>
        </div>
    )
}

export default Sort
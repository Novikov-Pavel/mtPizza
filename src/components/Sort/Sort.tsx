import React from 'react'
import Dropdown from 'react-dropdown'
import sortUp from '../../assets/img/sort.svg'
import "react-dropdown/style.css"
import { AppDispatch, RootStore } from '../../Redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { setOptionItem } from '../../Redux/Slices/optionItemSlice'
import { setPage } from '../../Redux/Slices/pageSlice'
import { setSortAscDesc } from '../../Redux/Slices/sortAscDescSlice'
import { setSortPriceNamePopul } from '../../Redux/Slices/sortPriceNamePopulSlice'

function Sort() {

    const dispatch: AppDispatch = useDispatch()
    const sortPriceNamePopul = useSelector((store: RootStore) => store.sortPriceNamePopul.number)
    const sortAscDesc = useSelector((store: RootStore) => store.sortAscDesc.number)
    const optionItem = useSelector((store: RootStore) => store.optionItem.value)
    const itemsPerPage = useSelector((store: RootStore) => store.itemsPerPage)

    const [sortPriceNamePopulStatus, setSortPriceNamePopulStatus] = React.useState<boolean>(false)
    const [sortAscDescStatus, setSortAscDescStatus] = React.useState<boolean>(false)
    const sortPriceNamePopulMenu = ["популярности", "цене", "алфавиту"] as const
    const sortAscDescMenu: string[] = ["возрастанию", "убыванию"]

    const onClickSortPriceNamePopul = (i: number) => {
        dispatch(setSortPriceNamePopul(i))
        dispatch(setSortAscDesc(0))
        setSortPriceNamePopulStatus(false)
        setSortAscDescStatus(false)
    }
    const onClickSortAscDesc = (i: number) => {
        dispatch(setSortAscDesc(i))
        setSortPriceNamePopulStatus(false)
        setSortAscDescStatus(false)
    }

    return (
        <div className="sort">
            <div
                className={!sortPriceNamePopulStatus && !sortAscDescStatus
                    ? "sort__label sort__label--rotate"
                    : "sort__label"}
            >
                <img src={sortUp} alt='sort-up' />
                <b>Сортировка по:</b>
                {/* сортировка по популярности, цене или имени */}
                <span onClick={() => {
                    setSortPriceNamePopulStatus(!sortPriceNamePopulStatus)
                    setSortAscDescStatus(false)
                }
                }>{sortPriceNamePopulMenu[sortPriceNamePopul]}
                </span>
                и
                {/* сортировка по возрастанию или убыванию */}
                <span onClick={() => {
                    setSortAscDescStatus(!sortAscDescStatus)
                    setSortPriceNamePopulStatus(false)
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
                        setSortPriceNamePopulStatus(false)
                        setSortAscDescStatus(false)
                    }}
                />
            </div>
            <div className="sort__popup">
                <ul>
                    {/* выбор сортировки по популярности, цене или имени из дропдауна */}
                    {sortPriceNamePopulStatus && sortPriceNamePopulMenu.map((e, i) => (
                        <li
                            key={e}
                            className={sortPriceNamePopul === i ? 'active' : ''}
                            onClick={() => onClickSortPriceNamePopul(i)}
                        >{e}</li>))}
                    {/* выбор сортировки по возрастанию или убыванию из дропдауна */}
                    {sortAscDescStatus && sortAscDescMenu.map((e, i) => (
                        <li
                            key={e}
                            className={sortAscDesc === i ? 'active' : ''}
                            onClick={() => onClickSortAscDesc(i)}
                        >{e}</li>))}
                </ul>
            </div>
        </div>
    )
}

export default Sort
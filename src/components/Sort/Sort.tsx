import React from 'react'
import Dropdown from 'react-dropdown'
import sortUp from '../../assets/img/sort.svg'
import { TSort } from './types'
import "react-dropdown/style.css"

function Sort({
    sortPriceNamePopul,
    setSortPriceNamePopul,
    sortAscDesc,
    setSortAscDesc,
    optionItem,
    setOptionItem,
    setPage,
    itemsPerPage
}: TSort) {

    const [sortPriceNamePopulStatus, setSortPriceNamePopulStatus] = React.useState<boolean>(false)
    const [sortAscDescStatus, setSortAscDescStatus] = React.useState<boolean>(false)
    const sortPriceNamePopulMenu = ["популярности", "цене", "алфавиту"] as const
    const sortAscDescMenu: string[] = ["возрастанию", "убыванию"]

    const onClickSortPriceNamePopul = (i: number) => {
        setSortPriceNamePopul(i)
        setSortAscDesc(0)
        setSortPriceNamePopulStatus(false)
        setSortAscDescStatus(false)
    }
    const onClickSortAscDesc = (i: number) => {
        setSortAscDesc(i)
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
                        setOptionItem(e.value)
                        setPage(1)
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
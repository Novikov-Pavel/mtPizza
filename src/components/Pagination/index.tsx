import React from 'react'
import { TPagination } from './types'
import { TSearchInput } from '../Search/types'

function Pagination(
    {
        page,
        setPage,
        items,
        optionItem,
        activeCategory,
        searchInput
    }: TPagination & TSearchInput) {

    let maxPage: number = Math.ceil(items
        .filter(e => e.title.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase()))
        .length / (+optionItem || 100))
    const pages: number[] = [...Array(maxPage)].map((_, i) => ++i)

    return (
        <>
            {items.filter(obj => obj.category === (activeCategory || obj.category)).length <= +optionItem
                && items.length !== 0
                ? <li className='pagination__page--active pagination__page'>1</li>
                : pages.map(e =>
                    <li
                        className={page === e
                            ? 'pagination__page--active pagination__page'
                            : 'pagination__page'}
                        key={e}
                        onClick={() => {
                            setPage(e)
                            window.scrollTo(0, 0)
                        }}
                    >{e}</li>)
            }
        </>
    )
}

export default Pagination
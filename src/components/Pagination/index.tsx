import React from 'react'
import { TPagination } from '../../types'
import SkeletonPagination from './SkeletonPagination'

function Pagination({ page, setPage, items, optionItem, activeCategory }: TPagination) {
    let maxPage: number = Math.ceil(items.length / (+optionItem || 100))
    const pages: number[] = [...Array(maxPage).keys()].map((_, i) => ++i)

    return (
        <>
            {items.filter(obj => obj.category === (activeCategory || obj.category)).length <= +optionItem
                && items.length !== 0
                ? <li className='pagination__page--active pagination__page'>1</li>
                : items.length === 0
                    ? <SkeletonPagination />
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
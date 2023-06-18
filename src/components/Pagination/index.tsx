import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootStore } from '../../Redux/store'
import { setPage } from '../../Redux/Slices/pageSlice'

let Pagination: React.FC = () => {

    const items = useSelector((store: RootStore) => store.fetching.items)
    const searchInput = useSelector((store: RootStore) => store.searchInput.value)
    const optionItem = useSelector((store: RootStore) => store.optionItem.value)
    console.log(optionItem);
    
    const activeCategory = useSelector((store: RootStore) => store.activeCategory.value)
    const page = useSelector((store: RootStore) => store.page.pageNumber)
    const dispatch: AppDispatch = useDispatch()
    
    let maxPage: number = Math.ceil(items
        .filter(e => e.title.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase()))
        .filter(e => e.category === (+activeCategory || e.category))
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
                            dispatch(setPage(e))
                            window.scrollTo(0, 0)
                        }}
                    >{e}</li>)
            }
        </>
    )
}

export default Pagination
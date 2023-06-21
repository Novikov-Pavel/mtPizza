import React from 'react'
import { AppDispatch, RootStore } from '../../Redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveCategory } from '../../Redux/Slices/activeCategorySlice/activeCategorySlice'
import { setPage } from '../../Redux/Slices/pageSlice/pageSlice'

function Categories() {

    const dispatch: AppDispatch = useDispatch()
    const activeCategory = useSelector((store: RootStore) => store.activeCategory.value)
    const categories = ["Все", "Мясные", "Вегетарианские", "Гриль", "Острые", "Закрытые"] as const

    return (
        <div className="categories" >
            <ul>
                {categories.map((e, i) => (
                    <li
                        key={e}
                        className={activeCategory === i ? 'active' : undefined}
                        onClick={() => {
                            dispatch(setActiveCategory(i))
                            dispatch(setPage(1))
                        }}
                    >{e}</li>
                ))}
            </ul>
        </div>
    )
}

export default Categories
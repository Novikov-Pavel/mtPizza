import React from 'react'
import Categories from '../../components/Categories'
import Sort from '../../components/Sort'
import Pagination from '../../components/Pagination'
import SkeletonPagination from '../../components/Pagination/SkeletonPagination'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootStore } from '../../Redux/store'
import { fetching } from '../../Redux/Slices/fetchingSlice/fetchingSlice'
import Content__items from '../../components/Home/content__items'
import '../../SASS/app.scss'

const Home: React.FC = () => {

  const categories = ["Все", "Мясные", "Вегетарианские", "Гриль", "Острые", "Закрытые"] as const
  const dispatch: AppDispatch = useDispatch()
  const activeCategory = useSelector((store: RootStore) => store.activeCategory.value)
  const optionItem = useSelector((store: RootStore) => store.optionItem.value)
  const items = useSelector((store: RootStore) => store.fetching.items)
  const searchInput = useSelector((store: RootStore) => store.searchInput.value)

  // достаём из локального хранилища данные и рендерим пиццы на странице

  React.useEffect(() => {
    dispatch(fetching())
  }, [optionItem, searchInput, dispatch])

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories />
          <Sort />
        </div>
        <h2 className="content__title">{categories[activeCategory]} пиццы</h2>
        <div className="content__items">
          <Content__items />
        </div>
        <ul className='pagination'>
          {items.length === 0
            ? <SkeletonPagination />
            : <Pagination />
          }
        </ul>
      </div>
    </div >
  )
}

export default Home
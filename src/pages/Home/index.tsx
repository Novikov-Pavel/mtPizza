import React from 'react'
import Categories from '../../components/Categories'
import Sort from '../../components/Sort/Sort'
import PizzaBlock from '../../components/PizzaBlock'
import Pagination from '../../components/Pagination'
import SkeletonPizzaBlock from '../../components/PizzaBlock/SkeletonPizzaBlock'
import SkeletonPagination from '../../components/Pagination/SkeletonPagination'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootStore } from '../../Redux/store'
import { fetching } from '../../Redux/Slices/fetchingSlice'
import '../../SASS/app.scss'

const Home: React.FC = () => {

  const dispatch: AppDispatch = useDispatch()
  const categories = useSelector((store: RootStore) => store.categories.category)
  const activeCategory = useSelector((store: RootStore) => store.activeCategory.value)
  const page = useSelector((store: RootStore) => store.page.pageNumber)
  const sortPriceNamePopul = useSelector((store: RootStore) => store.sortPriceNamePopul.number)
  const sortAscDesc = useSelector((store: RootStore) => store.sortAscDesc.number)
  const optionItem = useSelector((store: RootStore) => store.optionItem.value)
  const items = useSelector((store: RootStore) => store.fetching.items)
  const searchInput = useSelector((store: RootStore) => store.searchInput.value)

  let startItem = page * (+optionItem || 100) - (+optionItem || 100)
  let endItem = startItem + (+optionItem || 100)

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
          {items.length !== 0
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
                      ? (a.price - b.price)
                      : sortPriceNamePopul === 1 && sortAscDesc === 1
                        ? (b.price - a.price)
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
          }
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
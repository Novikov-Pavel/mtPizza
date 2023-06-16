import React from 'react'
import Categories from '../../components/Categories'
import Sort from '../../components/Sort/Sort'
import PizzaBlock from '../../components/PizzaBlock'
import SkeletonPizzaBlock from '../../components/PizzaBlock/SkeletonPizzaBlock'
import Pagination from '../../components/Pagination'
import { IItems } from '../../components/PizzaBlock/types'
import { TCategoriesArray, TItemsPerPage } from './types'
import { TSearchInput } from '../../components/Search/types'
import '../../SASS/app.scss'
import SkeletonPagination from '../../components/Pagination/SkeletonPagination'

const Home = ({ searchInput, setSearchInput }: TSearchInput) => {

  const [items, setItems] = React.useState<IItems[]>([])
  const [page, setPage] = React.useState<number>(1)
  const [activeCategory, setActiveCategory] = React.useState<number>(0)
  const [sortPriceNamePopul, setSortPriceNamePopul] = React.useState<number>(0)
  const [sortAscDesc, setSortAscDesc] = React.useState<number>(0)
  const categories: TCategoriesArray = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']
  const itemsPerPage: TItemsPerPage = ['4', '8', 'все']

  const [optionItem, setOptionItem] = React.useState<string>(itemsPerPage[0])
  let startItem = page * (+optionItem || 100) - (+optionItem || 100)
  let endItem = startItem + (+optionItem || 100)

  // получение массива объектов пицц и запись их в локальное хранилище
  async function fetching() {
    try {
      let res = await fetch('https://6480a069f061e6ec4d499bd9.mockapi.io/items')
      if (res.ok) {
        let data = await res.json()
        localStorage.setItem('items', JSON.stringify(data))
        setItems(JSON.parse(localStorage.getItem('items') || ''))
      }
    } catch (error) {
      console.error('Возникла ошибка')
      localStorage.clear()
    }
  }

  // достаём из локального хранилища данные и рендерим пиццы на странице

  React.useEffect(() => { fetching() }, [optionItem, searchInput])

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories
            setActiveCategory={setActiveCategory}
            activeCategory={activeCategory}
            categories={categories}
            setPage={setPage}
          />
          <Sort
            sortPriceNamePopul={sortPriceNamePopul}
            setSortPriceNamePopul={setSortPriceNamePopul}
            sortAscDesc={sortAscDesc}
            setSortAscDesc={setSortAscDesc}
            optionItem={optionItem}
            setOptionItem={setOptionItem}
            setPage={setPage}
            itemsPerPage={itemsPerPage}
          />
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
            : <Pagination
              page={page}
              setPage={setPage}
              items={items}
              optionItem={optionItem}
              activeCategory={activeCategory}
              searchInput={searchInput}
              setSearchInput={setSearchInput}
            />
          }
        </ul>
      </div>
    </div >
  )
}

export default Home
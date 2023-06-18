import React from 'react'
import closeInput from '../../assets/img/closeInput.svg'
import searchIcon from '../../assets/img/search-iconsvg.svg'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootStore } from '../../Redux/store'
import { setSearchInput } from '../../Redux/Slices/searchInputSlice'

const Search: React.FC = () => {

    const searchInput = useSelector((store: RootStore) => store.searchInput.value)
    const dispatch: AppDispatch = useDispatch()

    return (
        <form className='container__search'>
            <img src={searchIcon} alt='searchIcon' width={17} />
            <input
                placeholder='Поиск пицц...'
                className='container__search--input'
                value={searchInput}
                onChange={e => dispatch(setSearchInput(e.target.value))}
            />
            {searchInput
                && <img
                    src={closeInput}
                    alt="closeInput"
                    className='container__search--closeInput'
                    onClick={() => dispatch(setSearchInput(''))}
                />
            }
        </form>)
}

export default Search
import React from 'react'
import closeInput from '../../assets/img/closeInput.svg'
import searchIcon from '../../assets/img/search-iconsvg.svg'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootStore } from '../../Redux/store'
import { setSearchInput } from '../../Redux/Slices/searchInputSlice/searchInputSlice'

const Search: React.FC = () => {

    const dispatch: AppDispatch = useDispatch()
    const searchInput = useSelector((store: RootStore) => store.searchInput.value)
    const ref = React.useRef<HTMLInputElement>(null)
    const clearInput = () => {
        dispatch(setSearchInput(''))
        ref.current?.focus()
    }

    return (
        <form className='container__search'>
            <img src={searchIcon} alt='searchIcon' width={17} />
            <input
                ref={ref}
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
                    onClick={() => { clearInput() }}
                />
            }
        </form>)
}

export default Search
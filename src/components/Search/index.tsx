import React from 'react'
import closeInput from '../../assets/img/closeInput.svg'
import { search } from '../../App'

const Search = () => {
    const {searchInput, setSearchInput} = React.useContext(search)
    return (
        <form className='container__search'>
            <input
                placeholder='Поиск пицц...'
                className='container__search--input'
                value={searchInput}
                onChange={e => setSearchInput(e.target.value)}
            />
            {searchInput
                && <img
                    src={closeInput}
                    alt="closeInput"
                    className='container__search--closeInput'
                    onClick={() => setSearchInput('')}
                />
            }
        </form>)
}

export default Search
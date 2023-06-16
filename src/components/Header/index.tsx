import React from 'react'
import pizzaLogo from '../../../public/favicon.png'
import basketImg from '../../assets/img/basketWhite.svg'
import { curr } from '../PizzaBlock'
import { basket, main } from '../../const'
import { Link } from 'react-router-dom'
import { TSearchInput } from '../Search/types'
import Search from '../Search'

function Header({ searchInput, setSearchInput }: TSearchInput) {

    return (
        <div className="header">
            <div className="container">
                <Link to={main}>
                    <div className="header__logo">
                        <img src={pizzaLogo} alt="Pizza logo" />
                        <div>
                            <h1>myPizza</h1>
                            <p>конкурент всем конкурентам &#128513;</p>
                        </div>
                    </div>
                </Link>
                <Search
                    searchInput={searchInput}
                    setSearchInput={setSearchInput}
                />
                <div className="header__cart">
                    <Link to={basket} className="button button--cart">
                        <span>{curr.format(520)}</span>
                        <div className="button__delimiter"></div>
                        <img src={basketImg} alt='корзина' />
                        <span>3</span>
                    </Link>
                    S</div>
            </div>
        </div>
    )
}

export default Header
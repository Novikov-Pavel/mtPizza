import React from 'react'
import Search from '../Search'
import pizzaLogo from '../../../public/favicon.png'
import basketImg from '../../assets/img/basketWhite.svg'
import { Link } from 'react-router-dom'
import { route } from '../../const'
import { currRub } from '../../utils'
import { useSelector } from 'react-redux'
import { RootStore } from '../../Redux/store'

let Header: React.FC = () => {
    const { items, sum } = useSelector((store: RootStore) => store.basket)
    const countItemsInBasket = items.reduce((sum, e) => sum + e.count, 0)
    const sumOfBasket = items.reduce((sum, e) => sum + e.price * e.count, 0)
    return (
        <div className="header">
            <div className="container">
                <Link to={route.main}>
                    <div className="header__logo">
                        <img src={pizzaLogo} alt="Pizza logo" />
                        <div>
                            <h1>myPizza</h1>
                            <p>конкурент всем конкурентам &#128513;</p>
                        </div>
                    </div>
                </Link>
                <Search />
                <div className="header__cart">
                    <Link to={route.basket} className="button button--cart">
                        <span>{currRub.format(sumOfBasket || sum)}</span>
                        <div className="button__delimiter"></div>
                        <img src={basketImg} alt='корзина' />
                        <span>{countItemsInBasket}</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header
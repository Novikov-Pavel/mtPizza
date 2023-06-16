import React from 'react'
import pizzaLogo from '../../public/favicon.png'
import basket from '../assets/img/basketWhite.svg'
import { curr } from './PizzaBlock'
import { cart, main } from '../const'
import { Link } from 'react-router-dom'

function Header() {

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
                <div className="header__cart">
                    <Link to={cart} className="button button--cart">
                        <span>{curr.format(520)}</span>
                        <div className="button__delimiter"></div>
                        <img src={basket} alt='корзина' />
                        <span>3</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header
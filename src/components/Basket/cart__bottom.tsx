import React from 'react'
import backBasketImg from '../../assets/img/backBasket.svg'
import { Link } from 'react-router-dom'
import { route } from '../../const'
import { currRub } from '../../utils'
import { useSelector } from 'react-redux'
import { RootStore } from '../../Redux/store'

let Cart__bottom = () => {
    const items = useSelector((store: RootStore) => store.basket.items)
    const countItemsInBasket = items.reduce((sum, e) => sum + e.count, 0)
    const sumOfBasket = items.reduce((sum, e) => sum + e.price * e.count, 0)

    return (
        <div className="cart__bottom">
            <div className="cart__bottom-details">
                <span> Всего пицц: <strong>{countItemsInBasket}</strong></span>
                <span> Сумма заказа: <strong>{currRub.format(sumOfBasket)}</strong></span>
            </div>
            <div className="cart__bottom-buttons">
                <a href="/" className="button button--outline button--add go-back-btn">
                    <img src={backBasketImg} alt='backBasket' />
                    <Link to={route.main}>Вернуться назад</Link>
                </a>
                <div className="button pay-btn">
                    <span>Оплатить сейчас</span>
                </div>
            </div>
        </div>
    )
}

export default Cart__bottom
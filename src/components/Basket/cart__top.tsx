import React from 'react'
import cart from '../../assets/img/basketBlack.svg'
import backBasketImg from '../../assets/img/backBasket.svg'
import { useDispatch } from 'react-redux'
import { clearBasket } from '../../Redux/Slices/basket/basketSlice'
import { AppDispatch } from '../../Redux/store'

let Cart__top = () => {
    const dispatch: AppDispatch = useDispatch()

    return (
        <div className="cart__top">
            <h2 className="content__title">
                <img src={cart} alt="cart" />
                Корзина
            </h2>
            <div className="cart__clear">
                <img src={backBasketImg} alt='backBasket' />
                <span onClick={() => dispatch(clearBasket())}>
                    Очистить корзину
                </span>
            </div>
        </div>
    )
}

export default Cart__top
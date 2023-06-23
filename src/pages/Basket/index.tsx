import React from 'react'
import cart from '../../assets/img/basketBlack.svg'
import deleteImg from '../../assets/img/delete-svgrepo-com.svg'
import plusImg from '../../assets/img/plus-basket.svg'
import minusImg from '../../assets/img/minus-basket.svg'
import backBasketImg from '../../assets/img/backBasket.svg'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootStore } from '../../Redux/store'
import { DecPizza, IncPizza, clearBasket, removePizza } from '../../Redux/Slices/basket/basketSlice'
import { Link } from 'react-router-dom'
import { route } from '../../const'
import { currRub, smUnit } from '../../utils'

function Cart() {

  const dispatch: AppDispatch = useDispatch()
  const items = useSelector((store: RootStore) => store.basket.items)
  const countItemsInBasket = items.reduce((sum, e) => sum + e.count, 0)
  const sumOfBasket = items.reduce((sum, e) => sum + e.price * e.count, 0)
  console.log(items);
  
  return (
    <div className="wrapper">
      <div className="content">
        <div className="container container--cart">
          <div className="cart">
            <div className="cart__top">
              <h2 className="content__title">
                <img src={cart} alt="cart" />
                Корзина
              </h2>
              <div className="cart__clear">
                <img src={backBasketImg} alt='backBasket' />
                <span onClick={() => dispatch(clearBasket())}>Очистить корзину</span>
              </div>
            </div>
            <div className="content__items">
              {items &&
                items.map(e => (
                  <div className="cart__item">
                    <div className="cart__item-img">
                      <img
                        className="pizza-block__image"
                        src={e?.imageUrl}
                        alt="Pizza"
                      />
                    </div>
                    <div className="cart__item-info">
                      <h3>{e?.title}</h3>
                      <p>{e?.types}, {smUnit(Number(e.sizes))}</p>
                    </div>
                    <div className="cart__item-count">
                      <div className="button button--outline button--circle cart__item-count-minus">
                        <img
                          onClick={() => dispatch(DecPizza(e))}
                          src={minusImg}
                          alt='minus'
                          width={20}
                        />
                      </div>
                      <b>{e?.count}</b>
                      <div className="button button--outline button--circle cart__item-count-plus">
                        <img
                          onClick={() => dispatch(IncPizza(e))}
                          src={plusImg}
                          alt='plus'
                          width={20}
                        />
                      </div>
                    </div>
                    <div className="cart__item-price">
                      <b>{currRub.format(e.price)}</b>
                    </div>
                    <div className="cart__item-remove">
                      <div className="button button--outline button--circle">
                        <img
                          onClick={() => dispatch(removePizza(e))}
                          src={deleteImg}
                          alt='deleteImg'
                          width={20}
                        />
                      </div>
                    </div>
                  </div>
                ))}
            </div>
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
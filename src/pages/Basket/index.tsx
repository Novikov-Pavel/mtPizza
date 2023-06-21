import React from 'react'
import cart from '../../assets/img/basketBlack.svg'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootStore } from '../../Redux/store'
import { clearBasket } from '../../Redux/Slices/basket/basketSlice'
import { Link } from 'react-router-dom'
import { route } from '../../const'
import { currRub } from '../../utils'

function Cart() {

  const dispatch: AppDispatch = useDispatch()
  const items = useSelector((store: RootStore) => store.basket.items)
  const countItemsInBasket = items.reduce((sum, e) => sum + e.count, 0)
  const sumOfBasket = items.reduce((sum, e) => sum + e.price * e.count, 0)

  console.log(items)

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
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.5 5H4.16667H17.5" stroke="#B6B6B6" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z" stroke="#B6B6B6" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M8.33337 9.16667V14.1667" stroke="#B6B6B6" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M11.6666 9.16667V14.1667" stroke="#B6B6B6" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span
                  onClick={() => dispatch(clearBasket())}
                >Очистить корзину</span>
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
                      <p>{e?.types}, {e?.sizes} см.</p>
                    </div>
                    <div className="cart__item-count">
                      <div className="button button--outline button--circle cart__item-count-minus">
                        {/* тут картинка минус */}
                      </div> 
                      <b>{e?.count}</b>
                      <div className="button button--outline button--circle cart__item-count-plus">
                        {/* тут картинка плюс */}
                      </div>
                    </div>
                    <div className="cart__item-price">
                      <b>{currRub.format(e.price)}</b>
                    </div>
                    <div className="cart__item-remove">
                      <div className="button button--outline button--circle">
                        {/* тут картинка удалить позицию */}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <div className="cart__bottom">
              <div className="cart__bottom-details">
                <span> Всего пицц: <b>{countItemsInBasket}</b> </span>
                <span> Сумма заказа: <b>{currRub.format(sumOfBasket)}</b> </span>
              </div>
              <div className="cart__bottom-buttons">
                <a href="/" className="button button--outline button--add go-back-btn">
                  <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 13L1 6.93015L6.86175 1" stroke="#D3D3D3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
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
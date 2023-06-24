import React from 'react'
import Cart__top from '../../components/Basket/cart__top'
import Cart__bottom from '../../components/Basket/cart__bottom'
import Content__items from '../../components/Basket/content__items'

let Cart = () => {
  return (
    <div className="wrapper">
      <div className="content">
        <div className="container container--cart">
          <div className="cart">
            <Cart__top />
            <Content__items />
            <Cart__bottom />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
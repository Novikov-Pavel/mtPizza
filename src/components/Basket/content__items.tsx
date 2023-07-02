import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DecPizza, IncPizza, removePizza } from '../../Redux/Slices/basket/basketSlice'
import { AppDispatch, RootStore } from '../../Redux/store'
import { currRub, smUnit } from '../../utils'
import minusImg from '../../assets/img/minus-basket.svg'
import plusImg from '../../assets/img/plus-basket.svg'
import deleteImg from '../../assets/img/delete-svgrepo-com.svg'

let Content__items = () => {
    const dispatch: AppDispatch = useDispatch()
    const items = useSelector((store: RootStore) => store.basket.items)

    return (
        <div className="content__items">
            {items &&
                items.map(e => (
                    <>
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
                        </div>
                        <div className="cart__item">
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
                    </>
                ))}
        </div>
    )
}

export default Content__items
import React from 'react'
import plus from '../../assets/img/add.svg'
import { IItems } from '../../Redux/Slices/fetchingSlice/types'
import { currRub, smUnit } from '../../utils'
import { AppDispatch, RootStore, store } from '../../Redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { addPizza } from '../../Redux/Slices/basket/basketSlice'

function PizzaBlock({ id, title, types, imageUrl, sizes }: IItems) {

    const dispatch: AppDispatch = useDispatch()
    const itemsById = useSelector((store: RootStore) => store.basket.items.filter(e => e.id === id))
    const currentCount = itemsById.reduce((sum, e) => e.count + sum, 0)
    
    const [activePrice, setActivePrice] = React.useState<number>(0)
    const [typesIndex, setTypesIndex] = React.useState<number>(0)
    const [sizeIndex, setSizeIndex] = React.useState<number>(0)
    const priceArr = useSelector((store: RootStore) => store.fetching.items.find(e => e.id === id))?.price

    const pizza = {
        id,
        title,
        price: priceArr && activePrice === 0 && typesIndex === 0
            ? priceArr[0]
            : priceArr && activePrice === 0 && typesIndex === 1
                ? priceArr && priceArr[0] * 1.1
                : priceArr && activePrice === 1 && typesIndex === 0
                    ? priceArr[1]
                    : priceArr && activePrice === 1 && typesIndex === 1
                        ? priceArr && priceArr[1] * 1.1
                        : priceArr && priceArr[2] && typesIndex === 0
                            ? priceArr[2]
                            : priceArr && priceArr[2] * 1.1,
        imageUrl,
        types: typesIndex === 0 ? 'тонкое' : 'традиционное',
        sizes: sizeIndex === 0 ? 26 : sizeIndex === 1 ? 30 : 40,
        count: 0
    }
    // console.log(pizza)
    
    return (
        <div className="pizza-block" >
            <img
                className="pizza-block__image"
                src={imageUrl}
                alt="Pizza" />
            <h4 className="pizza-block__title">{title}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {types.map((e, i) => (<li
                        key={e}
                        className={typesIndex === i ? 'active' : undefined}
                        onClick={() => { setTypesIndex(i) }
                        }
                    >{e === 0 ? 'тонкое' : 'традиционное'}</li>))}
                </ul>
                <ul>
                    {sizes.map((e, i) => (<li
                        key={e}
                        className={sizeIndex === i ? 'active' : undefined}
                        onClick={() => {
                            setSizeIndex(i)
                            setActivePrice(i)
                        }}
                    >{smUnit(e)}</li>))}
                </ul>
            </div>
            <div className="pizza-block__bottom">
                {priceArr?.map((e, i) => (
                    i === activePrice &&
                    <div className="pizza-block__price">
                        {typesIndex === 0
                            ? currRub.format(e)
                            : currRub.format(e * 1.1)
                        }
                    </div>
                ))}
                <div
                    onClick={() => dispatch(addPizza(pizza))}
                    className="button button--outline button--add"
                >
                    <img src={plus} alt="plus" />
                    <span>Добавить</span>
                    <i>{currentCount || 0}</i>
                </div>
            </div>
        </div>
    )
}

export default PizzaBlock
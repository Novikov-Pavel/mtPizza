import React from 'react'
import plus from '../../assets/img/add.svg'
import { IItems } from '../../Redux/Slices/fetchingSlice/types'
import { currRub } from '../../utils'
import { AppDispatch, RootStore } from '../../Redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { addPizza } from '../../Redux/Slices/basket/basketSlice'

function PizzaBlock({ id, title, types, imageUrl, sizes, price }: IItems) {
    const dispatch: AppDispatch = useDispatch()
    const currentItem = useSelector((store: RootStore) => store.basket.items.find(e => e.id === id))

    const [typesIndex, setTypesIndex] = React.useState<number>(0)
    const [sizeIndex, setSizeIndex] = React.useState<number>(0)
    const pizza = {
        id,
        title,
        price,
        imageUrl,
        types: typesIndex === 0 ? 'тонкое' : 'традиционное',
        sizes: sizeIndex=== 0 ? 26 : sizeIndex=== 1 ? 30 : 40,
        count: 0
    }
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
                        onClick={() => setSizeIndex(i)}
                    >{e} см.</li>))}
                </ul>
            </div>
            <div
                onClick={() => dispatch(addPizza(pizza))}
                className="pizza-block__bottom"
            >
                <div className="pizza-block__price">от {currRub.format(price)}</div>
                <div className="button button--outline button--add">
                    <img src={plus} alt="plus" />
                    <span>Добавить</span>
                    <i>{currentItem?.count || 0}</i>
                </div>
            </div>
        </div>

    )
}

export default PizzaBlock
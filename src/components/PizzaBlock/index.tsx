import React from 'react'
import plus from '../../assets/img/add.svg'
import { IItems } from './types'

export let curr = new Intl.NumberFormat('ru', {
    style: 'currency',
    currency: 'rub',
    maximumFractionDigits: 0
})

function PizzaBlock(obj: IItems) {
    const [typesIndex, setTypesIndex] = React.useState<number>(0)
    const [sizeIndex, setSizeIndex] = React.useState<number>(0)

    return (
        <div className="pizza-block" >
            <img
                className="pizza-block__image"
                src={obj.imageUrl}
                alt="Pizza" />
            <h4 className="pizza-block__title">{obj.title}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {obj.types.map((e, i) => (<li
                        key={e}
                        className={typesIndex === i ? 'active' : ''}
                        onClick={() => setTypesIndex(i)}
                    >{e === 0 ? 'тонкое' : 'традиционное'}</li>))}
                </ul>
                <ul>
                    {obj.sizes.map((e, i) => (<li
                        key={e}
                        className={sizeIndex === i ? 'active' : ''}
                        onClick={() => setSizeIndex(i)}
                    >{e} см.</li>))}
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {curr.format(obj.price)}</div>
                <div className="button button--outline button--add">
                    <img src={plus} alt="plus" />
                    <span>Добавить</span>
                    <i>2</i>
                </div>
            </div>
        </div>

    )
}

export default PizzaBlock
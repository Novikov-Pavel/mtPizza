import React from 'react'
import { TCategories } from './types'

function Categories({
    setActiveCategory,
    activeCategory,
    categories,
    setPage
}: TCategories) {

    return (
        <div className="categories">
            <ul>
                {categories.map((e, i) => (
                    <li
                        key={e}
                        className={activeCategory === i ? 'active' : undefined}
                        onClick={() => {
                            setActiveCategory(i)
                            setPage(1)
                        }}
                    >{e}</li>
                ))}
            </ul>
        </div>
    )
}

export default Categories
import React from 'react'
import { search } from '../../App'

function Categories() {
    const { setPage, categories, activeCategory, setActiveCategory } = React.useContext(search)
    return (
        <div className="categories" >
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
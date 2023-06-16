import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import { basket, main } from './const'
import Home from './pages/Home'
import Basket from './pages/Basket'
import NotFound from './pages/NotFound'

const App: React.FC = () => {
    const [searchInput, setSearchInput] = React.useState('')
    return (
        <div className="wrapper">
            <Header
                searchInput={searchInput}
                setSearchInput={setSearchInput}
            />
            <Routes>
                <Route path={main} element={<Home searchInput={searchInput} setSearchInput={setSearchInput} />} />
                <Route path={basket} element={<Basket />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </div>
    )
}

export default App
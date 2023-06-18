import React from 'react'
import Home from './pages/Home'
import Header from './components/Header'
import Basket from './pages/Basket'
import NotFound from './pages/NotFound'
import { Route, Routes } from 'react-router-dom'
import { basket, main } from './const'

const App: React.FC = () => {

    return (
        <div className="wrapper">
            <Header />
            <Routes>
                <Route path={main} element={<Home />} />
                <Route path={basket} element={<Basket />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </div>
    )
}

export default App
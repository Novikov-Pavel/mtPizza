import React from "react";
import { createRoot } from "react-dom/client";
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import { route } from './const'
import App from "./App";
import Home from './pages/Home'
import Basket from './pages/Basket'
import NotFound from './pages/NotFound'

createRoot(document.querySelector("#root") as HTMLElement).render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path={route.main} element={<App />}>
                    <Route path={route.main} element={<Home />} />
                    <Route path={route.basket} element={<Basket />} />
                    <Route path='*' element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </Provider>
)

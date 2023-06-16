import React, { useState } from 'react'
import { createBrowserRouter } from "react-router-dom";
import { cart, main } from './const';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Root from './pages/Root';
import NotFound from './pages/NotFound';

export const router = createBrowserRouter([
    {
        path: main,
        element: <Root />,
        errorElement: <NotFound />,
        children: [
            {
                path: main,
                element: <Home />,
            },
            {
                path: cart,
                element: <Cart />
            },
        ]
    },
],

)
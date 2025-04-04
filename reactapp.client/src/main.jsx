import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import {
//     createBrowserRouter,
//     RouterProvider,
// } from "react-router-dom";
import { Zwierze } from './zwierze/Zwierze.jsx';
import { Zwierzeta } from './zwierze/Zwierzeta.jsx';
import { Layout } from './layout/Layout.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

/*const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/zwierze",
        element: <Zwierze />,
    },
    {
        path: "/zwierzeta",
        element: <Zwierzeta />,
    },
]);*/

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/*<RouterProvider router={router} />*/}
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<App />} />
                </Route>
                {/*<Route path='/' element={<App />}></Route>*/}
                <Route path='/zwierze' element={<Layout />}>
                    <Route index element={<Zwierze />} />
                </Route>
                <Route path='/zwierzeta' element={<Layout />}>
                    <Route index element={<Zwierzeta />} />
                </Route>
            </Routes>
        </BrowserRouter >
    </React.StrictMode>
)
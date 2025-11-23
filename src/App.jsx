import { useState } from 'react'

import { Home } from "./pages/home/Home.jsx";
import MainLayout from './layouts/MainLayout';
import { Route, Routes } from 'react-router-dom';
import ProductDetails from './pages/product/ProductDetails.jsx';

function App() {
    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={
                        <MainLayout>
                            <Home />
                        </MainLayout>} />
                <Route
                    path="/products/:id"
                    element={
                        <MainLayout>
                            <ProductDetails />
                        </MainLayout>
                    } />
            </Routes>

        </>
    )
}

export default App

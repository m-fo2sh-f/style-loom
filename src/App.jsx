import { useState } from 'react'

import { Home } from "./pages/home/Home.jsx";
import MainLayout from './layouts/MainLayout';
import { Route, Routes } from 'react-router-dom';

import ProductDetails from './pages/productDetails/ProductDetails.jsx';
import Cart from './pages/cart/Cart.jsx';
import Products from './pages/products/Products.jsx';
import Contact from './pages/contact/Contact.jsx';

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
                <Route
                    path="/cart"
                    element={
                        <MainLayout>
                            <Cart />
                        </MainLayout>
                    } />
                <Route
                    path="/products"
                    element={
                        <MainLayout>
                            <Products />
                        </MainLayout>
                    } />
                <Route
                    path="/contact"
                    element={
                        <MainLayout>
                            <Contact />
                        </MainLayout>
                    } />
            </Routes>

        </>
    )
}

export default App

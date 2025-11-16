import { useState } from 'react'

import { Home } from "./pages/home/Home.jsx";
import MainLayout from './layouts/MainLayout';

function App() {
    return (
        <>
            <MainLayout>
                <Home />
            </MainLayout>
        </>
    )
}

export default App

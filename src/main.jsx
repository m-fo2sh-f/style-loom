import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Theme from './Theme'
import { ThemeProvider } from '@mui/material/styles';
import { CartProvider } from './context/cartContext';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './components/ScrollTop'


const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ThemeProvider theme={Theme}>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <ScrollToTop />
                    <CartProvider>
                        <App />
                    </CartProvider>
                </BrowserRouter>
            </QueryClientProvider>
        </ThemeProvider>
    </StrictMode>,
)
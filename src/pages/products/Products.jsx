import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'
import ProductsSection from '../home/ProductsSection.jsx'
const Products = () => {
    const theme = useTheme();
    return (
        <Box  >
            <Typography variant='h2' sx={{ mt: 5, textAlign: 'center', color: theme.palette.primary.contrastText }}>Products</Typography>
            <ProductsSection />
        </Box>
    )
}

export default Products
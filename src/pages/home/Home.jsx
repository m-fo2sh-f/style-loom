import { Box, Typography } from '@mui/material'
import React from 'react'
import { Hero } from './Hero'
import { Skills } from './Skills'
import Process from './Process'
import ProductsSection from './ProductsSection'
export const Home = () => {
    return (
        <Box  >
            <Hero />
            <Skills />
            <Process />
            <ProductsSection />
        </Box>
    )
}

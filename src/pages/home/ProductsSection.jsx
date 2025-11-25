import { Box, Button, CircularProgress, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'
import icon from '../../assets/icons/Abstract Design2.png'
import DottedButton from '../../components/DottedButton'
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../../services/productServices';
import SpecialButton from '../../components/SpecialButton';
import { Product } from '../../components/Product';


import { ScrollTrigger, SplitText } from 'gsap/all';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);
const ProductsSection = () => {
    const theme = useTheme()
    const [currentCategory, setCurrentCategory] = React.useState("All");
    const { data, isLoading, error } = useQuery({
        queryKey: ["products", currentCategory],
        queryFn: () => getProducts(currentCategory),
    });

    const productsSection = React.useRef()
    useGSAP(() => {
        const proTL = gsap.timeline({ scrollTrigger: { trigger: '.products-section', start: 'top +500' } })
        proTL.from('.products-section ', {
            opacity: 0,
            y: 50,
            duration: 1,
        })
    }, { scope: productsSection })
    if (isLoading) {
        return (
            <Box ref={productsSection}>
                <Box className='products-section' sx={{
                    mt: 5, width: '90%', height: '500px', mx: 'auto', border: '2px dashed', borderColor: theme.palette.primary.main, borderRadius: '15px',
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    color: theme.palette.secondary.main
                }}>
                    <CircularProgress color="inherit" size="4rem" />
                </Box>
            </Box>
        )
    }
    return (
        <Box ref={productsSection}>
            <Box className='products-section' sx={{ mt: 5, width: '90%', mx: 'auto', border: '2px dashed', borderColor: theme.palette.primary.main, borderRadius: '15px' }}>
                <Box sx={{
                    position: 'relative', p: 5, overflow: 'hidden',
                    borderBottom: '2px dashed', borderColor: theme.palette.primary.main
                }}>
                    <Box
                        component='img'
                        src={icon}
                        sx={{
                            width: '250px', height: '250px',
                            position: 'absolute',
                            top: -60,
                            right: -80,
                            display: { md: 'block', xs: 'none' }
                        }}
                    />
                    <Typography variant="h3" sx={{ color: theme.palette.primary.contrastText, fontSize: { xl: '40px', md: '30px', xs: '20px' } }} >Navigating the StyleLoom Fashion Journey.</Typography>
                    <Typography variant="body2" sx={{ mt: 1.5, color: theme.palette.primary.dark }}>At StyleLoom, we've designed a straightforward shopping experience to make fashion accessible.</Typography>
                    <Stack flexDirection={'row'} flexWrap={{ md: 'nowrap', xs: 'wrap' }} justifyContent={{ md: 'start', xs: 'center' }} gap={2} mt={4} >
                        <Box onClick={() => setCurrentCategory("All")}><DottedButton text="All" current={currentCategory == 'All' ? true : false} /></Box>
                        <Box onClick={() => setCurrentCategory("Men")}><DottedButton text="Men" current={currentCategory == 'Men' ? true : false} /></Box>
                        <Box onClick={() => setCurrentCategory("Women")}><DottedButton text="Womens" current={currentCategory == 'Women' ? true : false} /></Box>
                        <Box onClick={() => setCurrentCategory("Accessories")}><DottedButton text="Accessories" current={currentCategory == 'Accessories' ? true : false} /></Box>
                    </Stack>
                </Box>

                <Stack flexDirection={'row'} justifyContent={'center'} flexWrap={'wrap'} sx={{ width: '100%', }}>

                    {data?.map((p) => (
                        <Product p={p} />
                    ))}
                </Stack>
            </Box >
        </Box>
    )
}

export default ProductsSection
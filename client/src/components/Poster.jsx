import { Box, useTheme, Typography, Stack, Button } from '@mui/material'
import React from 'react'
import logo from '../assets/icons/Abstract Design4.png'

import { ScrollTrigger, SplitText } from 'gsap/all';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, ScrollTrigger);
const Poster = () => {
    const theme = useTheme()
    const posterSection = React.useRef()
    useGSAP(() => {
        const proTL = gsap.timeline({ scrollTrigger: { trigger: '.poster-section', start: 'top +500' } })
        proTL.from('.poster-section ', {
            opacity: 0,
            y: 50,
            duration: 1,
        })
    }, { scope: posterSection })
    return (
        <Box ref={posterSection}>
            <Box className='poster-section' sx={{ mt: 5, position: 'relative', width: '90%', mx: 'auto', borderRadius: '15px', bgcolor: theme.palette.secondary.main, overflow: 'hidden', }}>
                <Stack flexDirection={{ md: 'row', xs: 'column' }} justifyContent={'space-between'} alignItems={'center'} gap={2} sx={{ p: '5%' }}>
                    <Box sx={{ width: { md: '60%', xs: '100%' }, zIndex: 3 }}>
                        <Typography variant="h3" color="initial">ELEVATE YOUR WORDROBE</Typography>
                        <Typography variant="body2" color="initial">Don't miss out – experience the epitome of fashion by clicking 'Buy Now' and embrace a world of chic elegance delivered to your doorstep. Your style journey begins here.</Typography>
                    </Box>
                    <Button
                        sx={{
                            bgcolor: theme.palette.primary.main, color: theme.palette.primary.contrastText, borderRadius: '15px',
                            height: '60px', px: 5,
                            width: { md: 'auto', xs: '100%' },
                            mr: { md: 5, xs: 0 }, zIndex: 50
                        }}
                    >Shop Now</Button>
                </Stack>
                <Box
                    component='img'
                    src={logo}
                    sx={{ position: 'absolute', top: -100, right: -20, width: '400px', height: '400px', zIndex: 1 }}
                />
            </Box>
        </Box>
    )
}

export default Poster
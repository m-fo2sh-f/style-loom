import { Box, useTheme, Typography, Stack, Button } from '@mui/material'
import React from 'react'
import logo from '../assets/icons/Abstract Design4.png'

const Poster = () => {
    const theme = useTheme()
    return (
        <Box sx={{ mt: 5, position: 'relative', width: '90%', mx: 'auto', borderRadius: '15px', bgcolor: theme.palette.secondary.main, overflow: 'hidden', }}>
            <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} sx={{ p: '5%' }}>
                <Box sx={{ width: '60%' }}>
                    <Typography variant="h3" color="initial">ELEVATE YOUR WORDROBE</Typography>
                    <Typography variant="body2" color="initial">Don't miss out – experience the epitome of fashion by clicking 'Buy Now' and embrace a world of chic elegance delivered to your doorstep. Your style journey begins here.</Typography>
                </Box>
                <Button
                    sx={{
                        bgcolor: theme.palette.primary.main, color: theme.palette.primary.contrastText, borderRadius: '15px',
                        height: '60px', px: 5,
                        mr: 5, zIndex: 50
                    }}
                >Shop Now</Button>
            </Stack>
            <Box
                component='img'
                src={logo}
                sx={{ position: 'absolute', top: -100, right: -20, width: '400px', height: '400px' }}
            />
        </Box>
    )
}

export default Poster
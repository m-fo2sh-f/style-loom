import { Box, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'
import SpecialButton from './SpecialButton'
import { useNavigate } from 'react-router-dom'

export const Product = ({ p }) => {
    const theme = useTheme()
    const navigator = useNavigate()
    return (
        <Stack
            key={p.id}
            gap={3}
            sx={{
                width: '450px',
                overflow: 'hidden',
                position: 'relative',
                padding: { lg: 3, xs: 1.5 },
                overFlow: 'hidden',
                height: 'fit-content',
            }}>
            <Box
                component='img'
                src={`${import.meta.env.VITE_SOME_KEY}${p?.img[0].url}`}
                onClick={() => {
                    navigator(`/products/${p.documentId}`)
                }}
                sx={{
                    maxWidth: '100%', height: { md: '300px', xs: '220px' },
                    objectFit: 'cover',
                    borderTopLeftRadius: '30px', borderTopRightRadius: '30px',
                    transition: '.2s all',
                    cursor: 'pointer',
                    '&:hover ': {
                        scale: 1.02
                    }
                }}
            />

            <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} >
                <Box sx={{ bgcolor: theme.palette.primary.main, p: "15px 20px", borderRadius: '25px', color: theme.palette.primary.contrastText, }}>{p.category}</Box>
                <SpecialButton text={'Shop Now'} height={'50px'} mt={'0'} width={'40%'} />
            </Stack>
            <Stack sx={{ mt: .5 }} gap={1}>
                <Typography variant="h5" sx={{ color: theme.palette.primary.contrastText }}>{p.title}</Typography>
                <Stack flexDirection={'row'} gap={2}>
                    <Typography variant="body2" sx={{ color: theme.palette.primary.dark }}>fit . <span style={{ color: '#EBE6E0' }}>{p.fit}</span></Typography>
                    <Typography variant="body2" sx={{ color: theme.palette.primary.dark }}>price . <span style={{ color: '#EBE6E0' }}>{p.price}</span></Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}

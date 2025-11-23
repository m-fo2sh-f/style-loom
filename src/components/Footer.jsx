import { Box, Divider, FormControl, IconButton, InputAdornment, OutlinedInput, Stack, TextField, Typography, useTheme } from '@mui/material'
import React from 'react'
import { footericons } from '../constants/HomeConstant.jsx'
import { footerHomeLinks } from '../constants/homeConstant.jsx'
import { footerProductLinks } from '../constants/homeConstant.jsx'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Footer = () => {
    const theme = useTheme()
    const Dot = () => (
        <Box sx={{ width: '5px', height: '5px', borderRadius: '50%', bgcolor: theme.palette.primary.dark }} ></Box>
    )
    return (
        <Box  >
            <Stack flexDirection={{ md: 'row', xs: 'column' }} gap={2} alignItems={'center'} justifyContent={'space-between'} sx={{ p: 5, width: '90%', mx: 'auto' }}>
                <Typography variant='h1' sx={{ fontSize: { md: '100px', xs: '50px' }, color: theme.palette.primary.contrastText }}>Style<span style={{ color: theme.palette.secondary.main, fontSize: '100px' }}>.</span>Loom</Typography>
                <Stack direction="row" spacing={2}>
                    {footericons.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <Box
                                key={index}
                                component="a"
                                href={item.path}
                                sx={{
                                    bgcolor: theme.palette.secondary.main,
                                    color: theme.palette.primary.main,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    padding: 1,
                                    borderRadius: "10px",
                                    transition: '.3s',
                                    '&:hover': {
                                        bgcolor: theme.palette.primary.main,
                                        color: theme.palette.secondary.main,
                                    }

                                }}
                            >
                                <Icon />
                            </Box>
                        );
                    })}
                </Stack>
            </Stack >
            <Box sx={{ py: 5, borderTop: '2px dashed', borderBottom: '2px dashed', borderColor: theme.palette.primary.main }}>
                <Stack flexDirection={{ md: 'row', xs: 'column' }} gap={2} alignItems={{ md: 'center', xs: 'start' }} justifyContent={'space-between'} sx={{ width: '90%', mx: 'auto', color: theme.palette.primary.dark, }}>
                    <Stack gap={1.6}>
                        <Typography variant='h6' sx={{ color: theme.palette.primary.contrastText }}>Home</Typography>
                        <Stack flexDirection={'row'} alignItems={'center'} gap={1}>
                            {footerHomeLinks.map((link, index) => (
                                <>
                                    <Box
                                        key={index}
                                        component="a"
                                        href={link.path}
                                        sx={{ textDecoration: 'none', color: theme.palette.primary.dark, transition: '.3s', '&:hover': { color: theme.palette.primary.contrastText } }}
                                    >
                                        <Typography variant='body2' >{link.title}</Typography>
                                    </Box >
                                    {index !== footerHomeLinks.length - 1 ? <Dot /> : ''}
                                </>
                            ))}
                        </Stack>
                    </Stack>
                    <Stack gap={1.6}>
                        <Typography variant='h6' sx={{ color: theme.palette.primary.contrastText }}>Products</Typography>
                        <Stack flexDirection={'row'} alignItems={'center'} gap={1}>
                            {footerProductLinks.map((link, index) => (
                                <>
                                    <Box
                                        key={index}
                                        component="a"
                                        href={link.path}
                                        sx={{ textDecoration: 'none', color: theme.palette.primary.dark, transition: '.3s', '&:hover': { color: theme.palette.primary.contrastText } }}
                                    >
                                        <Typography variant='body2' >{link.title}</Typography>
                                    </Box >
                                    {index !== footerProductLinks.length - 1 ? <Dot /> : ''}
                                </>
                            ))}
                        </Stack>
                    </Stack>
                    <Stack gap={1.6} sx={{ width: { md: '30%', xs: '100%' } }}>
                        <Typography variant='h6' sx={{ color: theme.palette.primary.contrastText }}>Subscribe to Newsletter</Typography>

                        <TextField
                            label="Your Email"
                            variant="outlined"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <ArrowForwardIcon />
                                    </InputAdornment>
                                ),
                            }}
                            sx={{
                                borderRadius: '15px',
                                width: { md: '93%', xs: '100%' },
                                bgcolor: theme.palette.primary.main,

                                "& .MuiOutlinedInput-root": {
                                    color: theme.palette.primary.dark,

                                    "&:hover fieldset": {
                                        borderColor: 'transparent',
                                    },

                                    "&.Mui-focused fieldset": {
                                        borderColor: 'transparent',
                                    },
                                },

                                // 🔥 لون اللابل وقت الفوكس
                                "& .MuiInputLabel-root.Mui-focused": {
                                    color: theme.palette.secondary.main,
                                },

                                // 🔥 لون اللابل العادي
                                "& .MuiInputLabel-root": {
                                    color: theme.palette.primary.dark,
                                },
                                "& .MuiInputAdornment-root": { color: theme.palette.secondary.main, },
                            }}
                        />


                    </Stack>
                </Stack>
            </Box >
            <Stack sx={{ py: 3, width: '90%', mx: 'auto' }} flexDirection={{ md: 'row', xs: 'column' }} gap={2} justifyContent={'space-between'} alignItems={'center'}>
                <Typography variant="body2" sx={{ color: theme.palette.primary.dark }}>© 2024 StyleLoom. All rights reserved.</Typography>
                <Stack flexDirection={'row'}>
                    <Box
                        component="a"
                        href='#'
                        sx={{ textDecoration: 'none', color: theme.palette.primary.dark, transition: '.3s', '&:hover': { color: theme.palette.primary.contrastText } }}
                    >
                        Terms & Conditions
                    </Box>
                    <Divider orientation="vertical" sx={{ width: '1px', height: '20px', bgcolor: theme.palette.primary.main, mx: .8 }} />
                    <Box
                        component="a"
                        href='#'
                        sx={{ textDecoration: 'none', color: theme.palette.primary.dark, transition: '.3s', '&:hover': { color: theme.palette.primary.contrastText } }}
                    >
                        Privacy Policy
                    </Box>
                </Stack>
            </Stack>
        </Box >
    )
}

export default Footer
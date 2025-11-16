import { Box, Button, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'
import icon from '../../assets/icons/Abstract Design2.png'
import DottedButton from '../../components/DottedButton'

const Products = () => {
    const theme = useTheme()
    return (
        <Box sx={{ mt: 5, width: '90%', mx: 'auto', border: '2px dashed', borderColor: theme.palette.primary.main, borderRadius: '15px' }}>
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
                <Typography variant="h3" sx={{ fontSize: { xl: '40px', md: '30px', xs: '20px' } }} >Navigating the StyleLoom Fashion Journey.</Typography>
                <Typography variant="body2" sx={{ mt: 1.5, color: theme.palette.primary.dark }}>At StyleLoom, we've designed a straightforward shopping experience to make fashion accessible.</Typography>
                <Stack flexDirection={'row'} gap={2} mt={4} >
                    <DottedButton text={'All'} />
                    <DottedButton text={'Men'} />
                    <DottedButton text={'Womens'} />
                    <DottedButton text={'Kids'} />
                </Stack>
            </Box>
            <Stack flexDirection={'row'} justifyContent={{ sm: 'space-between', xs: 'center' }} flexWrap={'wrap'} sx={{ width: '100%', }}>
                <Stack
                    gap={3}
                    sx={{

                        minWidth: '33.33%',
                        overflow: 'hidden',
                        position: 'relative',
                        padding: { lg: 3, xs: 1.5 },
                    }}>
                    <Box
                        component='img'
                        sx={{ width: '100%', height: { md: '300px', xs: '220px' }, borderTopLeftRadius: '30px', borderTopRightRadius: '30px' }}
                    />
                    <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                        <Box>Womens</Box>
                        <Button
                            sx={{
                                backgroundColor: 'transparent',
                                bgcolor: theme.palette.primary.main,
                                color: theme.palette.primary.contrastText,
                                mt: { md: 1.5, sm: 1, xs: .8 },
                                width: '150px',
                                borderRadius: "12px",
                                boxShadow: "none",
                                fontWeight: '400',
                                fontSize: { md: '18px', sm: '12px', xs: '10px' },
                                textWrap: 'nowrap',
                                "&:hover": {
                                    backgroundColor: theme.palette.secondary.light,
                                    color: theme.palette.secondary.contrastText,
                                    borderColor: 'transparent'
                                }
                            }}>
                            Shop Now
                        </Button>

                    </Stack>
                    <Typography variant="h5">title</Typography>
                    <Stack flexDirection={'row'} gap={2}>
                        <Typography variant="body2" sx={{ color: theme.palette.primary.dark }}>fit . <span style={{ color: '#EBE6E0' }}>slim Fit</span></Typography>
                        <Typography variant="body2" sx={{ color: theme.palette.primary.dark }}>price . <span style={{ color: '#EBE6E0' }}>60.99$</span></Typography>
                    </Stack>
                </Stack>
                <Stack
                    gap={3}
                    sx={{

                        minWidth: '33.33%',
                        overflow: 'hidden',
                        position: 'relative',
                        padding: { lg: 3, xs: 1.5 },
                    }}>
                    <Box
                        component='img'
                        sx={{ width: '100%', height: { md: '300px', xs: '220px' }, borderTopLeftRadius: '30px', borderTopRightRadius: '30px' }}
                    />
                    <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                        <Box>Womens</Box>
                        <Button
                            sx={{
                                backgroundColor: 'transparent',
                                bgcolor: theme.palette.primary.main,
                                color: theme.palette.primary.contrastText,
                                mt: { md: 1.5, sm: 1, xs: .8 },
                                width: '150px',
                                borderRadius: "12px",
                                boxShadow: "none",
                                fontWeight: '400',
                                fontSize: { md: '18px', sm: '12px', xs: '10px' },
                                textWrap: 'nowrap',
                                "&:hover": {
                                    backgroundColor: theme.palette.secondary.light,
                                    color: theme.palette.secondary.contrastText,
                                    borderColor: 'transparent'
                                }
                            }}>
                            Shop Now
                        </Button>

                    </Stack>
                    <Typography variant="h5">title</Typography>
                    <Stack flexDirection={'row'} gap={2}>
                        <Typography variant="body2" sx={{ color: theme.palette.primary.dark }}>fit . <span style={{ color: '#EBE6E0' }}>slim Fit</span></Typography>
                        <Typography variant="body2" sx={{ color: theme.palette.primary.dark }}>price . <span style={{ color: '#EBE6E0' }}>60.99$</span></Typography>
                    </Stack>
                </Stack>
                <Stack
                    gap={3}
                    sx={{

                        minWidth: '33.33%',
                        overflow: 'hidden',
                        position: 'relative',
                        padding: { lg: 3, xs: 1.5 },
                    }}>
                    <Box
                        component='img'
                        sx={{ width: '100%', height: { md: '300px', xs: '220px' }, borderTopLeftRadius: '30px', borderTopRightRadius: '30px' }}
                    />
                    <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                        <Box>Womens</Box>
                        <Button
                            sx={{
                                backgroundColor: 'transparent',
                                bgcolor: theme.palette.primary.main,
                                color: theme.palette.primary.contrastText,
                                mt: { md: 1.5, sm: 1, xs: .8 },
                                width: '150px',
                                borderRadius: "12px",
                                boxShadow: "none",
                                fontWeight: '400',
                                fontSize: { md: '18px', sm: '12px', xs: '10px' },
                                textWrap: 'nowrap',
                                "&:hover": {
                                    backgroundColor: theme.palette.secondary.light,
                                    color: theme.palette.secondary.contrastText,
                                    borderColor: 'transparent'
                                }
                            }}>
                            Shop Now
                        </Button>

                    </Stack>
                    <Typography variant="h5">title</Typography>
                    <Stack flexDirection={'row'} gap={2}>
                        <Typography variant="body2" sx={{ color: theme.palette.primary.dark }}>fit . <span style={{ color: '#EBE6E0' }}>slim Fit</span></Typography>
                        <Typography variant="body2" sx={{ color: theme.palette.primary.dark }}>price . <span style={{ color: '#EBE6E0' }}>60.99$</span></Typography>
                    </Stack>
                </Stack>
                <Stack
                    gap={3}
                    sx={{

                        minWidth: '33.33%',
                        overflow: 'hidden',
                        position: 'relative',
                        padding: { lg: 3, xs: 1.5 },
                    }}>
                    <Box
                        component='img'
                        sx={{ width: '100%', height: { md: '300px', xs: '220px' }, borderTopLeftRadius: '30px', borderTopRightRadius: '30px' }}
                    />
                    <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                        <Box>Womens</Box>
                        <Button
                            sx={{
                                backgroundColor: 'transparent',
                                bgcolor: theme.palette.primary.main,
                                color: theme.palette.primary.contrastText,
                                mt: { md: 1.5, sm: 1, xs: .8 },
                                width: '150px',
                                borderRadius: "12px",
                                boxShadow: "none",
                                fontWeight: '400',
                                fontSize: { md: '18px', sm: '12px', xs: '10px' },
                                textWrap: 'nowrap',
                                "&:hover": {
                                    backgroundColor: theme.palette.secondary.light,
                                    color: theme.palette.secondary.contrastText,
                                    borderColor: 'transparent'
                                }
                            }}>
                            Shop Now
                        </Button>

                    </Stack>
                    <Typography variant="h5">title</Typography>
                    <Stack flexDirection={'row'} gap={2}>
                        <Typography variant="body2" sx={{ color: theme.palette.primary.dark }}>fit . <span style={{ color: '#EBE6E0' }}>slim Fit</span></Typography>
                        <Typography variant="body2" sx={{ color: theme.palette.primary.dark }}>price . <span style={{ color: '#EBE6E0' }}>60.99$</span></Typography>
                    </Stack>
                </Stack>
                <Stack
                    gap={3}
                    sx={{

                        minWidth: '33.33%',
                        overflow: 'hidden',
                        position: 'relative',
                        padding: { lg: 3, xs: 1.5 },
                    }}>
                    <Box
                        component='img'
                        sx={{ width: '100%', height: { md: '300px', xs: '220px' }, borderTopLeftRadius: '30px', borderTopRightRadius: '30px' }}
                    />
                    <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                        <Box>Womens</Box>
                        <Button
                            sx={{
                                backgroundColor: 'transparent',
                                bgcolor: theme.palette.primary.main,
                                color: theme.palette.primary.contrastText,
                                mt: { md: 1.5, sm: 1, xs: .8 },
                                width: '150px',
                                borderRadius: "12px",
                                boxShadow: "none",
                                fontWeight: '400',
                                fontSize: { md: '18px', sm: '12px', xs: '10px' },
                                textWrap: 'nowrap',
                                "&:hover": {
                                    backgroundColor: theme.palette.secondary.light,
                                    color: theme.palette.secondary.contrastText,
                                    borderColor: 'transparent'
                                }
                            }}>
                            Shop Now
                        </Button>

                    </Stack>
                    <Typography variant="h5">title</Typography>
                    <Stack flexDirection={'row'} gap={2}>
                        <Typography variant="body2" sx={{ color: theme.palette.primary.dark }}>fit . <span style={{ color: '#EBE6E0' }}>slim Fit</span></Typography>
                        <Typography variant="body2" sx={{ color: theme.palette.primary.dark }}>price . <span style={{ color: '#EBE6E0' }}>60.99$</span></Typography>
                    </Stack>
                </Stack>



            </Stack>
        </Box >
    )
}

export default Products
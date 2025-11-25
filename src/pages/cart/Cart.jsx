// src/components/Cart.jsx
import React from 'react';
import { useCart } from '../../context/CartContext'
import { Box, Stack, useTheme, Typography } from '@mui/material';

import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { BorderColor } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import SpecialButton from '../../components/SpecialButton';
const Cart = () => {
    const theme = useTheme()
    const navigator = useNavigate();
    const {
        cartItems,
        addToCart,
        decreaseQuantity,
        removeFromCart,
        clearCart,
        getCartTotal
    } = useCart();

    if (cartItems.length === 0) {
        return (
            <Stack flexDirection={'column'} justifyContent={'center'} alignItems={'center'} sx={{ width: '90%', mx: 'auto', mt: 5, borderRadius: '10px', border: '2px dashed', borderColor: 'primary.main', p: 5 }}>
                <Typography variant="h2" color="primary.contrastText" sx={{ fontSize: { lg: '50px', md: '40px', xs: '30px' } }}>Cart is empty</Typography>
                <Box sx={{ mt: 2, width: '100%' }} onClick={() => navigator('/products')}>
                    <SpecialButton text={'Shopping'} height={'50px'} mt={''} width={'100%'} />
                </Box>

            </Stack>
        )

    }

    return (

        <>
            <Typography variant='h2' sx={{ mt: 5, textAlign: 'center', color: theme.palette.primary.contrastText }}>Cart</Typography>

            <Box sx={{ width: '90%', mx: 'auto', mt: 5, }}>
                <Stack flexDirection={{ md: 'row', xs: 'column' }} gap={2}>
                    <Stack sx={{ height: 'fit-content', width: { md: '70%', xs: '100%' }, borderRadius: '10px', border: '2px dashed', borderColor: 'primary.main', }}>
                        {cartItems.map((item, index) => (
                            <Stack key={item.id} flexDirection={'row'} alignItems={'center'} gap={2} px={2}
                                sx={{ py: 2, borderBottom: index === cartItems.length - 1 ? 'none' : '2px dashed', borderColor: 'primary.main', }}>
                                <Box component='img' src={item.img[0]} sx={{ width: { md: '100px', xs: '100px' }, height: { md: '100px', xs: '100px' }, cursor: 'pointer', borderRadius: '10px' }}
                                    onClick={() => { navigator(`/products/${item.id}`) }} />
                                <Stack flexDirection={{ sm: 'row', xs: 'column' }} sx={{ flexGrow: 1 }} gap={2} >
                                    <Stack sx={{ width: { md: '60%', sm: '50%', xs: '100%', } }} flexDirection={'row'} alignItems={'center'} gap={2}>
                                        <Box sx={{ width: '100%', }}>
                                            <Typography variant="body1" sx={{ color: theme.palette.primary.contrastText }}>{item.title}</Typography>
                                            <Typography variant="body2" sx={{ color: theme.palette.primary.dark }}>${item.price}</Typography>
                                        </Box>
                                    </Stack>
                                    <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} sx={{ width: { md: '40%', sm: '50%', xs: '100%' }, flexGrow: 1 }} >
                                        <Stack flexDirection={'row'} alignItems={'center'} gap={2}>
                                            <Box sx={{
                                                bgcolor: theme.palette.secondary.main, color: theme.palette.secondary.contrastText, borderRadius: '10px',
                                                border: '2px solid', borderColor: theme.palette.secondary.main,
                                                display: 'flex', alignItems: 'center', justifyContent: 'center', padding: { md: '10px', sm: '7px', xs: '5px' },
                                                cursor: 'pointer', fontSize: '20px',
                                                transition: '.3s all',
                                                '&:hover': {
                                                    bgcolor: 'transparent',
                                                    color: theme.palette.primary.contrastText,
                                                    border: '2px solid',
                                                    borderColor: theme.palette.secondary.main
                                                }
                                            }} onClick={() => decreaseQuantity(item.id)}>< RemoveIcon /> </Box>
                                            <Typography variant="h6" sx={{ color: theme.palette.primary.contrastText }}>{item.quantity}</Typography>
                                            <Box sx={{
                                                bgcolor: theme.palette.secondary.main, color: theme.palette.secondary.contrastText, borderRadius: '10px',
                                                border: '2px solid', borderColor: theme.palette.secondary.main,
                                                display: 'flex', alignItems: 'center', justifyContent: 'center', padding: { md: '10px', sm: '7px', xs: '5px' },
                                                cursor: 'pointer', fontSize: '20px',
                                                transition: '.3s all',
                                                '&:hover': {
                                                    bgcolor: 'transparent',
                                                    color: theme.palette.primary.contrastText,
                                                    border: '2px solid',
                                                    borderColor: theme.palette.secondary.main
                                                }
                                            }} onClick={() => addToCart(item)}> <AddIcon /> </Box >
                                        </Stack>
                                        <Box>
                                            <Box
                                                sx={{
                                                    bgcolor: theme.palette.secondary.main, color: theme.palette.secondary.contrastText, borderRadius: '10px',
                                                    border: '2px solid', borderColor: theme.palette.secondary.main,
                                                    display: 'flex', alignItems: 'center', justifyContent: 'center', padding: { md: '10px', sm: '7px', xs: '5px' },
                                                    cursor: 'pointer', fontSize: '20px',
                                                    transition: '.3s all',
                                                    '&:hover': {
                                                        bgcolor: 'transparent',
                                                        color: 'red',
                                                        border: '2px solid',
                                                        borderColor: 'red'
                                                    }
                                                }}
                                                onClick={() => removeFromCart(item.id)}> <DeleteForeverIcon />
                                            </Box>
                                        </Box>
                                    </Stack>
                                </Stack>
                            </Stack>
                        ))}
                    </Stack>
                    <Stack justifyContent={'center'} sx={{ p: 2, width: { md: '30%', xs: '100%' }, borderRadius: '10px', border: '2px dashed', borderColor: 'primary.main', }}>
                        <Stack sx={{}} gap={2}>
                            <Stack flexDirection={'row'} justifyContent={'space-between'}>
                                <Typography variant="h6" sx={{ color: theme.palette.primary.contrastText }}>Price:</Typography>
                                <Typography variant="h6" sx={{ color: theme.palette.primary.contrastText }}>${getCartTotal().toFixed(2)}</Typography>
                            </Stack>
                            <Stack flexDirection={'row'} justifyContent={'space-between'}>
                                <Typography variant="h6" sx={{ color: theme.palette.primary.contrastText }}>Shipping:</Typography>
                                <Typography variant="h6" sx={{ color: theme.palette.primary.contrastText }}>$19.99</Typography>
                            </Stack>
                            <Stack flexDirection={'row'} justifyContent={'space-between'}>
                                <Typography variant="h5" sx={{ color: theme.palette.primary.contrastText, fontWeight: '600' }}>Total:</Typography>
                                <Typography variant="h5" sx={{ color: theme.palette.primary.contrastText, fontWeight: '600' }}>${(getCartTotal() + 19.99).toFixed(2)}</Typography>
                            </Stack>
                        </Stack>
                        <Box sx={{ mt: 2 }}><SpecialButton text={'SheckOut'} height={'50px'} mt={''} width={undefined} /></Box>
                    </Stack>
                </Stack>
            </Box >
        </>

    );
};
export default Cart;

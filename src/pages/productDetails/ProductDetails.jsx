import React from 'react'
import { useParams } from 'react-router-dom';
import { getProductById } from '../../services/productServices'
import { useQuery } from '@tanstack/react-query'
import { Box, Button, Rating, Stack, Typography, useTheme } from '@mui/material';
import SpecialButton from '../../components/SpecialButton';
import { useCart } from '../../context/cartContext';
import { useSnackbar } from 'notistack';

const ProductDetails = () => {
    const theme = useTheme()


    const { addToCart } = useCart();
    const { id } = useParams();
    const { data, isLoading, error } = useQuery({
        queryKey: ["product", id],
        queryFn: () => getProductById(id),
    })

    if (data) {
        return (
            <Box>
                <Box sx={{ width: '90%', mx: 'auto', mt: 5, borderRadius: '10px', border: '2px dashed', borderColor: theme.palette.primary.main }}>
                    <Stack flexDirection={{ md: 'row', xs: 'column' }} justifyContent={'space-between'} alignItems={{ md: 'center', sm: 'start', xs: 'center' }} gap={2} sx={{
                        position: 'relative', p: 5, overflow: 'hidden',
                        borderBottom: '2px dashed', borderColor: theme.palette.primary.main
                    }}>
                        <Box>
                            <Typography variant="h3" sx={{ color: theme.palette.primary.contrastText, fontSize: { xl: '40px', md: '30px', xs: '20px' } }} >{data.title}</Typography>
                            <Typography variant="body2" sx={{ mt: 1.5, color: theme.palette.primary.dark }}>{data.fit}</Typography>
                        </Box>
                        <Stack flexDirection={'row'} alignItems={'center'} justifyContent={'center'} gap={2}>
                            <Box

                                onClick={() => {
                                    addToCart(data)
                                }}
                            >
                                <SpecialButton text={'Add To Cart'} height={'60px'} mt={'0'} width={'150px'} />

                            </Box>
                            <Button sx={{
                                backgroundColor: 'transparent',
                                bgcolor: theme.palette.secondary.main,
                                color: theme.palette.secondary.contrastText,
                                padding: "18px 20px",
                                borderRadius: "12px",
                                boxShadow: "none",
                                fontWeight: '400',

                                "&:hover": {
                                    backgroundColor: theme.palette.secondary.light,
                                    color: theme.palette.secondary.contrastText,
                                    borderColor: 'transparent'
                                }
                            }}
                            >Shop Now</Button>
                        </Stack>
                    </Stack>
                    <Stack flexDirection={{ md: 'row', xs: 'column' }} gap={2} sx={{ p: { md: 5, sm: 3, xs: 2 }, borderBottom: '2px dashed', borderColor: theme.palette.primary.main }}>
                        <Box
                            component='img'
                            src={data?.img[0]}
                            sx={{ width: { md: '60%', xs: '100%' }, height: { md: '600px', xs: '300px' }, }}
                        />
                        <Stack flexDirection={{ md: 'column', xs: 'row' }} gap={{ md: '20px', xs: 2 }} sx={{ flexGrow: 1, height: '90%' }}>
                            {data?.img[1] &&
                                <Box
                                    component='img'
                                    src={data?.img[1]}
                                    sx={{ flexGrow: 1, width: { md: '100%', xs: '47.5%' }, height: { md: '290px', xs: '200px' } }}
                                />
                            }
                            {data?.img[2] &&
                                <Box
                                    component='img'
                                    src={data?.img[2]}
                                    sx={{ flexGrow: 1, width: { md: '100%', xs: '47.5%' }, height: { md: '290px', xs: '200px' } }}
                                />
                            }
                        </Stack>
                    </Stack>
                    <Stack flexDirection={{ md: 'row', xs: 'column' }} flexWrap={'wrap'} >

                        <Box
                            sx={{
                                width: { md: '60%', xs: '100%' }, flexGrow: 1, px: { md: '70px', xs: 2 }, py: 5,
                                borderBottom: '2px dashed', borderRight: '2px dashed', borderColor: theme.palette.primary.main,

                            }}>
                            <Typography variant="h6" sx={{ color: theme.palette.primary.contrastText }}>Description</Typography>
                            <Typography variant="body2" sx={{ mt: 2, color: theme.palette.primary.dark }}>{data?.description}</Typography>
                        </Box>
                        <Box
                            sx={{
                                width: { md: '40%', xs: '100%' }, px: { md: '70px', xs: 2 }, py: 5, flexGrow: 1,
                                borderBottom: '2px dashed', borderRight: '2px dashed', borderColor: theme.palette.primary.main
                            }}>
                            <Typography variant="h6" sx={{ color: theme.palette.primary.contrastText }}>Join Life</Typography>
                            <Typography variant="body2" sx={{ mt: 2, color: theme.palette.primary.dark }}>Tracing its roots back to ancient Greek draped garments, has evolved through centuries, often crafted from luxurious fabrics like silks, satins, and velvets.</Typography>
                        </Box>
                        <Box
                            sx={{
                                width: { md: '60%', xs: '100%' }, px: { md: '70px', xs: 2 }, py: 5, flexGrow: 1,
                                borderBottom: '2px dashed', borderRight: '2px dashed', borderColor: theme.palette.primary.main
                            }}>
                            <Typography variant="h6" sx={{ color: theme.palette.primary.contrastText }}>Join Life</Typography>
                            <Typography variant="body2" sx={{ mt: 2, color: theme.palette.primary.dark }}>Tracing its roots back to ancient Greek draped garments, has evolved through centuries, often crafted from luxurious fabrics like silks, satins, and velvets.</Typography>
                        </Box>
                        <Box
                            sx={{
                                width: { md: '60%', xs: '100%' }, px: { md: '70px', xs: 2 }, py: 5, flexGrow: 1,
                                borderBottom: '2px dashed', borderRight: '2px dashed', borderColor: theme.palette.primary.main
                            }}>
                            <Typography variant="h6" sx={{ color: theme.palette.primary.contrastText }}>Material</Typography>
                            <Typography variant="body2" sx={{ mt: 2, color: theme.palette.primary.dark }}>Flowing from Grecian folds to glittering silks, the evening gown has graced centuries in luxury.</Typography>
                        </Box>
                        <Stack
                            sx={{

                                display: 'flex', alignItems: 'start', justifyContent: 'center',
                                width: { md: '40%', xs: '100%' }, px: { md: '70px', xs: 2 }, py: 5, flexGrow: 1,
                                borderBottom: '2px dashed', borderRight: '2px dashed', borderColor: theme.palette.primary.main
                            }}>
                            <Typography variant="h6" sx={{ color: theme.palette.primary.contrastText }}>Price: ${data?.price}<br></br> <span style={{ color: theme.palette.primary.dark, fontSize: '10px' }}>( MRP incl. of all taxes )</span></Typography>
                            <Box
                                sx={{ mt: 2, width: '100%' }}
                                onClick={() => {
                                    addToCart(data)
                                }}
                            >
                                <SpecialButton text={'Add To Cart'} height={'50px'} mt={'15px'} width={'100%'} />
                            </Box>

                        </Stack>
                        <Box
                            sx={{
                                display: 'flex', alignItems: 'center', justifyContent: { md: 'start', xs: 'center' },
                                width: { md: '50%', xs: '100%' }, px: { md: '70px', xs: 2 }, py: 5,
                                borderBottom: '2px dashed', borderRight: '2px dashed', borderColor: theme.palette.primary.main
                            }}>
                            <Typography variant="h6" sx={{ color: theme.palette.primary.contrastText, mr: 5 }}>Rate: </Typography>
                            <Stack justifyContent={'center'} alignItems={'center'} gap={1}>
                                <Typography variant="h5" sx={{ color: theme.palette.primary.contrastText, mr: 5 }}>{data?.rate} </Typography>
                                <Rating name="half-rating-read" defaultValue={data.rate} precision={0.5} readOnly />
                            </Stack>
                        </Box>

                    </Stack>
                </Box >

            </Box >
        )
    }

}

export default ProductDetails
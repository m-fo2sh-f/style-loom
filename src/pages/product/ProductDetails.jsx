import React from 'react'
import { useParams } from 'react-router-dom';
import { getProductById } from '../../services/productServices'
import { useQuery } from '@tanstack/react-query'
import { Box, Button, Stack, Typography, useTheme } from '@mui/material';
import SpecialButton from '../../components/SpecialButton';

const ProductDetails = () => {
    const theme = useTheme()
    const { id } = useParams();
    const { data, isLoading, error } = useQuery({
        queryKey: ["product", id],
        queryFn: () => getProductById(id),
    })
    console.log(import.meta.env.VITE_SOME_KEY)
    if (data) {
        return (
            <Box>
                <Box sx={{ width: '90%', mx: 'auto', mt: 5, borderRadius: '10px', border: '2px dashed', borderColor: theme.palette.primary.main }}>
                    <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} sx={{
                        position: 'relative', p: 5, overflow: 'hidden',
                        borderBottom: '2px dashed', borderColor: theme.palette.primary.main
                    }}>

                        <Box>
                            <Typography variant="h3" sx={{ color: theme.palette.primary.contrastText, fontSize: { xl: '40px', md: '30px', xs: '20px' } }} >{data.data.title}</Typography>
                            <Typography variant="body2" sx={{ mt: 1.5, color: theme.palette.primary.dark }}>{data.data.fit}</Typography>
                        </Box>
                        <Stack flexDirection={'row'} alignItems={'center'} justifyContent={'center'} gap={2}>
                            <SpecialButton text={'Add To Cart'} height={'60px'} mt={'0'} width={'150px'} />
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
                    <Stack flexDirection={'row'} gap={2} sx={{ p: 5, borderBottom: '2px dashed', borderColor: theme.palette.primary.main }}>
                        <Box
                            component='img'
                            src={`${import.meta.env.VITE_SOME_KEY}${data?.data.img[0].url}`}
                            sx={{ width: '60%', height: '600px', borderRadius: '15%' }}
                        />
                        <Stack gap={'20px'} sx={{ flexGrow: 1, height: '90%' }}>
                            {data?.data.img[1] &&
                                <Box
                                    component='img'
                                    src={`${import.meta.env.VITE_SOME_KEY}${data?.data.img[0].url}`}
                                    sx={{ width: '100%', height: '290px' }}
                                />
                            }
                            {data?.data.img[2] &&
                                <Box
                                    component='img'
                                    src={`${import.meta.env.VITE_SOME_KEY}${data?.data.img[0].url}`}
                                    sx={{ width: '100%', height: '290px' }}
                                />
                            }
                        </Stack>
                    </Stack>
                    <Stack flexDirection={'row'} flexWrap={'wrap'} >
                        <Box
                            sx={{
                                width: '40%', flexGrow: 1, px: '70px', py: 5,
                                borderBottom: '2px dashed', borderRight: '2px dashed', borderColor: theme.palette.primary.main
                            }}>
                            <Typography variant="h6" sx={{ color: theme.palette.primary.contrastText }}>Material is: {data?.data.material}</Typography>
                        </Box>
                        <Box
                            sx={{
                                width: '60%', flexGrow: 1, px: '70px', py: 5,
                                borderBottom: '2px dashed', borderColor: theme.palette.primary.main
                            }}>
                            <Typography variant="h6" sx={{ color: theme.palette.primary.contrastText }}> {data?.data.description}</Typography>
                        </Box>
                        <Box
                            sx={{
                                width: '40%', px: '70px', py: 5, flexGrow: 1,
                                borderBottom: '2px dashed', borderRight: '2px dashed', borderColor: theme.palette.primary.main
                            }}>
                            <Typography variant="h6" sx={{ color: theme.palette.primary.contrastText }}>Join Life</Typography>
                            <Typography variant="body2" sx={{ mt: 2, color: theme.palette.primary.dark }}>Tracing its roots back to ancient Greek draped garments, has evolved through centuries, often crafted from luxurious fabrics like silks, satins, and velvets.</Typography>
                        </Box>
                        <Box
                            sx={{
                                width: '60%', px: '70px', py: 5, flexGrow: 1,
                                borderBottom: '2px dashed', borderRight: '2px dashed', borderColor: theme.palette.primary.main
                            }}>
                            <Typography variant="h6" sx={{ color: theme.palette.primary.contrastText }}>Join Life</Typography>
                            <Typography variant="body2" sx={{ mt: 2, color: theme.palette.primary.dark }}>Tracing its roots back to ancient Greek draped garments, has evolved through centuries, often crafted from luxurious fabrics like silks, satins, and velvets.</Typography>
                        </Box>
                        <Box
                            sx={{
                                width: '60%', px: '70px', py: 5, flexGrow: 1,
                                borderBottom: '2px dashed', borderRight: '2px dashed', borderColor: theme.palette.primary.main
                            }}>
                            <Typography variant="h6" sx={{ color: theme.palette.primary.contrastText }}>Material</Typography>
                            <Typography variant="body2" sx={{ mt: 2, color: theme.palette.primary.dark }}>Flowing from Grecian folds to glittering silks, the evening gown has graced centuries in luxury.</Typography>
                        </Box>
                    </Stack>
                </Box >

            </Box >
        )
    }

}

export default ProductDetails
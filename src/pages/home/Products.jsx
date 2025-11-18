import { Box, Button, CircularProgress, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'
import icon from '../../assets/icons/Abstract Design2.png'
import DottedButton from '../../components/DottedButton'
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../../services/productServices';
import SpecialButton from '../../components/SpecialButton';

const Products = () => {
    const theme = useTheme()
    const [currentCategory, setCurrentCategory] = React.useState("All");
    const { data, isLoading, error } = useQuery({
        queryKey: ["products", currentCategory],
        queryFn: () => getProducts(currentCategory),
    });
    if (isLoading) {
        return (
            <Box sx={{
                mt: 5, width: '90%', height: '500px', mx: 'auto', border: '2px dashed', borderColor: theme.palette.primary.main, borderRadius: '15px',
                display: 'flex', justifyContent: 'center', alignItems: 'center',
                color: theme.palette.secondary.main
            }}>
                <CircularProgress color="inherit" size="4rem" />
            </Box>
        )
    }
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
                <Typography variant="h3" sx={{ color: theme.palette.primary.contrastText, fontSize: { xl: '40px', md: '30px', xs: '20px' } }} >Navigating the StyleLoom Fashion Journey.</Typography>
                <Typography variant="body2" sx={{ mt: 1.5, color: theme.palette.primary.dark }}>At StyleLoom, we've designed a straightforward shopping experience to make fashion accessible.</Typography>
                <Stack flexDirection={'row'} gap={2} mt={4} >
                    <Box onClick={() => setCurrentCategory("All")}><DottedButton text="All" current={currentCategory == 'All' ? true : false} /></Box>
                    <Box onClick={() => setCurrentCategory("Men")}><DottedButton text="Men" current={currentCategory == 'Men' ? true : false} /></Box>
                    <Box onClick={() => setCurrentCategory("Women")}><DottedButton text="Womens" current={currentCategory == 'Women' ? true : false} /></Box>
                    <Box onClick={() => setCurrentCategory("Accessories")}><DottedButton text="Accessories" current={currentCategory == 'Accessories' ? true : false} /></Box>
                </Stack>
            </Box>

            <Stack flexDirection={'row'} justifyContent={{ sm: 'start', xs: 'center' }} flexWrap={'wrap'} sx={{ width: '100%', }}>

                {data?.data?.map((p) => (
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
                            src={`http://localhost:1337${p.img[0].url}`}
                            onClick={() => {

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
                ))}





            </Stack>
        </Box >
    )
}

export default Products
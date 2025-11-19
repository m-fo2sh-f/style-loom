import { Avatar, Box, Button, Rating, Stack, Typography, useTheme } from '@mui/material'
import DottedButton from './DottedButton'
import React, { useState } from 'react'
import logo from '../assets/icons/Abstract Design3.png'
import TwitterIcon from '@mui/icons-material/Twitter';
import { useQuery } from '@tanstack/react-query';
import { getComments } from '../services/commentServices';

import { ScrollTrigger, SplitText } from 'gsap/all';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, ScrollTrigger);
const Comments = () => {
    const theme = useTheme()
    const [more, setMore] = useState(false)
    const { data, isLoading, error } = useQuery({
        queryKey: ["products"],
        queryFn: () => getComments(),
    });

    const commentsSection = React.useRef()
    useGSAP(() => {
        const proTL = gsap.timeline({ scrollTrigger: { trigger: '.comments-section', start: 'top +500' } })
        proTL.from('.comments-section ', {
            opacity: 0,
            y: 50,
            duration: 1,
        })
    }, { scope: commentsSection })

    return (
        <Box ref={commentsSection}>
            <Box className='comments-section' sx={{ mt: 5, width: '90%', mx: 'auto', border: '2px dashed', borderColor: theme.palette.primary.main, borderRadius: '15px' }}>
                <Box sx={{
                    position: 'relative', p: 5, overflow: 'hidden',
                    borderBottom: '2px dashed', borderColor: theme.palette.primary.main
                }}>
                    <Box
                        component='img'
                        src={logo}
                        sx={{
                            width: '400px', height: '400px',
                            position: 'absolute',
                            top: -80,
                            right: -100,
                            display: { md: 'block', xs: 'none' }
                        }}
                    />
                    <Typography variant="h3" sx={{ color: theme.palette.primary.contrastText, fontSize: { xl: '40px', md: '30px', xs: '20px' } }} >The StyleLoom Testimonial Collection.</Typography>
                    <Typography variant="body2" sx={{ mt: 1.5, color: theme.palette.primary.dark }}>At StyleLoom, our customers are the heartbeat of our brand.</Typography>

                </Box>


                <Stack flexDirection={'row'} flexWrap={'wrap'}
                    sx={{
                        borderBottom: '2px dashed', borderColor: theme.palette.primary.main
                    }}
                >
                    {data?.data?.map((com, index) => (
                        <Stack key={index}
                            sx={{
                                borderBottom: '2px dashed', borderColor: theme.palette.primary.main,
                                width: '33.33%',
                                minWidth: '300px',
                                flexGrow: 1
                            }}
                        >
                            <Stack
                                gap={3}
                                sx={{
                                    borderRight: '2px dashed', borderColor: theme.palette.primary.main,
                                    overflow: 'hidden',
                                    position: 'relative', flex: "1 1 33.33%",
                                    padding: 3,
                                }}>
                                <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                                    <Stack justifyContent={'space-between'} alignItems={'center'} flexDirection={'row'}>
                                        <Avatar alt="Remy Sharp" src={`http://localhost:1337${com.picture.url}`} />
                                        <Box sx={{ ml: 2 }}>
                                            <Typography variant="h6" sx={{ color: theme.palette.primary.contrastText }} >{com.name}</Typography>
                                            <Typography variant="body2" sx={{ color: theme.palette.primary.dark }}>{com.country} ,{com.city}</Typography>
                                        </Box>
                                    </Stack>
                                    <TwitterIcon sx={{ color: theme.palette.secondary.main }} />
                                </Stack>
                                <Rating name="half-rating-read" defaultValue={com.rate} precision={0.5} readOnly />
                                <Typography variant="body2" sx={{ color: theme.palette.primary.dark }}>{com.comment}</Typography>
                            </Stack>
                        </Stack>
                    ))}
                </Stack>
            </Box>
        </Box>
    )
}

export default Comments
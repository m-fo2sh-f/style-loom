import { Box, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'
import icon from '../assets/icons/Abstract Design.png'
import { questions } from '../constants/HomeConstant'

import { ScrollTrigger, SplitText } from 'gsap/all';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);
const Questions = () => {
    const theme = useTheme()

    const qustionsSection = React.useRef()
    useGSAP(() => {
        const proTL = gsap.timeline({ scrollTrigger: { trigger: '.qustions-section', start: 'top +500' } })
        proTL.from('.qustions-section ', {
            opacity: 0,
            y: 50,
            duration: 1,
        })
    }, { scope: qustionsSection })
    return (
        <Box ref={qustionsSection}>
            <Box className='qustions-section' sx={{ width: '90%', mx: 'auto', mt: 5, border: '2px dashed', borderRadius: '10px', borderColor: theme.palette.primary.main }}>
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
                            top: -70,
                            right: -70,
                            display: { md: 'block', xs: 'none' }
                        }}
                    />
                    <Typography variant="h3" sx={{ color: theme.palette.primary.contrastText, fontSize: { xl: '40px', md: '30px', xs: '20px' } }} >Navigating the StyleLoom Fashion Journey.</Typography>
                    <Typography variant="body2" sx={{ mt: 1.5, color: theme.palette.primary.dark }}>At StyleLoom, we've designed a straightforward shopping experience to make fashion accessible.</Typography>
                </Box>
                <Stack flexDirection={'row'} flexWrap={'wrap'}>
                    {questions.map((qus, index) => (
                        <Stack key={index} sx={{
                            width: '50%', p: 5,
                            minWidth: '300px',
                            flexGrow: 1,
                            borderBottom: '2px dashed', borderRight: '2px dashed', borderColor: theme.palette.primary.main
                        }}>
                            <Typography variant="h6" sx={{ color: theme.palette.primary.contrastText }}>{qus.title}</Typography>
                            <Typography variant="body2" sx={{ color: theme.palette.primary.dark }}>{qus.answer}</Typography>
                        </Stack>
                    ))}
                </Stack>
            </Box>
        </Box>
    )
}

export default Questions
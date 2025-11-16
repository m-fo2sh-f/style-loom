import { Box, Button, Stack, useTheme, Typography, IconButton } from '@mui/material'
import React, { useRef } from 'react'
import heroImage from '../../assets/hero.png'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import CountUp from 'react-countup';
import DottedButton from '../../components/DottedButton';

import { ScrollTrigger, SplitText } from 'gsap/all';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { Description } from '@mui/icons-material';
gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);
export const Hero = () => {
    const hero = useRef()
    const header = useRef()
    const description = useRef()
    const theme = useTheme()

    useGSAP(() => {

        const heroTL = gsap.timeline()
        const dataTL = gsap.timeline({ scrollTrigger: { trigger: '.data-section', start: 'top +500' } })
        heroTL.from('.hero-img', {
            opacity: 0,
            duration: 1,
            scale: .5
        }).from('.hero-button', {
            opacity: 0,
            duration: .5,
            y: 20
        })
        // splitting text
        let splitHeader = SplitText.create(header.current, { type: 'words' })
        let splitDescription = SplitText.create(description.current, { type: 'lines' })
        splitDescription.lines.forEach(line => {
            line.style.color = theme.palette.primary.dark;
        });
        dataTL.from(splitHeader.words, {
            opacity: .15,
            stagger: .2
        }, 0).from(splitDescription.lines, {
            y: 50,
            opacity: 0,
            duration: .5,
            stagger: .5
        }, ">-0.5")
    }, { scope: hero })
    return (
        <Box ref={hero} sx={{ width: '90%', mx: 'auto', mt: 4, overflow: 'hidden' }}>
            <Box sx={{ position: 'relative' }}>
                <Box
                    className='hero-img'
                    component="img"
                    src={heroImage}
                    sx={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: '15px' }}
                />
                <Box
                    className='hero-button'
                    sx={{

                        bgcolor: theme.palette.background.default,
                        position: 'absolute',
                        bottom: -10,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: { lg: '15%', md: '20%', sm: '25%', xs: '30%' },
                        height: '60px',
                        borderRadius: '15px 15px 0 0',
                        display: 'flex',
                        justifyContent: 'center',

                    }}>
                    <Button

                        sx={{
                            backgroundColor: 'transparent',
                            bgcolor: theme.palette.primary.main,
                            color: theme.palette.primary.contrastText,
                            mt: { md: 1.5, sm: 1, xs: .8 },
                            width: '90%',
                            height: { lg: '110%', sm: '100%', xs: '90%' },
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
                        Shop Now<ArrowOutwardIcon sx={{ ml: 1 }} />
                    </Button>
                </Box>
            </Box>
            <Box className={'data-section'} sx={{ mt: 5, border: '2px dashed', borderColor: theme.palette.primary.main, borderRadius: '15px' }}>
                <Stack flexDirection={{ md: 'row', xs: 'column' }} justifyContent={'space-between'} sx={{ width: '100%', height: '100%' }} >
                    <Stack justifyContent={'center'} gap={3} sx={{ width: { md: '50%', xs: '100%' }, p: 5, borderRight: '2px dashed', borderColor: theme.palette.primary.main, }}>
                        <Stack flexDirection={'row'} gap={2} >
                            <DottedButton text={'All'} />
                            <DottedButton text={'Men'} />
                            <DottedButton text={'Womens'} />
                            <DottedButton text={'Kids'} />
                        </Stack>
                        <Typography ref={header} variant="h2" sx={{ color: theme.palette.primary.contrastText, fontWeight: 'bold' }}>Elevate Your Style with StyleLoom</Typography>
                        <Typography ref={description} variant="body1">Explore a world of fashion at StyleLoom, where trends meet affordability. Immerse yourself in the latest styles and seize exclusive promotions.</Typography>
                    </Stack>
                    <Stack sx={{ width: { md: '50%', xs: '100%' }, minHeight: '100%' }}>
                        <Stack flexDirection={'row'} sx={{ height: '50%', textWrap: 'nowrap', borderBottom: '2px dashed', borderColor: theme.palette.primary.main, }}  >
                            <Stack justifyContent={'center'} sx={{
                                pl: 5, width: '50%', fontSize: '60px',
                                borderRight: '2px dashed', borderColor: theme.palette.primary.main,
                            }}>
                                <Typography sx={{ fontSize: "60px" }}><CountUp end={1500} duration={2} /> <span style={{ fontSize: '40px', fontWeight: 'bolder' }}>+</span></Typography>
                                <Typography variant="body1" sx={{ color: theme.palette.primary.dark, }}>Fashion Products</Typography>
                            </Stack>
                            <Stack justifyContent={'center'} sx={{ pl: 5, width: '50%', fontSize: '60px' }}>
                                <Typography sx={{ fontSize: "60px" }}><CountUp end={50} duration={2} /> <span style={{ fontSize: '40px', fontWeight: 'bolder' }}>+</span></Typography>
                                <Typography variant="body1" sx={{ color: theme.palette.primary.dark, }}>New arrivals every month.</Typography>
                            </Stack>
                        </Stack>
                        <Stack flexDirection={'row'} sx={{ height: '50%', textWrap: 'nowrap' }}  >
                            <Stack justifyContent={'center'} sx={{ pl: 5, width: '50%', fontSize: '60px', borderRight: '2px dashed', borderColor: theme.palette.primary.main, }}>
                                <Typography sx={{ fontSize: "60px" }}><CountUp end={30} duration={2} /> <span style={{ fontSize: '40px', fontWeight: 'bolder' }}>%</span></Typography>
                                <Typography variant="body1" sx={{ color: theme.palette.primary.dark, }}>OFF on select items.</Typography>
                            </Stack>
                            <Stack justifyContent={'center'} sx={{ pl: 5, width: '50%', fontSize: '60px' }}>
                                <Typography sx={{ fontSize: "60px" }}><CountUp end={95} duration={2} /> <span style={{ fontSize: '40px', fontWeight: 'bolder' }}>%</span></Typography>
                                <Typography variant="body1" sx={{ color: theme.palette.primary.dark, }}>Customer Satisfaction Rate</Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </Box>
        </Box >
    )
}

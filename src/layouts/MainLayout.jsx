import { Box, useTheme } from '@mui/material'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import React, { useRef } from 'react'
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const MainLayout = ({ children }) => {
    const theme = useTheme();
    return (
        <Box sx={{ bgcolor: theme.palette.background.default }}>
            < NavBar />
            {children}
            <Footer />
        </Box >
    );
}

export default MainLayout;

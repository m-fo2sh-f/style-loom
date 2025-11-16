import { Box, useTheme, Typography, Stack } from '@mui/material'
import React from 'react'
import icon from '../../assets/icons/Abstract Design.png'
import { steps } from '../../constants/homeConstant'
const Process = () => {
    const theme = useTheme()
    return (
        <Box sx={{
            mt: 5, width: '90%', mx: 'auto',
            border: '2px dashed', borderRadius: '15px', borderColor: theme.palette.primary.main
        }}>
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
                <Typography variant="h3" sx={{ fontSize: { xl: '40px', md: '30px', xs: '20px' } }} >Navigating the StyleLoom Fashion Journey.</Typography>
                <Typography variant="body2" sx={{ mt: 1.5, color: theme.palette.primary.dark }}>At StyleLoom, we've designed a straightforward shopping experience to make fashion accessible.</Typography>
            </Box>
            <Stack flexDirection={{ md: 'row', xs: 'column' }} sx={{ width: '100%' }}>
                {steps.map((step, index) => (
                    <Stack gap={3} p={5} sx={{
                        borderRightWidth: { md: index !== steps.length - 1 ? '2px dashed' : 'none', xs: '2px ' },
                        borderRightStyle: { md: 'dashed', xs: 'none' },
                        borderRightColor: { md: theme.palette.primary.main },
                        borderBottomWidth: { xs: index !== steps.length - 1 ? '2px dashed' : 'none', md: 0 },
                        borderBottomStyle: { xs: 'dashed', md: 'none' },
                        borderBottomColor: { xs: theme.palette.primary.main },
                        borderColor: theme.palette.primary.main
                    }}>
                        <Typography variant="body2" sx={{ color: theme.palette.primary.dark }}>Step 0{index + 1}</Typography>
                        <Typography variant="h5">{step.title}</Typography>
                        <Typography variant="body2" sx={{ color: theme.palette.primary.dark }}>{step.description}</Typography>
                    </Stack>
                ))}
            </Stack>
        </Box >
    )
}

export default Process
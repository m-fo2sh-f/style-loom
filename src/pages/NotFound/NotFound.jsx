
import { Box, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'

const NotFound = () => {
    const theme = useTheme()
    return (
        <Stack sx={{ bgcolor: theme.palette.background.default, height: '100vh' }}>
            <Typography variant='h2' align='center' sx={{ mt: '20vh', color: theme.palette.secondary.main }}>
                404
            </Typography>
            <Typography variant='h5' align='center' sx={{ color: theme.palette.secondary.main }}>
                Oops! The page you are looking for does not exist.
            </Typography>
            
        </Stack >
    )
}

export default NotFound
import { Box, Button, Stack, useTheme, Typography, IconButton } from '@mui/material'
import React, { useRef } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DottedButton from './DottedButton';


const NavBar = () => {

    const theme = useTheme()
    const [drawer, setDrawer] = React.useState(false);

    return (
        <Box className={'nav'} sx={{ bgcolor: theme.palette.background.default }}>
            <Stack sx={{ width: '90%', mx: 'auto', borderBottom: '2px dashed', borderColor: theme.palette.primary.main, paddingY: 2 }}
                direction="row" justifyContent="space-between" alignItems="center">
                <Stack direction={'row'} gap={2} sx={{ display: { md: 'flex', xs: 'none' } }} >
                    <Button sx={{
                        backgroundColor: theme.palette.primary.main,
                        color: theme.palette.primary.contrastText,
                        padding: "14px 20px",
                        borderRadius: "12px",
                        boxShadow: "none",
                        fontWeight: '400',
                        "&:hover": {
                            backgroundColor: theme.palette.secondary.main,
                            color: theme.palette.secondary.contrastText
                        }
                    }}
                        variant="contained">Home</Button>
                    <DottedButton text={'Products'} />
                </Stack>
                <Typography variant="h5" sx={{ color: theme.palette.primary.contrastText }}>Style<span style={{ color: theme.palette.secondary.main, fontSize: '30px' }}>.</span>Loom</Typography>
                <Stack direction={'row'} gap={2} sx={{ display: { md: 'flex', xs: 'none' } }} >

                    <Button sx={{
                        backgroundColor: 'transparent',
                        bgcolor: theme.palette.primary.main,
                        color: theme.palette.primary.contrastText,
                        padding: "14px 20px",
                        borderRadius: "12px",
                        boxShadow: "none",
                        fontWeight: '400',

                        "&:hover": {
                            backgroundColor: theme.palette.secondary.main,
                            color: theme.palette.secondary.contrastText,
                            borderColor: 'transparent'
                        }
                    }}
                    ><ShoppingCartIcon /></Button>
                    <Button sx={{
                        backgroundColor: 'transparent',
                        bgcolor: theme.palette.secondary.main,
                        color: theme.palette.secondary.contrastText,
                        padding: "14px 20px",
                        borderRadius: "12px",
                        boxShadow: "none",
                        fontWeight: '400',

                        "&:hover": {
                            backgroundColor: theme.palette.secondary.light,
                            color: theme.palette.secondary.contrastText,
                            borderColor: 'transparent'
                        }
                    }}
                    >Contact</Button>
                </Stack>
                {/* mobile */}
                <Button sx={{
                    display: { md: 'none', xs: 'flex' },
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'transparent',
                    bgcolor: theme.palette.secondary.main,
                    color: theme.palette.secondary.contrastText,
                    padding: "12px 5px",
                    borderRadius: "12px",
                    boxShadow: "none",
                    "&:hover": {
                        backgroundColor: theme.palette.secondary.light,
                        color: theme.palette.secondary.contrastText,
                        borderColor: 'transparent'
                    }
                }}
                    onClick={() => { setDrawer(true) }}>
                    <MenuIcon sx={{
                        fontWeight: 'bold',
                    }} />
                </Button>
                <Stack sx={{
                    zIndex: 5000,
                    borderRadius: '10px 0 10px 0',
                    position: 'fixed', right: '0', top: '0',
                    height: '100vh', width: drawer ? '50vw' : '0vh', bgcolor: theme.palette.primary.main,
                    transition: '0.3s'
                }}
                >
                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ p: 2, borderBottom: '2px dashed', borderColor: theme.palette.primary.dark }}>
                        <Typography variant="h5" sx={{ color: theme.palette.primary.contrastText }}>Navigation</Typography>
                        <IconButton onClick={() => { setDrawer(false) }}><CloseIcon sx={{ color: theme.palette.primary.contrastText, fontSize: '30px' }} /></IconButton>
                    </Stack>
                    <Stack>
                        <Stack sx={{
                            width: '100%', textAlign: 'left', p: '10px 20px', color: theme.palette.primary.contrastText, padding: 2,
                            transition: '0.3s',
                            '&:hover': {
                                backgroundColor: theme.palette.secondary.main, color: theme.palette.secondary.contrastText, cursor: 'pointer'
                            }
                        }} > Home</Stack>
                        <Stack sx={{
                            width: '100%', textAlign: 'left', p: '10px 20px', color: theme.palette.primary.contrastText, padding: 2,
                            transition: '0.3s',
                            '&:hover': {
                                backgroundColor: theme.palette.secondary.main, color: theme.palette.secondary.contrastText, cursor: 'pointer'
                            }
                        }} > Products</Stack>
                        <Stack sx={{
                            width: '100%', textAlign: 'left', p: '10px 20px', color: theme.palette.primary.contrastText, padding: 2,
                            transition: '0.3s',
                            '&:hover': {
                                backgroundColor: theme.palette.secondary.main, color: theme.palette.secondary.contrastText, cursor: 'pointer'
                            }
                        }} > Cart</Stack>
                        <Stack sx={{
                            width: '100%', textAlign: 'left', p: '10px 20px', color: theme.palette.primary.contrastText, padding: 2,
                            transition: '0.3s',
                            '&:hover': {
                                backgroundColor: theme.palette.secondary.main, color: theme.palette.secondary.contrastText, cursor: 'pointer'
                            }
                        }} > Contact</Stack>
                    </Stack>

                </Stack>
            </Stack >
        </Box >
    )
}

export default NavBar
import { Avatar, Box, Button, Rating, Stack, Typography, useTheme } from '@mui/material'
import DottedButton from './DottedButton'
import React, { useState } from 'react'
import logo from '../assets/icons/Abstract Design3.png'
import TwitterIcon from '@mui/icons-material/Twitter';

const Comments = () => {
    const theme = useTheme()
    const [more, setMore] = useState(false)

    return (
        <Box sx={{ mt: 5, width: '90%', mx: 'auto', border: '2px dashed', borderColor: theme.palette.primary.main, borderRadius: '15px' }}>
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
                <Typography variant="h3" sx={{ fontSize: { xl: '40px', md: '30px', xs: '20px' } }} >The StyleLoom Testimonial Collection.</Typography>
                <Typography variant="body2" sx={{ mt: 1.5, color: theme.palette.primary.dark }}>At StyleLoom, our customers are the heartbeat of our brand.</Typography>

            </Box>


            <Stack flexDirection={{ md: 'row', xs: 'column' }}
                sx={{
                    borderBottomWidth: { md: '2px', xs: 0 },
                    borderBottomStyle: { md: 'dashed', xs: 'none' },
                    borderBottomColor: { md: theme.palette.primary.main },
                }}
            >
                <Stack flexDirection={{ md: 'row', xs: 'column' }}
                    sx={{
                        borderBottomWidth: { md: '2px', xs: 0 },
                        borderBottomStyle: { md: 'dashed', xs: 'none' },
                        borderBottomColor: { md: theme.palette.primary.main },
                    }}
                >
                    <Stack
                        gap={3}
                        sx={{
                            borderRightWidth: { md: '2px', xs: 0 },
                            borderRightStyle: { md: 'dashed', xs: 'none' },
                            borderRightColor: { md: theme.palette.primary.main },
                            borderBottomWidth: { xs: '2px', md: 0 },
                            borderBottomStyle: { xs: 'dashed', md: 'none' },
                            borderBottomColor: { xs: theme.palette.primary.main },
                            overflow: 'hidden',
                            position: 'relative', flex: "1 1 33.33%",
                            padding: 3,
                        }}>
                        <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                            <Stack justifyContent={'space-between'} alignItems={'center'} flexDirection={'row'}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                <Box sx={{ ml: 2 }}>
                                    <Typography variant="h6" sx={{ color: theme.palette.primary.contrastText }} >name 1</Typography>
                                    <Typography variant="body2">address</Typography>
                                </Box>
                            </Stack>
                            <TwitterIcon sx={{ color: 'red' }} />
                        </Stack>
                        <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                        <Typography variant="body2" sx={{ color: theme.palette.primary.dark }}>StyleLoom exceeded my expectations. The gown's quality and design made me feel like a queen. Fast shipping, too!</Typography>
                    </Stack>
                </Stack>
                <Stack flexDirection={{ md: 'row', xs: 'column' }}
                    sx={{
                        borderBottomWidth: { md: '2px', xs: 0 },
                        borderBottomStyle: { md: 'dashed', xs: 'none' },
                        borderBottomColor: { md: theme.palette.primary.main },
                    }}
                >
                    <Stack
                        gap={3}
                        sx={{
                            borderRightWidth: { md: '2px', xs: 0 },
                            borderRightStyle: { md: 'dashed', xs: 'none' },
                            borderRightColor: { md: theme.palette.primary.main }, // هنا اللون اللي انت عايزه
                            borderBottomWidth: { xs: '2px', md: 0 },
                            borderBottomStyle: { xs: 'dashed', md: 'none' },
                            borderBottomColor: { xs: theme.palette.primary.main },
                            overflow: 'hidden',
                            position: 'relative', flex: "1 1 33.33%",
                            padding: 3,
                        }}>
                        <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                            <Stack justifyContent={'space-between'} alignItems={'center'} flexDirection={'row'}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                <Box sx={{ ml: 2 }}>
                                    <Typography variant="h6" >name 1</Typography>
                                    <Typography variant="body2">address</Typography>
                                </Box>
                            </Stack>
                            <TwitterIcon sx={{ color: 'red' }} />
                        </Stack>
                        <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                        <Typography variant="body2" sx={{ color: theme.palette.primary.dark }}>StyleLoom exceeded my expectations. The gown's quality and design made me feel like a queen. Fast shipping, too!</Typography>
                    </Stack>
                </Stack>
                <Stack flexDirection={{ md: 'row', xs: 'column' }}
                    sx={{
                        borderBottomWidth: { md: '2px', xs: 0 },
                        borderBottomStyle: { md: 'dashed', xs: 'none' },
                        borderBottomColor: { md: theme.palette.primary.main },
                    }}
                >
                    <Stack
                        gap={3}
                        sx={{
                            borderRightWidth: { md: '2px', xs: 0 },
                            borderRightStyle: { md: 'dashed', xs: 'none' },
                            borderRightColor: { md: theme.palette.primary.main }, // هنا اللون اللي انت عايزه
                            borderBottomWidth: { xs: '2px', md: 0 },
                            borderBottomStyle: { xs: 'dashed', md: 'none' },
                            borderBottomColor: { xs: theme.palette.primary.main },
                            overflow: 'hidden',
                            position: 'relative', flex: "1 1 33.33%",
                            padding: 3,
                        }}>
                        <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                            <Stack justifyContent={'space-between'} alignItems={'center'} flexDirection={'row'}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                <Box sx={{ ml: 2 }}>
                                    <Typography variant="h6" >name 1</Typography>
                                    <Typography variant="body2">address</Typography>
                                </Box>
                            </Stack>
                            <TwitterIcon sx={{ color: 'red' }} />
                        </Stack>
                        <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                        <Typography variant="body2" sx={{ color: theme.palette.primary.dark }}>StyleLoom exceeded my expectations. The gown's quality and design made me feel like a queen. Fast shipping, too!</Typography>
                    </Stack>
                </Stack>
            </Stack>
            <Stack flexDirection={{ md: 'row', xs: 'column' }} sx={{
                height: { md: 'auto', xs: more ? 'auto' : '0' },
                display: { md: 'flex', xs: more ? 'flex' : 'none' },
            }}>
                <Stack flexDirection={{ md: 'row', xs: 'column' }}
                    sx={{
                        borderBottomWidth: { md: '2px', xs: 0 },
                        borderBottomStyle: { md: 'dashed', xs: 'none' },
                        borderBottomColor: { md: theme.palette.primary.main },
                    }}
                >
                    <Stack
                        gap={3}
                        sx={{
                            borderRightWidth: { md: '2px', xs: 0 },
                            borderRightStyle: { md: 'dashed', xs: 'none' },
                            borderRightColor: { md: theme.palette.primary.main }, // هنا اللون اللي انت عايزه
                            borderBottomWidth: { xs: '2px', md: 0 },
                            borderBottomStyle: { xs: 'dashed', md: 'none' },
                            borderBottomColor: { xs: theme.palette.primary.main },
                            overflow: 'hidden',
                            position: 'relative', flex: "1 1 33.33%",
                            padding: 3,
                        }}>
                        <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                            <Stack justifyContent={'space-between'} alignItems={'center'} flexDirection={'row'}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                <Box sx={{ ml: 2 }}>
                                    <Typography variant="h6" >name 1</Typography>
                                    <Typography variant="body2">address</Typography>
                                </Box>
                            </Stack>
                            <TwitterIcon sx={{ color: 'red' }} />
                        </Stack>
                        <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                        <Typography variant="body2" sx={{ color: theme.palette.primary.dark }}>StyleLoom exceeded my expectations. The gown's quality and design made me feel like a queen. Fast shipping, too!</Typography>
                    </Stack>
                </Stack>
                <Stack flexDirection={{ md: 'row', xs: 'column' }}
                    sx={{
                        borderBottomWidth: { md: '2px', xs: 0 },
                        borderBottomStyle: { md: 'dashed', xs: 'none' },
                        borderBottomColor: { md: theme.palette.primary.main },
                    }}
                >
                    <Stack
                        gap={3}
                        sx={{
                            borderRightWidth: { md: '2px', xs: 0 },
                            borderRightStyle: { md: 'dashed', xs: 'none' },
                            borderRightColor: { md: theme.palette.primary.main }, // هنا اللون اللي انت عايزه
                            borderBottomWidth: { xs: '2px', md: 0 },
                            borderBottomStyle: { xs: 'dashed', md: 'none' },
                            borderBottomColor: { xs: theme.palette.primary.main },
                            overflow: 'hidden',
                            position: 'relative', flex: "1 1 33.33%",
                            padding: 3,
                        }}>
                        <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                            <Stack justifyContent={'space-between'} alignItems={'center'} flexDirection={'row'}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                <Box sx={{ ml: 2 }}>
                                    <Typography variant="h6" >name 1</Typography>
                                    <Typography variant="body2">address</Typography>
                                </Box>
                            </Stack>
                            <TwitterIcon sx={{ color: 'red' }} />
                        </Stack>
                        <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                        <Typography variant="body2" sx={{ color: theme.palette.primary.dark }}>StyleLoom exceeded my expectations. The gown's quality and design made me feel like a queen. Fast shipping, too!</Typography>
                    </Stack>
                </Stack>
                <Stack flexDirection={{ md: 'row', xs: 'column' }}
                    sx={{
                        borderBottomWidth: { md: '2px', xs: 0 },
                        borderBottomStyle: { md: 'dashed', xs: 'none' },
                        borderBottomColor: { md: theme.palette.primary.main },
                    }}
                >
                    <Stack
                        gap={3}
                        sx={{
                            borderRightWidth: { md: '2px', xs: 0 },
                            borderRightStyle: { md: 'dashed', xs: 'none' },
                            borderRightColor: { md: theme.palette.primary.main }, // هنا اللون اللي انت عايزه
                            borderBottomWidth: { xs: '2px', md: 0 },
                            borderBottomStyle: { xs: 'dashed', md: 'none' },
                            borderBottomColor: { xs: theme.palette.primary.main },
                            overflow: 'hidden',
                            position: 'relative', flex: "1 1 33.33%",
                            padding: 3,
                        }}>
                        <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                            <Stack justifyContent={'space-between'} alignItems={'center'} flexDirection={'row'}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                <Box sx={{ ml: 2 }}>
                                    <Typography variant="h6" >name 1</Typography>
                                    <Typography variant="body2">address</Typography>
                                </Box>
                            </Stack>
                            <TwitterIcon sx={{ color: 'red' }} />
                        </Stack>
                        <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                        <Typography variant="body2" sx={{ color: theme.palette.primary.dark }}>StyleLoom exceeded my expectations. The gown's quality and design made me feel like a queen. Fast shipping, too!</Typography>
                    </Stack>
                </Stack>
            </Stack>


            <Button
                onClick={() => {
                    setMore(!more)
                }}
                sx={{
                    display: { md: 'none', xs: 'block' },
                    py: 2, width: '100%',
                    textAlign: 'center', borderTop: '2px dashed', borderColor: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText
                }}>
                {more ? 'View Less' : 'View All'}
            </Button>

        </Box>
    )
}

export default Comments
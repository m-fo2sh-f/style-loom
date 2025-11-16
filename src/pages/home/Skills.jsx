import { Box, Stack, useTheme, Typography, Button } from '@mui/material'
import React, { useState } from 'react'
import { firstRow } from '../../constants/homeConstant'
import { secondRow } from '../../constants/homeConstant'
import { Description } from '@mui/icons-material'
export const Skills = () => {
    const theme = useTheme()
    const [more, setMore] = useState(false)

    return (
        <Box sx={{ mt: 5, width: '90%', mx: 'auto', border: '2px dashed', borderRadius: '15px', borderColor: theme.palette.primary.main, }}>
            <Stack sx={{ width: '100%', }} >
                <Box sx={{
                    width: '100%',
                    p: 5,
                    borderBottom: '2px dashed', borderColor: theme.palette.primary.main,
                }}>
                    <Typography variant="h3" sx={{ fontSize: { xl: '40px', md: '30px', xs: '20px' } }} >Crafting Trends, Inspiring Confidence</Typography>
                    <Typography variant="body2" sx={{ mt: 1.5, color: theme.palette.primary.dark }}>Explore a world of fashion at StyleLoom, where trends meet affordability.</Typography>
                </Box>

                <Stack flexDirection={'column'}>
                    <Stack flexDirection={{ md: 'row', xs: 'column' }}
                        sx={{
                            borderBottomWidth: { md: '2px', xs: 0 },
                            borderBottomStyle: { md: 'dashed', xs: 'none' },
                            borderBottomColor: { md: theme.palette.primary.main },
                        }}
                    >
                        {firstRow.map((sec, index) => (
                            <Stack
                                key={index}
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
                                <Box
                                    component='img'
                                    src={sec.logo}
                                    sx={{ width: '50px', height: '50px' }}
                                />
                                <Box
                                    component='img'
                                    src={sec.icon}
                                    sx={{ width: '200px', height: '200px', position: 'absolute', right: -50, top: -40 }}
                                />
                                <Typography variant="h5">{sec.title}</Typography>
                                <Typography variant="body2" sx={{ color: theme.palette.primary.dark }}>{sec.description}</Typography>
                            </Stack>
                        ))}
                    </Stack>
                    <Stack flexDirection={{ md: 'row', xs: 'column' }} sx={{ height: { md: 'auto', xs: more ? 'auto' : '0' } }}>
                        {secondRow.map((sec, index) => (
                            <Stack
                                key={index}
                                gap={3}
                                sx={{
                                    display: { md: 'flex', xs: more ? 'flex' : 'none' },
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
                                <Box
                                    component='img'
                                    src={sec.logo}
                                    sx={{ width: '50px', height: '50px' }}
                                />
                                <Box
                                    component='img'
                                    src={sec.icon}
                                    sx={{ width: '200px', height: '200px', position: 'absolute', right: -50, top: -40 }}
                                />
                                <Typography variant="h5">{sec.title}</Typography>
                                <Typography variant="body2" sx={{ color: theme.palette.primary.dark }}>{sec.description}</Typography>
                            </Stack>
                        ))}
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
        </Box >

    )
}

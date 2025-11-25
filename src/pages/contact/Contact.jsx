import { Box, Stack, Typography, useTheme } from '@mui/material'
import React, { use } from 'react'
import icon from '../../assets/icons/Group.png'
import { cancillation, contactInformation, returnInformation } from '../../constants/ContactConstant'

import SpecialButton from '../../components/SpecialButton'
const Contact = () => {
    const theme = useTheme();
    return (
        <>
            <Typography variant='h2' sx={{ mt: 5, textAlign: 'center', color: theme.palette.primary.contrastText }}>Contacts</Typography>

            <Box sx={{ width: '90%', mx: 'auto', border: '2px dashed', borderColor: theme.palette.primary.main, borderRadius: '10px', mt: 5 }}>

                <Box
                    sx={{
                        position: 'relative', p: 5, overflow: 'hidden',
                        borderBottom: '2px dashed', borderColor: theme.palette.primary.main
                    }}>
                    <Box
                        component='img'
                        src={icon}
                        sx={{
                            width: '300px', height: '300px',
                            position: 'absolute',
                            top: -70,
                            right: -70,
                            display: { md: 'block', xs: 'none' }
                        }}
                    />
                    <Typography variant="h3" sx={{ color: theme.palette.primary.contrastText, fontSize: { xl: '40px', md: '30px', xs: '20px' } }} >Your Partner in Every Step of Your Fashion Journey.</Typography>
                    <Typography variant="body2" sx={{ mt: 1.5, color: theme.palette.primary.dark }}>24/7 Assistance for Seamless Shopping and Unmatched Customer Satisfaction.</Typography>
                </Box>
                <Box
                    sx={{
                        position: 'relative', p: 5, overflow: 'hidden',
                        borderBottom: '2px dashed', borderColor: theme.palette.primary.main
                    }}>
                    <Typography variant="h4" sx={{ color: theme.palette.primary.contrastText, }} >Contact Information</Typography>
                </Box>
                <Stack
                    flexDirection={{ md: 'row', xs: 'column' }}
                    sx={{
                        borderBottomWidth: { md: '2px', xs: 0 },
                        borderBottomStyle: { md: 'dashed', xs: 'none' },
                        borderBottomColor: { md: theme.palette.primary.main },
                    }}
                >
                    {contactInformation.map((sec, index) => (
                        <Stack
                            justifyContent={'center'} alignItems={'center'}
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
                                padding: 5, textAlign: 'center'
                            }}>
                            <Box
                                component='img'
                                src={sec.logo}
                                sx={{ width: '80px', height: '80px' }}
                            />
                            <Box
                                component='img'
                                src={sec.icon}
                                sx={{ display: { md: 'block', xs: 'none' }, width: { lg: '200px', md: '150px' }, height: { lg: '200px', md: '150px' }, position: 'absolute', right: -20, top: -30 }}
                            />
                            <Typography variant="h5" sx={{ color: theme.palette.primary.contrastText }}>{sec.title}</Typography>
                            <Box>
                                <SpecialButton text={sec.description} height={'50px'} mt={undefined} width={undefined} arrow={false} />
                            </Box>
                        </Stack>
                    ))}
                </Stack>
            </Box >
            <Box sx={{ width: '90%', mx: 'auto', border: '2px dashed', borderColor: theme.palette.primary.main, borderRadius: '10px', mt: 5 }}>
                <Stack
                    flexDirection={{ md: 'row', xs: 'column' }} justifyContent={'space-between'} alignItems={'center'} gap={2}
                    sx={{
                        position: 'relative', p: 5, overflow: 'hidden',
                        borderBottom: '2px dashed', borderColor: theme.palette.primary.main
                    }}>
                    <Typography variant="h4" sx={{ color: theme.palette.primary.contrastText, }} >Return Policy</Typography>
                    <SpecialButton text={"Read Return Policy"} height={'50px'} mt={2} width={undefined} arrow={true} />
                </Stack>
                <Stack
                    flexDirection={{ md: 'row', xs: 'column' }}
                    sx={{
                        borderBottomWidth: { md: '2px', xs: 0 },
                        borderBottomStyle: { md: 'dashed', xs: 'none' },
                        borderBottomColor: { md: theme.palette.primary.main },
                    }}
                >
                    {returnInformation.map((sec, index) => (
                        <Stack
                            flexDirection={'row'}
                            alignItems={'center'}
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
                                padding: 5,
                            }}>
                            <Box
                                component='img'
                                src={sec.icon}
                                sx={{ width: '80px', height: '80px' }}
                            />

                            <Box>
                                <Typography variant="h5" sx={{ color: theme.palette.primary.contrastText }}>{sec.title}</Typography>
                                <Typography variant="body2" sx={{ mt: 1.5, color: theme.palette.primary.dark }}>{sec.description}</Typography>
                            </Box>
                        </Stack>
                    ))}
                </Stack>
            </Box>
            <Box sx={{ width: '90%', mx: 'auto', border: '2px dashed', borderColor: theme.palette.primary.main, borderRadius: '10px', mt: 5 }}>
                <Stack
                    flexDirection={{ md: 'row', xs: 'column' }} justifyContent={'space-between'} alignItems={'center'} gap={2}
                    sx={{
                        position: 'relative', p: 5, overflow: 'hidden',
                        borderBottom: '2px dashed', borderColor: theme.palette.primary.main
                    }}>
                    <Typography variant="h4" sx={{ color: theme.palette.primary.contrastText, }} >Cancellation Policy</Typography>
                    <SpecialButton text={"Read Cancellation Policy"} height={'50px'} mt={2} width={undefined} arrow={true} />
                </Stack>
                <Stack
                    flexDirection={{ md: 'row', xs: 'column' }}
                    sx={{
                        borderBottomWidth: { md: '2px', xs: 0 },
                        borderBottomStyle: { md: 'dashed', xs: 'none' },
                        borderBottomColor: { md: theme.palette.primary.main },
                    }}
                >
                    {cancillation.map((sec, index) => (
                        <Stack
                            flexDirection={'row'}
                            alignItems={'center'}
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
                                padding: 5,
                            }}>
                            <Box
                                component='img'
                                src={sec.icon}
                                sx={{ width: '80px', height: '80px' }}
                            />

                            <Box>
                                <Typography variant="h5" sx={{ color: theme.palette.primary.contrastText }}>{sec.title}</Typography>
                                <Typography variant="body2" sx={{ mt: 1.5, color: theme.palette.primary.dark }}>{sec.description}</Typography>
                            </Box>
                        </Stack>
                    ))}
                </Stack>
            </Box>
        </>
    )
}

export default Contact
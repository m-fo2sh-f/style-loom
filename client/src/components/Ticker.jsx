import { Box, Stack, Typography, useTheme } from "@mui/material";
import Marquee from "react-fast-marquee";
import icon from '../assets/icons/Clip path group.png'
import { offers } from '../constants/HomeConstant'
export default function Ticker() {
    const theme = useTheme()
    return (
        <Box sx={{ mt: 5, borderTop: '2px dashed', borderBottom: '2px dashed', borderColor: theme.palette.primary.main, py: 4 }}>
            <Marquee speed={40} gradient={false} pauseOnHover={true} autoFill={true}>
                {offers.map((of, index) => (
                    <Stack key={index} flexDirection={'row'} alignItems={'center'}
                        component="span" sx={{ mr: 5 }}>
                        <Box
                            component='img'
                            src={icon}
                            sx={{ width: '50px', height: '50px' }}
                        />
                        <Typography variant="h6" sx={{ color: theme.palette.primary.contrastText }} >{of}</Typography>
                        <Box
                            component='img'
                            src={icon}
                            sx={{ width: '50px', height: '50px' }}
                        />
                    </Stack>
                ))}


            </Marquee>
        </Box>
    );
}
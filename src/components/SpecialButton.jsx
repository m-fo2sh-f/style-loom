import { Box, useTheme } from '@mui/material'
import React from 'react'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const SpecialButton = ({ text, height, mt, width }) => {
    const theme = useTheme()
    return (
        <Box sx={{
            position: 'relative', bgcolor: theme.palette.primary.main, color: theme.palette.primary.contrastText,
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            borderRadius: '12px', px: 2, height: { height }, width: { width },
            cursor: 'pointer',
            border: '1px dashed', borderColor: theme.palette.primary.dark,
            fontSize: { md: '18px', sm: '18px', xs: '13px' },
            fontWeight: '400',
            mt: { mt },
            textWrap: 'nowrap',
            "&:hover": {
                backgroundColor: theme.palette.secondary.light,
                color: theme.palette.secondary.contrastText,
                borderColor: 'transparent'
            }

        }}>
            {text}<ArrowOutwardIcon sx={{ ml: 1 }} />
            < span style={{
                borderTopLeftRadius: '12px',
                width: '15px', height: '15px',
                position: 'absolute', top: '-1px', left: '-.5px',
                borderTop: '1px solid', borderLeft: '1px solid', borderColor: theme.palette.secondary.main
            }}></ span>
            <span style={{
                borderTopRightRadius: '12px',
                width: '12px', height: '12px',
                position: 'absolute', top: '-1px', right: '-.5px',
                borderTop: '1px solid', borderRight: '1px solid', borderColor: theme.palette.secondary.main
            }}></span>
            <span style={{
                borderBottomRightRadius: '12px',
                width: '12px', height: '12px',
                position: 'absolute', bottom: '-1px', right: '-.5px',
                borderBottom: '1px solid', borderRight: '1px solid', borderColor: theme.palette.secondary.main
            }}></span>
            <span style={{
                borderBottomLeftRadius: '12px',
                width: '12px', height: '12px',
                position: 'absolute', bottom: '-1px', left: '-.5px',
                borderLeft: '1px solid', borderBottom: '1px solid', borderColor: theme.palette.secondary.main
            }}></span>

        </Box >
    )
}

export default SpecialButton
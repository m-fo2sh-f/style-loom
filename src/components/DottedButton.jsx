
import { Button, useTheme } from '@mui/material'
import React from 'react'

export default function DottedButton({ text }) {
    const theme = useTheme()
    return (
        <Button sx={{
            backgroundColor: 'transparent',
            border: '2px dashed',
            borderColor: theme.palette.primary.main,
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
        >{text}</Button>
    )
}

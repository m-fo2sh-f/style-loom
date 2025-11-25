import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert'; // اختياري لشكل أحلى
import { useTheme } from '@mui/material';


export default function SnackBar({ open, message, handleClose }) {
    const theme = useTheme()
    return (
        <div>
            <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} // مكان الظهور
            >
                <Alert
                    onClose={handleClose}
                    // هنا النوع (أخضر، أحمر، أزرق)
                    variant="filled" // 3. دي أهم حتة: بتخليه لونه قوي
                    sx={{
                        bgcolor: theme.palette.secondary.main,
                        color: theme.palette.secondary.contrastText,
                        width: '100%',
                        boxShadow: 3, // ظل خفيف
                        fontSize: '1rem', // تكبير الخط سنة
                        fontWeight: 'bold',
                        borderRadius: '8px' // تدوير الحواف
                    }}>
                    {message}
                </Alert>
            </Snackbar>
        </div>
    );
}
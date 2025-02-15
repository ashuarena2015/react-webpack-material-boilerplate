import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { globalSnackbarMessage } from '../../redux/reducers/global';

export default function SimpleSnackbar(props) {


    const { show, snackbarInfo, setShowSnackbar } = props;

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setShowSnackbar(false);
        globalSnackbarMessage({ isReset: true })
    };

    return (
        <Snackbar open={show} autoHideDuration={6000} onClose={handleClose}>
            <Alert
                onClose={handleClose}
                severity={snackbarInfo?.msgType}
                variant="filled"
                sx={{ width: '100%' }}
            >
                {snackbarInfo?.message}
            </Alert>
        </Snackbar>
    );
}

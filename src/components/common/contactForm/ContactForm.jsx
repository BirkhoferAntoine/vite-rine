import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
    TextField,
    Button,
    Container,
    Typography,
    Snackbar,
    Alert,
} from '@mui/material';
import './ContactForm.css';

function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
        severity: 'info',
    });

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbar({ ...snackbar, open: false });
    };

    const handleServerError = () => {
        setSnackbar({
            open: true,
            message:
                'My server is currently experiencing issues. Your message is important to me. Please try again or contact me through birkhoferantoine@gmail.com.',
            severity: 'error',
        });
    };

    const handleClientError = () => {
        setSnackbar({
            open: true,
            message: "Oops! Your message couldn't be sent. Please try again.",
            severity: 'error',
        });
    };

    const handleFormSuccess = () => {
        setSnackbar({
            open: true,
            message:
                "Your message has been sent successfully! I'll get back to you soon.",
            severity: 'success',
        });
    };

    const onSubmit = async (data) => {
        console.log('=>(ContactForm.jsx:13) data', data);
        try {
            fetch(
                'https://us-central1-viterine-3fbfd.cloudfunctions.net/sendEmail', //http://127.0.0.1:5001/viterine-3fbfd/us-central1/sendEmail
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8',
                    },
                    body: JSON.stringify(data),
                }
            )
                .then((response) => response.text())
                .then((data) => {
                    console.log(data);
                    handleFormSuccess();
                    reset();
                })
                .catch((error) => {
                    console.error('Error:', error);
                    handleServerError();
                });
        } catch (error) {
            console.error('There was an error sending the email', error);
            handleServerError();
        }
    };

    return (
        <Container maxWidth="sm" className={'contact-form-container'}>
            <Typography m={2} variant="h5" align="center">
                Contact me if you want to know more
            </Typography>
            <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className={'contact-form'}
            >
                <TextField
                    variant="outlined"
                    size="small"
                    margin="dense"
                    required
                    fullWidth
                    id="subject"
                    label="Subject"
                    name="subject"
                    {...register('subject', {
                        required: 'Subject is required',
                    })}
                    error={Boolean(errors.subject)}
                    helperText={errors.subject?.message}
                />
                <TextField
                    variant="outlined"
                    size="small"
                    margin="dense"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    type="email"
                    {...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: 'Invalid email address',
                        },
                    })}
                    error={Boolean(errors.email)}
                    helperText={errors.email?.message}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    size="normal"
                    required
                    fullWidth
                    multiline
                    rows={6}
                    id="message"
                    label="Message"
                    name="message"
                    {...register('message', {
                        required: 'Message is required',
                    })}
                    error={Boolean(errors.message)}
                    helperText={errors.message?.message}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    sx={{ mt: 3 }}
                >
                    Send
                </Button>
            </form>
            <Snackbar
                open={snackbar.open}
                autoHideDuration={6000}
                onClose={handleClose}
            >
                <Alert
                    onClose={handleClose}
                    severity={snackbar.severity}
                    sx={{
                        width: '100%',
                        borderColor: 'transparent',
                        color: 'white',
                    }}
                    variant="filled"
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </Container>
    );
}

export default ContactForm;

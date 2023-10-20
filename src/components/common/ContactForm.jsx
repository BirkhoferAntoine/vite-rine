import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Container, Typography } from '@mui/material';

function ContactForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await fetch('/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                console.log('Email sent successfully');
            } else {
                console.error('Error sending email');
            }
        } catch (error) {
            console.error('There was an error sending the email', error);
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <Typography variant="h5" align="center">Contact Me</Typography>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    name="name"
                    {...register('name', { required: "Name is required" })}
                    error={Boolean(errors.name)}
                    helperText={errors.name?.message}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    type="email"
                    {...register('email', { required: "Email is required", pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: "Invalid email address" } })}
                    error={Boolean(errors.email)}
                    helperText={errors.email?.message}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    multiline
                    rows={4}
                    id="message"
                    label="Message"
                    name="message"
                    {...register('message', { required: "Message is required" })}
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
        </Container>
    );
}

export default ContactForm;
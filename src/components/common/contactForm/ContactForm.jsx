import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Container, Typography } from '@mui/material';
import './ContactForm.css';
import { initializeApp } from '@firebase/app';
import { getFunctions } from '@firebase/functions';

const firebaseConfig = {
    // your firebase config here
};

const app = initializeApp(firebaseConfig);
const functionsInstance = getFunctions(app);

function ContactForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        console.log("=>(ContactForm.jsx:13) data", data);
        try {
            const formData = {
                name: 'John Doe',
                message: 'Hello, Firebase!'
            };

            fetch('https://us-central1-viterine-3fbfd.cloudfunctions.net/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })
                .then(response => response.text())
                .then(data => console.log(data))
                .catch((error) => console.error('Error:', error));
        } catch (error) {
            console.error('There was an error sending the email', error);
        }
    };

    return (
        <Container maxWidth="sm" className={'contact-form-container'}>
            <Typography m={2} variant="h5" align="center">Contact me if you want to know more</Typography>
            <form onSubmit={handleSubmit(onSubmit)} noValidate className={'contact-form'} >
                <TextField
                    variant="outlined"
                    size='small'
                    margin="small"
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
                    size='small'
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
                    size='normal'
                    required
                    fullWidth
                    multiline
                    rows={6}
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
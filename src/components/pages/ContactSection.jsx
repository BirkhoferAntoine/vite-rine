import React from 'react';
import {Button, Card, Container, Paper, Typography} from "@mui/material";

const ContactSection = () => {

    const sxStyles = {
        contactBtn: {

        },
        contactRedBtn: {
            padding: '5rem',
            borderRadius: '50%',
        },
        contactTypo: {
            color: 'var(--color-primary)',
            fontFamily: 'Beth Ellen',
            fontSize: '2rem',
            lineHeight: 1,
            fontWeight: '400',

            WebkitTextStrokeWidth: '2px',
            WebkitTextStrokeColor: 'var(--bg-color-default)',
        },
    };

    return (
        <section id={'contact-section'}>
            {/*<Typography variant={'h1'}>Contact</Typography>*/}
            <Container className={'contact-container'}>
                <Paper className={'contact-paper'}>
                    <Card className={'contact-box'}>
                        <Typography sx={sxStyles.contactTypo} variant={'h4'} className={'contact-typography'}>
                            Contact me
                        </Typography>
                        <Button sx={sxStyles.contactRedBtn} variant={'contained'} className={'contact-btn'} color={'warning'}></Button>
                    </Card>
                </Paper>
            </Container>
        </section>
    );
};

export default ContactSection;

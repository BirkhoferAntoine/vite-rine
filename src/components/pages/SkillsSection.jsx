import React from 'react';
import {Box, Paper} from "@mui/material";

const SkillsSection = () => {
    return (
        <section id={'skill-section'}>
            {/*<Typography variant={'h1'}>Skills</Typography>*/}
            <Paper sx={{width: '100%', height:'70vh', display: 'flex', justifyContent:'center', alignItems:'center'}}>
                <Box className={'bg-design-container-center'}>
                    <Paper elevation={1} className={'paper-circle shadow-highlight'}>
                        <Box className={'inner-circle shadow-highlight'}></Box>
                    </Paper>
                </Box>
                {/*<OrbTextTwo/>*/}
            </Paper>
        </section>

    );
};

export default SkillsSection;

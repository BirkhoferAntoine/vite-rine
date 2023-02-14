import * as React from 'react';
import {
    Box,
    Stepper,
    Step,
    StepButton,
    Button,
    Typography,
} from '@mui/material';


const sxStyles = {
    stepperContainer: {
        position: 'fixed',
        top: '200px',
        left: '112px',
        zIndex: '9999',
        display: 'flex',
        flexDirection: 'column',

    },
    stepperPrevNextContainer: {
        transform: 'rotate(270deg)',
    },
}

const steps = ['Home', 'About me', 'Works', 'Skills', 'Contact'];

const NavigationStepper = () => {

    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState({});

    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? // It's the last step, but not all steps have been completed,
                  // find the first step that has been completed
                steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step) => () => {
        setActiveStep(step);
    };


    return (
        <Box sx={sxStyles.stepperContainer}>
            <Box sx={sxStyles.stepperPrevNextContainer}>
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Button
                        color="inherit"
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        sx={{ mr: 1 }}
                    >
                        Back
                    </Button>
                    <Box sx={{ flex: '1 1 auto' }} />
                    <Button onClick={handleNext} sx={{ mr: 1 }}>
                        Next
                    </Button>
                </Box>
            </Box>
            <Stepper orientation={'vertical'} nonLinear activeStep={activeStep}>
                {steps.map((label, index) => (
                    <Step key={'step-'+label} completed={completed[index]}>
                        <StepButton color="inherit" onClick={handleStep(index)}>
                            {label}
                        </StepButton>
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
};

export default NavigationStepper;




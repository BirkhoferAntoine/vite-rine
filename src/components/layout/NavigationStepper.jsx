import * as React from 'react';
import {
    Box,
    Stepper,
    Step,
    StepButton,
    Button,
    Typography, StepLabel,
} from '@mui/material';
import NavigateBeforeSharpIcon from '@mui/icons-material/NavigateBeforeSharp';
import NavigateNextSharpIcon from '@mui/icons-material/NavigateNextSharp';
import OfflineBoltSharpIcon from '@mui/icons-material/OfflineBoltSharp';

const sxStyles = {
    stepperContainer: {
        position: 'fixed',
        top: '30vh',
        left: '-2rem',
        height: '40vh',
        zIndex: '9999',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        textShadow: '0px 0px 15px #FCD81C',
    },
    stepperPrevNextContainer: {
        transform: 'rotate(90deg)',
        height: '2.5em',
        mr: '-2em',
    },
}

const steps         = [
    {label: 'Home', target: 'root'},
    {label: 'About me', target: 'about-section'},
    /*{label: 'Works', target: 'work-section'},*/
    {label: 'Skills', target: 'skill-section'},
    {label: 'Contact', target: 'contact-section'}
];
const stepsLabel    = [
    'root',
    'about-section',
    /*'work-section',*/
    'skill-section',
    'contact-section'
];

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

    const handleStep = (step, target) => () => {
        setActiveStep(step);
        document.querySelector('#'+target).scrollIntoView({behavior: "smooth"});
    };

    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? // It's the last step, but not all steps have been completed,
                  // find the first step that has been completed
                steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
        document.querySelector('#'+steps[newActiveStep].target).scrollIntoView({behavior: "smooth"});
    };

    const handleBack = () => {
        const newActiveStep = activeStep === 0 ? 0 : activeStep-1;
        setActiveStep(newActiveStep);
        document.querySelector('#'+steps[newActiveStep].target).scrollIntoView({behavior: "smooth"});
    };


    return (
        <Box sx={sxStyles.stepperContainer}>
            <Box sx={sxStyles.stepperPrevNextContainer}>
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Button
                        className={'stepper-btn'}
                        color="inherit"
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        sx={{ mr: 1 }}
                    >
                        <NavigateBeforeSharpIcon/>
                    </Button>
                    <Box sx={{ flex: '1 1 auto' }} />
                    <Button
                        className={'stepper-btn'}
                        onClick={handleNext} sx={{ mr: 1 }}>
                        <NavigateNextSharpIcon/>
                    </Button>
                </Box>
            </Box>
            <Stepper orientation={'vertical'} nonLinear activeStep={activeStep}>
                {steps.map((step, index) => (
                    <Step key={'step-'+step.label} completed={completed[index]}>
                        <StepButton icon={<OfflineBoltSharpIcon/>}
                                    className={'stepper-btn'}
                                    color="inherit"
                                    onClick={handleStep(index, step.target)}>
                            {step.label}
                        </StepButton>
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
};


export default NavigationStepper;




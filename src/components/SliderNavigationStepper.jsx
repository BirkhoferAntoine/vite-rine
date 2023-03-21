import * as React from 'react';
import {
    Box,
    Stepper,
    Step,
    StepButton,
    Button,
    Typography,
    StepLabel,
    Paper,
} from '@mui/material';
import NavigateBeforeSharpIcon from '@mui/icons-material/NavigateBeforeSharp';
import NavigateNextSharpIcon from '@mui/icons-material/NavigateNextSharp';
import OfflineBoltSharpIcon from '@mui/icons-material/OfflineBoltSharp';

const sxStyles = {
    stepperContainer: {
        position: 'absolute',
        top: '0',
        right: '1rem',
        height: '100%',
        zIndex: '9999',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textShadow: '0px 0px 15px #FCD81C',
    },
    stepperLogo: {
        mr: '2rem',
    },
    stepLabel: {
        flexDirection: 'row-reverse',
        width:'100%',
    },
    stepperNavigationContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        mr: '-2rem',
    },
    stepperPrevNextContainer: {
        transform: 'rotate(90deg)',
        height: '2.5em',
        ml: '-2em',
    },
}

const SliderNavigationStepper = (props) => {

    const [activeStep, setActiveStep]   = React.useState(0);
    const [completed, setCompleted]     = React.useState({});

    const {element, steps}      = props;
    const sliderWrapperImage    = element + ' img';

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
        /*document.querySelector('#'+target).scrollIntoView({behavior: "smooth"});*/
    };

    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? // It's the last step, but not all steps have been completed,
                  // find the first step that has been completed
                steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
        console.log("-> test", document.querySelector('.slider-image'));
        document.querySelector('#slider-image').src = steps[newActiveStep].target;
    };

    const handleBack = () => {
        const newActiveStep = activeStep === 0 ? 0 : activeStep-1;
        setActiveStep(newActiveStep);
        console.log("-> test", document.querySelector('.work-slider-wrapper img'));
        document.querySelector('#slider-image').src = steps[newActiveStep].target;
    };


    return (
        <Box sx={sxStyles.stepperContainer}>
            <Box className={'work-brand-logo-container filter-highlight'}>
                <img className={'brand-logo'} src={'src/assets/2022Logo-FRIZZZY.png'} alt={'frizzzy'}/>
            </Box>
            <Box sx={sxStyles.stepperNavigationContainer} className={'work-slider-stepper'}>
                <Stepper orientation={'vertical'} nonLinear activeStep={activeStep}>
                    {steps.map((step, index) => (
                        <Step key={'step-'+step.label} completed={completed[index]}>
                            <StepButton
                                className={'stepper-btn'}
                                color="inherit"
                                onClick={handleStep(index, step.target)}>
                                <StepLabel icon={<OfflineBoltSharpIcon/>}
                                           sx={sxStyles.stepLabel}>
                                    {step.label}
                                </StepLabel>
                            </StepButton>
                        </Step>
                    ))}
                </Stepper>
                <Box/>
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
            </Box>
        </Box>
    );
};


export default SliderNavigationStepper;




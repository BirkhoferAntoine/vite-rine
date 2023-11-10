import * as React from 'react';
import {
    Box,
    Stepper,
    Step,
    StepButton,
    Button,
    Typography,
} from '@mui/material';
import NavigateBeforeSharpIcon from '@mui/icons-material/NavigateBeforeSharp';
import NavigateNextSharpIcon from '@mui/icons-material/NavigateNextSharp';
import OfflineBoltSharpIcon from '@mui/icons-material/OfflineBoltSharp';
import { Component } from 'react';

class NavigationStepper extends React.Component {
    constructor(props) {
        super(props);

        this.totalSteps = this.totalSteps.bind(this);
        this.completedSteps = this.completedSteps.bind(this);
        this.isLastStep = this.isLastStep.bind(this);
        this.allStepsCompleted = this.allStepsCompleted.bind(this);
        this.handleStep = this.handleStep.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.state = {
            activeStep: 0,
            completed: {},
            steps: ['Home', 'About me', 'Works', 'Skills', 'Contact'],
            stepsLabel: [
                'root',
                'about-section',
                'work-section',
                'skill-section',
                'contact-section',
            ],
        };
    }

    totalSteps() {
        return this.state.steps.length;
    }

    completedSteps() {
        return Object.keys(this.state.completed).length;
    }

    isLastStep() {
        return this.state.activeStep === this.totalSteps() - 1;
    }

    allStepsCompleted() {
        return this.completedSteps() === this.totalSteps();
    }

    handleStep(step) {
        this.setState({ activeStep: step });
        //document.querySelector('#'+this.stepsLabel[this.activeStep]).scrollIntoView({behavior: "smooth"});
    }

    handleNext() {
        const newActiveStep =
            this.isLastStep() && !this.allStepsCompleted()
                ? // It's the last step, but not all steps have been completed,
                  // find the first step that has been completed
                  this.state.steps.findIndex(
                      (step, i) => !(i in this.state.completed)
                  )
                : this.state.activeStep + 1;
        this.setState({ activeStep: newActiveStep });
        //document.querySelector('#'+this.stepsLabel[this.activeStep]).scrollIntoView({behavior: "smooth"});
    }

    handleBack() {
        this.setState({ activeStep: this.state.activeStep - 1 });
        //document.querySelector('#'+this.stepsLabel[this.activeStep]).scrollIntoView({behavior: "smooth"});
    }
    render() {
        const sxStyles = {
            stepperContainer: {
                position: 'fixed',
                top: '30vh',
                left: '-2em',
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
        };

        //const steps = ['Home', 'About me', 'Works', 'Skills', 'Contact'];

        return (
            <Box sx={sxStyles.stepperContainer}>
                <Box sx={sxStyles.stepperPrevNextContainer}>
                    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                        <Button
                            color="inherit"
                            disabled={this.state.activeStep === 0}
                            onClick={this.handleBack}
                            sx={{ mr: 1 }}
                        >
                            <NavigateBeforeSharpIcon />
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={this.handleNext} sx={{ mr: 1 }}>
                            <NavigateNextSharpIcon />
                        </Button>
                    </Box>
                </Box>
                <Stepper
                    orientation={'vertical'}
                    nonLinear
                    activeStep={this.state.activeStep}
                >
                    {this.state.steps.map((label, index) => (
                        <Step
                            key={'step-' + label}
                            completed={this.state.completed[index]}
                        >
                            <StepButton
                                icon={<OfflineBoltSharpIcon />}
                                color="inherit"
                                onClick={this.handleStep(index)}
                            >
                                {label}
                            </StepButton>
                        </Step>
                    ))}
                </Stepper>
            </Box>
        );
    }
}

export default NavigationStepper;

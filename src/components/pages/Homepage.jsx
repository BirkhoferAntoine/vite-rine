import React, { Component } from 'react';
import { Box } from '@mui/material';
import CircuitLine from '../background/CircuitLine.jsx';
import HeroSection from './HeroSection.jsx';
import AboutSection from './AboutSection.jsx';
import WorksSection from './WorksSection.jsx';
import SkillsSection from './SkillsSection.jsx';
import ContactSection from './ContactSection.jsx';
import { SkillsProviderWrapper } from '../../context/skills.context.jsx';

export class Homepage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <HeroSection />
                <Box className={'bg-design-container-center'}>
                    <CircuitLine
                        width={'92vh'}
                        rotate={'90deg'}
                        top={'22vh'}
                        circleTip
                    />
                </Box>

                <Box className={'section-separator backdrop-filter-blur'}></Box>

                <AboutSection />

                <Box className={'bg-design-container-center'}>
                    <CircuitLine
                        width={'110vh'}
                        rotate={'90deg'}
                        top={'15vh'}
                        circleTip
                    />
                </Box>
                <Box className={'section-separator backdrop-filter-blur'}></Box>

                {/*<Box className={'section-separator'}></Box>

                <WorksSection/>

                <Box className={'bg-design-container-center'}>
                    <CircuitLine width={'75vh'} rotate={'90deg'} top={'35vh'} circleTip/>
                </Box>*/}
                <SkillsProviderWrapper>
                    <SkillsSection />
                </SkillsProviderWrapper>

                <Box className={'bg-design-container-center'}>
                    <CircuitLine
                        width={'90vh'}
                        rotate={'90deg'}
                        top={'45vh'}
                        circleTip
                    />
                </Box>
                <Box className={'section-separator'}></Box>

                <ContactSection />
                {/*<Box className={'section-separator last-separator'}></Box>*/}
            </>
        );
    }
}

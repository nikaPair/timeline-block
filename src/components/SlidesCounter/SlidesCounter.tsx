import React from 'react';
import {
    CSlidesCounter,
    SlidesCounterP,
    ButtonsContainer,
    Button,
    ArrowBackIosNewIconStyled,
    ArrowForwardIosIconStyled,
} from './SlidesCounter.styled';
import { useSlideNavigation } from './hooks/useSlidesNavigation';
import timelineData from '../../mocks/mock';

const SlidesCounter = () => {
    const { activeIndex, handlePrevClick, handleNextClick, isPrevDisabled, isNextDisabled } = useSlideNavigation();

    return (
        <CSlidesCounter>
            <SlidesCounterP>
                0{activeIndex + 1}/0{timelineData.length}
            </SlidesCounterP>
            <ButtonsContainer>
                <Button onClick={handlePrevClick} isActive={!isPrevDisabled}>
                    <ArrowBackIosNewIconStyled sx={{ fontSize: '20px', textAlign: 'center' }} />
                </Button>
                <Button onClick={handleNextClick} isActive={!isNextDisabled}>
                    <ArrowForwardIosIconStyled sx={{ fontSize: '20px', textAlign: 'center' }} />
                </Button>
            </ButtonsContainer>
        </CSlidesCounter>
    );
};

export default SlidesCounter;

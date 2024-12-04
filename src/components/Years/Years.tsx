import React, { useRef } from 'react';
import { CYears, StartYearP, SendYearP, Container } from './Years.styled';
import timelineData from '../../mocks/mock';
import { useSelector } from 'react-redux';
import { useYearAnimation } from './hooks/useYearAnimation';
import { useYearState } from './hooks/useYearState';
import Circle from '../Circle/Circle';

const Years = () => {
    const activeIndex = useSelector((state: any) => state.index.index);

    const { currentStartYear, currentEndYear, setCurrentStartYear, setCurrentEndYear } = useYearState(
        activeIndex,
        timelineData
    );

    const { startYear, endYear } = timelineData[activeIndex];
    const startYearRef = useRef<HTMLParagraphElement>(null);
    const endYearRef = useRef<HTMLParagraphElement>(null);

    useYearAnimation(startYearRef, currentStartYear, startYear, () => setCurrentStartYear(startYear));
    useYearAnimation(endYearRef, currentEndYear, endYear, () => setCurrentEndYear(endYear));

    return (
        <CYears>
            <Container>
                <StartYearP ref={startYearRef}>{currentStartYear}</StartYearP>
                <SendYearP ref={endYearRef}>{currentEndYear}</SendYearP>
                <Circle />
            </Container>
        </CYears>
    );
};

export default Years;

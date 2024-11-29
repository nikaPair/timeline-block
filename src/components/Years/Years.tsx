import React, { useRef, useState, useEffect } from 'react';
import { CYears, StartYearP, SendYearP, Title } from './Years.styled';
import timelineData from '../../mocks/mock';
import { useSelector } from 'react-redux';
import { useYearAnimation } from './hooks/useYearAnimation';
import { useYearState } from './hooks/useYearState';
import { useTitleAnimation } from './hooks/useTitleAnimation';

const Years = () => {
    const activeIndex = useSelector((state: any) => state.index.index);

    const [currentTitle, setCurrentTitle] = useState(timelineData[activeIndex].title);

    const { currentStartYear, currentEndYear, setCurrentStartYear, setCurrentEndYear } = useYearState(
        activeIndex,
        timelineData
    );
    
    const { startYear, endYear } = timelineData[activeIndex];
    const startYearRef = useRef<HTMLParagraphElement>(null);
    const endYearRef = useRef<HTMLParagraphElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);

    useYearAnimation(startYearRef, currentStartYear, startYear, () => setCurrentStartYear(startYear));
    useYearAnimation(endYearRef, currentEndYear, endYear, () => setCurrentEndYear(endYear));

    useTitleAnimation(titleRef, currentTitle, timelineData[activeIndex].title, () => {
        setCurrentTitle(timelineData[activeIndex].title);
    });

    useEffect(() => {
        setCurrentTitle(timelineData[activeIndex].title);
    }, [activeIndex]);

    return (
        <CYears>
            <StartYearP ref={startYearRef}>{currentStartYear}</StartYearP>
            <Title ref={titleRef}>{currentTitle}</Title>
            <SendYearP ref={endYearRef}>{currentEndYear}</SendYearP>
        </CYears>
    );
};

export default Years;

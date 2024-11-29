import { useState, useEffect } from 'react';

export const useYearState = (activeIndex: number, timelineData: any[]) => {
    const [currentStartYear, setCurrentStartYear] = useState(timelineData[activeIndex].startYear);
    const [currentEndYear, setCurrentEndYear] = useState(timelineData[activeIndex].endYear);

    useEffect(() => {
        const { startYear, endYear } = timelineData[activeIndex];
        setCurrentStartYear(startYear);
        setCurrentEndYear(endYear);
    }, [activeIndex, timelineData]);

    return { currentStartYear, currentEndYear, setCurrentStartYear, setCurrentEndYear };
};

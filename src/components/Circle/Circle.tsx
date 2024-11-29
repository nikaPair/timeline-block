import React from 'react';
import { CCircle } from './Circle.styled';
import Dot from '../Dot/Dot';
import timelineData from '../../mocks/mock';
import { useCirclePoints } from './hooks/useCirclePoints';
import { useActiveIndex } from './hooks/useActiveIndex';
import { useCircleAnimation } from './hooks/useCircleAnimation';
import { v4 as uuidv4 } from 'uuid';

const Circle = () => {
    const radius = 265;
    const numberOfDots = timelineData.length;
    const points = useCirclePoints(radius, numberOfDots);
    const { activeIndex, setActiveIndex } = useActiveIndex();

    useCircleAnimation(activeIndex, numberOfDots);

    return (
        <CCircle className='circle'>
            {points.map(({ x, y, index }) => (
                <Dot
                    key={uuidv4()}
                    index={index}
                    style={{
                        position: 'absolute',
                        top: `calc(50% - 24px + ${y}px)`,
                        left: `calc(50% - 24px + ${x}px)`,
                        transition: 'all 0.5s ease',
                    }}
                    isActive={index === activeIndex}
                    onClick={() => setActiveIndex(index)}
                />
            ))}
        </CCircle>
    );
};

export default Circle;

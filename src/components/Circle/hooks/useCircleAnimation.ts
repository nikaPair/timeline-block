import { useEffect } from 'react';
import { gsap } from 'gsap';

export const useCircleAnimation = (activeIndex: number, numberOfDots: number) => {
    useEffect(() => {
        const angle = activeIndex * (360 / numberOfDots);
        gsap.to('.circle', {
            rotation: -angle,
            duration: 0.5,
            ease: 'power2.out',
        });
    }, [activeIndex, numberOfDots]);
};

import { useEffect } from 'react';
import { gsap } from 'gsap';

export const useYearAnimation = (
    ref: React.RefObject<HTMLElement>,
    currentYear: string | number,
    newYear: string | number,
    onComplete: () => void
) => {
    useEffect(() => {
        if (ref.current && currentYear !== newYear) {
            gsap.to(ref.current, {
                textContent: newYear,
                duration: 1,
                ease: 'power1.inOut',
                snap: { textContent: 1 },
                onComplete,
            });
        }
    }, [ref, currentYear, newYear, onComplete]);
};

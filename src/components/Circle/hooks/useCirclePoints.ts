import { useMemo } from 'react';

export const useCirclePoints = (radius: number, numberOfDots: number) => {
    return useMemo(() => {
        return Array.from({ length: numberOfDots }).map((_, index) => {
            const angle = index * (360 / numberOfDots) - 45;
            const radian = (angle * Math.PI) / 180;
            const x = Math.cos(radian) * radius;
            const y = Math.sin(radian) * radius;

            return { x, y, index };
        });
    }, [radius, numberOfDots]);
};

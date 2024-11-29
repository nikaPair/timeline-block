import { gsap } from 'gsap';

export const useDotHandlers = (
    isActive: boolean,
    dotRef: React.RefObject<HTMLDivElement>,
    textRef: React.RefObject<HTMLDivElement>,
    index: number
) => {
    const handleMouseEnter = () => {
        if (!isActive) {
            gsap.to(dotRef.current, {
                width: 50,
                height: 50,
                backgroundColor: '#f4f5f9',
                border: '1px solid #868c9a',
                duration: 0.5,
            });
            gsap.to(textRef.current, {
                opacity: 1,
                fontSize: '20px',
                duration: 0.5,
                onStart: () => {
                    if (textRef.current) textRef.current.innerText = (index + 1).toString();
                },
            });
        }
    };

    const handleMouseLeave = () => {
        if (!isActive) {
            gsap.to(dotRef.current, {
                width: 8,
                height: 8,
                backgroundColor: '#42567a',
                border: 'none',
                duration: 0.5,
            });
            gsap.to(textRef.current, {
                opacity: 0,
                fontSize: '16px',
                duration: 0.5,
                onStart: () => {
                    if (textRef.current) textRef.current.innerText = '';
                },
            });
        }
    };

    return { handleMouseEnter, handleMouseLeave };
};

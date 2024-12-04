import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const useTitleAnimation = (
    ref: React.RefObject<HTMLElement>,
    currentTitle: string,
    newTitle: string,
    onComplete: () => void
) => {
    const prevTitleRef = useRef<string>('');

    useEffect(() => {
        if (currentTitle !== prevTitleRef.current) {
            if (ref.current) {
                gsap.to(ref.current, {
                    opacity: 0,
                    duration: 0.5,
                    ease: 'power1.inOut',
                    onComplete: () => {
                        if (ref.current) {
                            gsap.fromTo(
                                ref.current,
                                { opacity: 0 },
                                { opacity: 1, duration: 0.5, ease: 'power1.inOut' }
                            );
                            ref.current.setAttribute('data-title', newTitle);
                            prevTitleRef.current = newTitle;
                            onComplete();
                        }
                    },
                });
            }
        }
    }, [currentTitle, newTitle, ref, onComplete]);
};

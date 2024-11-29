import { useEffect, useState } from 'react';
import { gsap } from 'gsap';

export const useTitleAnimation = (
    ref: React.RefObject<HTMLElement>,
    currentTitle: string,
    newTitle: string,
    onComplete: () => void
) => {
    const [isTitleChanged, setIsTitleChanged] = useState(false);

    useEffect(() => {
        if (ref.current && currentTitle !== newTitle) {
            gsap.to(ref.current, {
                opacity: 0,
                duration: 0,
                ease: 'power1.inOut',
                onComplete: () => {
                    setIsTitleChanged(true);
                    onComplete();
                },
            });
        } else if (isTitleChanged) {
            gsap.fromTo(ref.current, { opacity: 0 }, { opacity: 1, duration: 1, ease: 'power1.inOut' });
            setIsTitleChanged(false);
        }
    }, [currentTitle, newTitle, isTitleChanged, onComplete, ref]);
};

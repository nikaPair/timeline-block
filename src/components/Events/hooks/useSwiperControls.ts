import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import timelineData from '../../../mocks/mock';
import { RootState } from '../../../store/store';
import { useSelector } from 'react-redux';
import type { Swiper as SwiperInstance } from 'swiper';

export const useSwiperControls = () => {
    const activeIndex = useSelector((state: RootState) => state.index.index);
    const [slides, setSlides] = useState(timelineData[activeIndex].events);
    const [isPrevButtonVisible, setIsPrevButtonVisible] = useState(false);
    const [isNextButtonVisible, setIsNextButtonVisible] = useState(true);
    const swiperRef = useRef<SwiperInstance | null>(null);
    const slidesContainerRef = useRef<HTMLDivElement | null>(null);

    const handleSlideChange = (swiper: SwiperInstance) => {
        setIsPrevButtonVisible(!swiper.isBeginning);
        setIsNextButtonVisible(!swiper.isEnd);
    };

    useEffect(() => {
        const hideSlides = async () => {
            if (slidesContainerRef.current) {
                const children = Array.from(slidesContainerRef.current.children);
                await gsap.to(children, {
                    opacity: 0,
                    y: 0,
                    duration: 0.5,
                    stagger: 0.1,
                });
            }
        };

        const showSlides = async () => {
            setSlides(timelineData[activeIndex].events);
            if (slidesContainerRef.current) {
                const children = Array.from(slidesContainerRef.current.children);
                gsap.fromTo(children, { opacity: 0, y: 0 }, { opacity: 1, y: -20, duration: 0.5, stagger: 0.1 });
            }
        };

        (async () => {
            await hideSlides();
            await showSlides();
        })();
    }, [activeIndex]);

    return {
        slides,
        slidesContainerRef,
        isPrevButtonVisible,
        isNextButtonVisible,
        swiperRef,
        handleSlideChange,
    };
};

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { SlideWrapper, Year, Description, CustomButton, CustomPagination, CEvents } from './Events.styled';
import { v4 as uuidv4 } from 'uuid';
import { useSwiperControls } from './hooks/useSwiperControls';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import type { Swiper as SwiperInstance } from 'swiper';

const Events = () => {
    const { slides, slidesContainerRef, isPrevButtonVisible, isNextButtonVisible, swiperRef, handleSlideChange } =
        useSwiperControls();

    return (
        <>
            <CEvents ref={slidesContainerRef}>
                <Swiper
                    style={{ width: '100%' }}
                    modules={[Navigation, Pagination]}
                    navigation={{
                        prevEl: '.custom-prev',
                        nextEl: '.custom-next',
                    }}
                    pagination={{
                        el: '.custom-pagination',
                        clickable: true,
                    }}
                    spaceBetween={50}
                    slidesPerView={3}
                    onBeforeInit={(swiper: SwiperInstance) => {
                        swiperRef.current = swiper;
                    }}
                    onSlideChange={handleSlideChange}
                >
                    {slides.map(slide => (
                        <SwiperSlide key={uuidv4()} className='custom-slide'>
                            <SlideWrapper>
                                <Year>{slide.year}</Year>
                                <Description>{slide.description}</Description>
                            </SlideWrapper>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <CustomButton isActive={isPrevButtonVisible} className='custom-prev prev'>
                    <ArrowBackIosNewIcon sx={{ fontSize: '20px', textAlign: 'center' }} />
                </CustomButton>
                <CustomButton isActive={isNextButtonVisible} className='custom-next next'>
                    <ArrowForwardIosIcon sx={{ fontSize: '20px', textAlign: 'center' }} />
                </CustomButton>
            </CEvents>
            <CustomPagination className='custom-pagination pagination' />
        </>
    );
};

export default Events;

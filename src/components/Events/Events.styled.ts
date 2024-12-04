import styled from 'styled-components';
export const CEvents = styled.div`
    order: 4;
    position: relative;
    padding: 0 76px;
    @media (max-width: 775px) {
        order: 3;
        padding: 0;
    }
`;
export const SlideWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    height: 135px;

    @media (max-width: 775px) {
        width: 100%;
        padding: 0;
        height: fit-content;
        gap: 10px;
    }
    .swiper-slide.swiper-slide-active.custom-slide {
        @media (max-width: 775px) {
            width: 166px !important;
            gap: 10px !important;
            width: 100% !important;
        }
    }
`;

export const Year = styled.h3`
    font-family: PT Sans, sans-serif;
    font-size: 20px;
    font-weight: bold;
    color: #2a4db8;

    @media (max-width: 775px) {
        font-size: 16px;
        color: #3877ee;
    }
`;

export const Description = styled.p`
    font-family: PT Sans, sans-serif;
    font-size: 16px;
    color: #42567a;

    @media (max-width: 775px) {
        font-size: 14px;
    }
`;

export const CustomButton = styled.div<{ isActive: boolean }>`
    text-align: center;
    display: ${({ isActive }) => (isActive ? 'flex' : 'none')};
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    cursor: pointer;
    color: #3877ee;
    border: none;
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    bottom: 30px;
    z-index: 2;
    &.prev {
        left: 10px;
    }

    &.next {
        right: 10px;
    }

    @media (max-width: 775px) {
        display: none;
    }
`;

export const CustomPagination = styled.div`
    display: none;
    @media (max-width: 600px) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px !important;
        gap: 10px;
        position: absolute;
        bottom: 10px;
        z-index: 2;
        transform: translate(170px, -68px) !important;
    }
    .swiper-pagination-bullet {
        width: 10px !important;
        height: 10px !important;
        background-color: #adb5c6 !important;
        margin: 0 !important;
    }
    .swiper-pagination-bullet-active {
        background-color: #42567a !important;
    }
`;

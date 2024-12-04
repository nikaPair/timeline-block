import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    text-align: center;
    font-family: PT Sans;
    margin: 0 auto;
    font-weight: 700;
    gap: 80px;
    order: 2;
    align-items: center;
    z-index: 1;

    @media (max-width: 775px) {
        border-bottom: 1px solid #e2e5ec;
        max-height: 400px;
        gap: 20px;
    }

    @media (max-height: 700px, max-width: 775px) {
        position: relative;
    }
`;
export const CYears = styled.div`
    ::before {
        content: '';
        position: absolute;
        width: 1px;
        height: 100vh;
        background-color: #e2e5ec;
        left: 50%;
        top: 0;
        @media (max-width: 775px) {
            display: none;
        }
    }

    ::after {
        content: '';
        position: absolute;
        max-width: 1440px;
        width: 100vw;
        height: 1px;
        background-color: #e2e5ec;
        top: 50%;

        @media (max-width: 775px) {
            display: none;
        }
    }
`;
export const StartYearP = styled.span`
    font-size: 200px;
    color: #5d5fef;

    @media (max-width: 1024px) {
        font-size: 150px;
    }
    @media (max-width: 775px) {
        font-size: 100px;
        color: #3877ee;
    }
    @media (max-width: 550px) {
        font-size: 50px;
    }
`;
export const SendYearP = styled.span`
    font-size: 200px;
    color: #ef5da8;

    @media (max-width: 1024px) {
        font-size: 150px;
    }
    @media (max-width: 775px) {
        font-size: 100px;
        color: #f178b6;
    }
    @media (max-width: 550px) {
        font-size: 50px;
    }
`;

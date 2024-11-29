import styled from 'styled-components';

export const CYears = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    text-align: center;
    font-family: PT Sans;
    max-width: 800px;
    margin: 0 auto;
    font-weight: 700;
    gap: 80px;
    flex: 1.3;
    order: 2;
    align-items: center;
    z-index: 1;
    @media (max-width: 775px) {
        border-bottom: 1px solid #e2e5ec;
        max-height: 400px;
        gap: 20px;
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
export const Title = styled.p`
    font-family: PT Sans;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 20px;
    color: #42567a;
    position: absolute;
    top: -15%;
    left: 79%;

    @media (max-width: 775px) {
        display: none;
    }
`;

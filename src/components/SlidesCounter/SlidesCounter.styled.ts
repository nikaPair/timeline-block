import styled from 'styled-components';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
export const CSlidesCounter = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 80px;
    gap: 20px;
    order: 3;
    @media (max-width: 775px) {
        padding-left: 0px;
        order: 4;
    }
    @media (max-height: 775px) {
        gap: 0;
    }
`;

export const SlidesCounterP = styled.p`
    font-family: PT Sans;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #42567a;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    gap: 20px;
`;

export const Button = styled.button<{ isActive: boolean }>`
    text-align: center;
    width: 50px;
    height: 50px;
    cursor: pointer;
    color: ${({ isActive }) => (isActive ? '#42567a' : '#9ba5b9')};
    border: ${({ isActive }) => (isActive ? '1px solid #9ba5ba' : '1px solid #c7cdd9')};
    border-radius: 50%;

    @media (max-width: 775px) {
        width: 25px;
        height: 25px;
        font-size: 10px;
    }
`;
export const ArrowBackIosNewIconStyled = styled(ArrowBackIosNewIcon)`
    @media (max-width: 775px) {
        font-size: 10px !important;
    }
`;
export const ArrowForwardIosIconStyled = styled(ArrowForwardIosIcon)`
    @media (max-width: 775px) {
        font-size: 10px !important;
    }
`;

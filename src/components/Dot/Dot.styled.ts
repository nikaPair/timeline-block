import styled from 'styled-components';

export const DotContainer = styled.div`
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    cursor: pointer;
`;
export const CDot = styled.div<{ isActive: boolean; title?: string }>`
    width: 8px;
    height: 8px;
    font-family: PT Sans;
    position: relative;
    font-weight: 400;
    border-radius: 50%;
    background-color: #f4f5f9;
    color: #42567a;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    text-align: center;
    box-sizing: content-box;
    background-color: ${({ isActive }) => (isActive ? '#f4f5f9' : '#42567a')};
    transition: all 0.5s ease;

    ${({ isActive }) =>
        isActive &&
        `
        width: 30px;
        height: 30px;
        font-size: 16px;

        &::after {
        content: attr(data-title);
        position: absolute;
        top: 10px;
        left: 60px;
        font-family: PT Sans;
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 20px;
        color: #42567a;
    }
    `}
`;
export const DotText = styled.span`
    display: block;
    transform: rotate(0deg);
    transition: all 0.3s ease;
`;

export const Title = styled.p`
    font-family: PT Sans;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 20px;
    color: #42567a;
    position: fixed;

    @media (max-width: 1024px) {
        top: -70%;
    }

    @media (max-width: 775px) {
        display: none;
    }
`;

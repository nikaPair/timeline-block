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
export const CDot = styled.div<{ isActive: boolean }>`
    width: 8px;
    height: 8px;
    font-family: PT Sans;
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

    ${({ isActive }) =>
        isActive &&
        `
        width: 30px;
        height: 30px;
        font-size: 16px;
    `}
`;
export const DotText = styled.span`
    display: block;
    transform: rotate(0deg);
    transition: all 0.3s ease;
`;

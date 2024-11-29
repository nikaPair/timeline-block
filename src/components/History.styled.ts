import styled from 'styled-components';

export const CHistory = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1440px;
    margin: 0 auto;
    background-color: #f4f5f9;
    height: 100vh;
    border-left: 1px solid #e2e5ec;
    border-right: 1px solid #e2e5ec;
    padding: 170px 0px 100pp 0px;
    gap: 30px;

    @media (max-width: 775px) {
        padding: 30px;
    }

    ::before {
        content: '';
        position: absolute;
        width: 1px;
        height: 100%;
        background-color: #e2e5ec;
        left: 50%;

        @media (max-width: 775px) {
            display: none;
        }
    }

    ::after {
        content: '';
        position: absolute;
        max-width: 1440px;
        width: 98%;
        height: 1px;
        background-color: #e2e5ec;
        top: 50%;

        @media (max-width: 775px) {
            display: none;
        }
    }
`;

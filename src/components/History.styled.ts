import styled from 'styled-components';

export const CHistory = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    max-width: 1440px;
    margin: 0 auto;
    background-color: #f4f5f9;
    min-height: 100vh;
    overflow: hidden;
    border-left: 1px solid #e2e5ec;
    border-right: 1px solid #e2e5ec;
    padding: 170px 0px 100pp 0px;
    gap: 30px;

    @media (max-width: 775px) {
        padding: 30px;
    }
`;

import styled from 'styled-components';

export const CCircle = styled.div`
    position: absolute;
    width: 530px;
    height: 530px;
    border: 1px solid rgba(66, 86, 122, 0.2);
    border-radius: 50%;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media (max-width: 775px) {
        display: none;
    }
`;

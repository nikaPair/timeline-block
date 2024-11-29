import styled from 'styled-components';

export const HHeading = styled.h1`
    color: #42567a;
    font-size: 56px;
    display: inline-block;
    height: fit-content;
    padding-left: 80px;
    white-space: pre-wrap;
    text-align: left;
    position: relative;
    font-family: PT Sans;
    order: 1;

    ::before {
        content: '';
        position: absolute;
        height: 100%;
        border: 5px solid;
        border-image-source: linear-gradient(180deg, #3877ee -5%, #ef5da8 85%);
        border-image-slice: 1;
        left: 0;
        top: 0;

        @media (max-width: 775px) {
            display: none;
        }
    }
    @media (max-width: 775px) {
        font-size: 40px;
        padding-left: 0px;
    }
    @media (max-width: 550px) {
        font-size: 20px;
    }
`;
export const Container = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    @media (max-width: 775px) {
    }
`;

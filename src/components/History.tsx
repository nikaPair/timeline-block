import React from 'react';
import Heading from './Heading/Heading';
import { CHistory } from './History.styled';
import Years from './Years/Years';
import Circle from './Circle/Circle';
import SlidesCounter from './SlidesCounter/SlidesCounter';
import Events from './Events/Events';
const History = () => {
    return (
        <CHistory>
            <Heading />
            <Years />
            <Circle />
            <SlidesCounter />
            <Events />
        </CHistory>
    );
};

export default History;

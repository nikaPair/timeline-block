import React from 'react';
import Heading from './Heading/Heading';
import { CHistory } from './History.styled';
import Years from './Years/Years';
import SlidesCounter from './SlidesCounter/SlidesCounter';
import Events from './Events/Events';
const History = () => {
    return (
        <CHistory>
            <Heading />
            <Years />
            <SlidesCounter />
            <Events />
        </CHistory>
    );
};

export default History;

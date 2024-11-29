import React from 'react';
import { HHeading, Container } from './Heading.styled';
const Heading = () => {
    const text = 'Исторические даты';
    const formattedText = text.split(' ').join('\n');
    return (
        <Container>
            <HHeading>{formattedText}</HHeading>
        </Container>
    );
};

export default Heading;

import React, { useRef } from 'react';
import { CDot, DotContainer, DotText } from './Dot.styled';
import { useDotAnimation } from './hooks/useDotAnimation';
import { useDotHandlers } from './hooks/useDotHandlers';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
interface DotProps {
    style?: React.CSSProperties;
    isActive: boolean;
    index: number;
    onClick: () => void;
}

const Dot = ({ style, isActive, index, onClick }: DotProps) => {
    const activeIndex = useSelector((state: RootState) => state.index.index);
    const dotRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useDotAnimation(isActive, dotRef, textRef, index);

    const { handleMouseEnter, handleMouseLeave } = useDotHandlers(isActive, dotRef, textRef, index);

    return (
        <DotContainer onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={onClick} style={style}>
            <CDot ref={dotRef} isActive={isActive} style={{ transform: `rotate(${activeIndex * 60}deg)` }}>
                <DotText ref={textRef}>{isActive && (index + 1).toString()}</DotText>
            </CDot>
        </DotContainer>
    );
};

export default Dot;

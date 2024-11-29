import { useDispatch, useSelector } from 'react-redux';
import { incrementIndex, decrementIndex } from '../../../store/indexSlice/indexSlice';
import { RootState } from '../../../store/store';
import timelineData from '../../../mocks/mock';
export const useSlideNavigation = () => {
    const dispatch = useDispatch();
    const activeIndex = useSelector((state: RootState) => state.index.index);
    const totalSlides = timelineData.length;

    const handlePrevClick = () => {
        if (activeIndex > 0) {
            dispatch(decrementIndex());
        }
    };

    const handleNextClick = () => {
        if (activeIndex < totalSlides - 1) {
            dispatch(incrementIndex());
        }
    };

    return {
        activeIndex,
        handlePrevClick,
        handleNextClick,
        isPrevDisabled: activeIndex === 0,
        isNextDisabled: activeIndex === totalSlides - 1,
    };
};

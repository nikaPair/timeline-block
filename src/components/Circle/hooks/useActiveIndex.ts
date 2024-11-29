import { useDispatch, useSelector } from 'react-redux';
import { changeIndex } from '../../../store/indexSlice/indexSlice';
import { RootState } from '../../../store/store';

export const useActiveIndex = () => {
    const dispatch = useDispatch();
    const activeIndex = useSelector((state: RootState) => state.index.index);

    const setActiveIndex = (index: number) => {
        dispatch(changeIndex({ index }));
    };

    return { activeIndex, setActiveIndex };
};

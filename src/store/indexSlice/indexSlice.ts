import { createSlice } from '@reduxjs/toolkit';
interface IndexState {
    index: number;
}

const initialState: IndexState = { index: 0 };

export const indexSlice = createSlice({
    name: 'index',
    initialState,
    reducers: {
        changeIndex: (state, action) => {
            return action.payload;
        },
        incrementIndex: state => {
            return { ...state, index: state.index + 1 };
        },
        decrementIndex: state => {
            return { ...state, index: state.index - 1 };
        },
    },
});

export const { changeIndex, incrementIndex, decrementIndex } = indexSlice.actions;

export default indexSlice.reducer;

import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import HistoricalTimeline from './components/History';
import { store } from './store/store';

function App() {
    return (
        <Provider store={store}>
            <HistoricalTimeline />
        </Provider>
    );
}

export default App;

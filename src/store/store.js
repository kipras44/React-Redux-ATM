// Initialising the redux store, with the reducer that was set up in counter.js

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter'

export default configureStore ({
    reducer: {
        counter: counterReducer
    }
})
import { handleActions } from 'redux-actions';
import * as types from './types';

const INITIAL_STATE = {
    count: 0
};

export default handleActions({
    [types.INCREMENT]: (state, action) => ({
        count: state.count + action.payload
    }),
    [types.DECREMENT]: (state, action) => ({
        count: state.count - action.payload
    })
}, INITIAL_STATE);
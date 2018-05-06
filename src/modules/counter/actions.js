import { createAction } from 'redux-actions';
import * as types from './types';

export const INCREMENT = createAction(types.INCREMENT);
export const DECREMENT = createAction(types.DECREMENT);
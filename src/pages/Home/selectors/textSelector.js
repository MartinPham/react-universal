import { createSelector } from 'reselect';
import initialState from '../state';
import {ID} from "../constants";

const main = rootState => (rootState[ID] || initialState);

export default () =>
    createSelector(main, state => state.get('text'));
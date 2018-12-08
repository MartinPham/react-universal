import initialState from '../state';
import {ID} from "../constants";
import select from "utils/selector";

export default select('text')(ID, initialState);
import initialState from '../state';
import {ID} from "../constants";
import select from "utils/select";

export default select('counter')(ID, initialState);
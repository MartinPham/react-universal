import initialState from '../state';
import {ID} from "../constants";
import select from "utils/select";

export default select('user')(ID, initialState);
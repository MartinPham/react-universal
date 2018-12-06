import {UPDATE_USER} from "../constants";

export default (user, token) => ({
    type: UPDATE_USER,
    user,
    token
})
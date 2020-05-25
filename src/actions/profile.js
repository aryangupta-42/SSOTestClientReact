import { PROFILE_SUCC, PROFILE_FAIL, PROFILE_ERR, AUTH_FAIL } from './types';
import axios from '../utility/axios';

export const getUserProfile = () => async (dispatch) => {
    try {
        const res = await axios({
            type: 'GET',
            url: '/profile',
        });
        const { success, data } = res.data;
        if (success) {
            dispatch({
                type: PROFILE_SUCC,
                payload: data,
            });
        } else {
            dispatch({
                type: PROFILE_FAIL,
            });
            dispatch({
                type: AUTH_FAIL,
            });
        }
    } catch (err) {
        dispatch({
            type: PROFILE_ERR,
        });
        dispatch({
            type: AUTH_FAIL,
        });
        if (typeof err.response !== 'undefined' && err.response) {
            const error = err.response.data;
            const { message } = error;
            // eslint-disable-next-line no-alert
            alert(message);
        }
    }
};

export const logout = () => (dispatch) => {
    // eslint-disable-next-line no-alert
    alert('You clicked on the logout button');
    dispatch({});
};

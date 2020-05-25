import axios from '../utility/axios';
import { AUTH_SUCC, AUTH_FAIL, LOGIN_FAIL, AUTH_ERR } from './types';
import setAuthToken from '../utility/setAuthtoken';

export const authUser = () => async (dispatch) => {
    try {
        const res = await axios({
            type: 'GET',
            url: '/auth/checks',
        });
        const { success, data } = res.data;
        if (success) {
            const { token } = data;
            if (typeof token !== 'undefined' && token) {
                setAuthToken(token);
                dispatch({
                    type: AUTH_SUCC,
                    payload: token,
                });
            } else {
                dispatch({
                    type: AUTH_FAIL,
                });
            }
        } else {
            dispatch({
                type: AUTH_FAIL,
            });
        }
    } catch (err) {
        dispatch({
            type: AUTH_ERR,
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
    dispatch({
        type: LOGIN_FAIL,
    });
};

import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';
// import thunk from 'redux-thunk';

import {
    FACEBOOK_LOGIN_SUCCESS,
    FACEBOOK_LOGIN_FAIL
} from './types.js';

// How to use AsyncStorage:
// AsyncStorage.setItem('fb_token', token);
// AsyncStorage.getItem('fb_token');

export const facebookLogin = () => {
    return async (dispatch) => {
        let token = await AsyncStorage.getItem('fb_token');

        if (token) {
            // Dispatch an action sayin FB login is done
            dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
        } else {
            // Start up FB Login process
            doFacebookLogin(dispatch);
        }
    }
};

const doFacebookLogin = async (dispatch) => {
    let { type, token } = await Facebook.logInWithReadPermissionsAsync('163893230910560', {
        permissions: ['public_profile']
    });

    if (type === 'cancel') {
        return dispatch({ type: FACEBOOK_LOGIN_FAIL });
    }

    await AsyncStorage.setItem('fb_token', token);
    dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token});
};

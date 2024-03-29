import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  VERIFY_REQUEST,
  VERIFY_SUCCESS
} from '../actions';

export default (state = {
  isLoggingIn: false,
  isLoggingOut: false,
  isVerifying: false,
  isLoginError: false,
  isLogoutError: false,
  isAuthenticated: false,
  user: {}
}, action) => {
  switch(action.type) {
    case LOGIN_REQUEST: return { ...state, isLoggingIn: true, isLoginError: false };
    case LOGIN_SUCCESS: return { ...state, isLoggingIn: false, isAuthenticated: true, user: action.user };
    case LOGIN_FAILURE: return { ...state, isLoggingIn: false, isAuthenticated: false, isLoginError: true };
    case LOGOUT_REQUEST: return { ...state, isLoggingOut: true, isLoginError: false };
    case LOGOUT_SUCCESS: return { ...state, isLoggingOut: false, isAuthenticated: false, user: {} };
    case LOGOUT_FAILURE: return { ...state, isLoggingOut: false, isLogoutError: true };
    case VERIFY_REQUEST: return { ...state, isVerifying: true };
    case VERIFY_SUCCESS: return { ...state, isVerifying: false };
    default: return state;
  }
};

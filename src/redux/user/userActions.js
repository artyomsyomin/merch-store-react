import { userActionConstants } from './userConstants';

export const setCurrentUser = (user) => ({
  type: userActionConstants.SET_CURRENT_USER,
  payload: user,
});

export const googleSignInStart = () => ({
  type: userActionConstants.GOOGLE_SIGN_IN_START,
});

export const googleSignInSuccess = (user) => ({
  type: userActionConstants.EMAIL_SIGN_IN_SUCCESS,
  payload: user,
});

export const googleSignInFailure = (error) => ({
  type: userActionConstants.GOOGLE_SIGN_IN_FAILURE,
  payload: error,
});

export const emailSignInStart = (emailAndPassword) => ({
  type: userActionConstants.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

export const emailSignInSuccess = (user) => ({
  type: userActionConstants.EMAIL_SIGN_IN_SUCCESS,
  payload: user,
});

export const emailSignInFailure = (error) => ({
  type: userActionConstants.EMAIL_SIGN_IN_FAILURE,
  payload: error,
});

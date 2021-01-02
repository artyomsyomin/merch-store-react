import { userActionConstants } from './userConstants';

export const googleSignInStart = () => ({
  type: userActionConstants.GOOGLE_SIGN_IN_START,
});

export const emailSignInStart = (emailAndPassword) => ({
  type: userActionConstants.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

export const signInSuccess = (user) => ({
  type: userActionConstants.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (error) => ({
  type: userActionConstants.SIGN_IN_FAILURE,
  payload: error,
});

export const checkUserSession = () => ({
  type: userActionConstants.CHECK_USER_SESSION,
});

export const signOutStart = () => ({
  type: userActionConstants.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: userActionConstants.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (error) => ({
  type: userActionConstants.SIGN_IN_FAILURE,
  payload: error,
});

export const signUpStart = (userCredentials) => ({
  type: userActionConstants.SIGN_UP_START,
  payload: userCredentials,
});

export const signUpSuccess = ({ user, additionalData }) => ({
  type: userActionConstants.SIGN_UP_SUCCESS,
  payload: { user, additionalData },
});

export const signUpFailure = (error) => ({
  type: error,
  payload: error,
});

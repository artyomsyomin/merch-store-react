import { userActionConstants } from './userConstants';

export const setCurrentUser = (user) => ({
  type: userActionConstants.SET_CURRENT_USER,
  payload: user,
});

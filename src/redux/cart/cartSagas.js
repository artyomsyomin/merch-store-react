import { call, all, takeLatest, put } from 'redux-saga/effects';

import { userActionConstants } from '../user/userConstants';
import { clearCart } from './cartActions';

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(userActionConstants.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}

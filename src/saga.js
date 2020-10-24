import { call, put, takeEvery } from 'redux-saga/effects';

function* fetchUserInfo() {
  try {
    // const user = yield call();
    yield put({ type: "FETCH_USER_SUCCEEDED", payload: '' });
  } catch (e) {
    yield put({ type: "FETCH_USER_FAILED", payload: e.message });
  }
}

function* rootSaga() {
  yield takeEvery("FETCH_USER_INFO", fetchUserInfo);
}

export default rootSaga;

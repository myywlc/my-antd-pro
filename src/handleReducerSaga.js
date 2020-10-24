import { combineReducers } from 'redux';
import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects';

import global from './models/global';
import setting from './models/setting';

const configList = [
  global,
  setting,
];

let reducerObj = {};
let rootSagaArr = [];

configList.forEach((item) => {
  const { namespace, effects = {} } = item;

  reducerObj[namespace] = (() => {
    const { state = {}, reducers = {} } = item;
    const initState = state;
    return (state = initState, action) => {
      const handleFnName = action.type.split('/')[1] ?? '';
      if (reducers[handleFnName]) {
        return reducers[handleFnName](state, action);
      } else {
        return state;
      }
    };
  })();

  Object.keys(effects).forEach((key) => {
    const handleFn = effects[key];
    rootSagaArr.push(function* () {
      yield takeEvery(`${namespace}/${key}`, handleFn);
    });
  });
});

export const reducer = combineReducers(reducerObj);
export const rootSaga = function* () {
  yield all(rootSagaArr.map(fn => fn()));
};

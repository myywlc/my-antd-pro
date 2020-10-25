import { queryNotices } from '../services/api';
import { call, put } from 'redux-saga/effects';

export default {
  namespace: 'global',

  state: {
    collapsed: false,
    notices: [],
    num: 0,
  },

  effects: {
    * add({ payload }) {
      yield put({
        type: 'global/addChangeNum',
        payload,
      });
    },

    * change({ payload }) {
      yield put({
        type: 'global/changeLayoutCollapsed',
        payload,
      });
    },

    * fetchNotices(_, { call, put }) {
      // const data = yield call(queryNotices);
      yield put({
        type: 'saveNotices',
        payload: [],
      });
      yield put({
        type: 'user/changeNotifyCount',
        payload: 0,
      });
    },
    * clearNotices({ payload }, { put, select }) {
      yield put({
        type: 'saveClearedNotices',
        payload,
      });
      const count = yield select(state => state.global.notices.length);
      yield put({
        type: 'user/changeNotifyCount',
        payload: count,
      });
    },
  },

  reducers: {
    addChangeNum(state, { payload }) {
      console.log(state, 'state');
      console.log(payload, 'payload');
      return {
        ...state,
        num: payload,
      };
    },
    changeLayoutCollapsed(state, { payload }) {
      return {
        ...state,
        collapsed: payload,
      };
    },
    saveNotices(state, { payload }) {
      return {
        ...state,
        notices: payload,
      };
    },
    saveClearedNotices(state, { payload }) {
      return {
        ...state,
        notices: state.notices.filter(item => item.type !== payload),
      };
    },
  },
};

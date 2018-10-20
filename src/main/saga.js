import { delay } from 'redux-saga';
import { take, call, put, select } from 'redux-saga/effects';

import localTimer from 'app/localTimer';
import globalTimer from 'app/globalTimer';

import * as t from './actionTypes';

export const runTimer = function*() {
  yield take(t.START_TIMER);
  let leftValueLocalTimer = yield select(localTimer.selectors.getLeftValue);
  while (leftValueLocalTimer > 0) {
    yield call(delay, 100);
    yield put(localTimer.actions.reduceValueBy1Second());
    leftValueLocalTimer = yield select(localTimer.selectors.getLeftValue);
  }
  let leftValueGlobalTimer = yield select(globalTimer.selectors.getLeftValue);
  while (leftValueGlobalTimer > 0) {
    yield call(delay, 100);
    yield put(globalTimer.actions.reduceValueBy1Second());
    leftValueGlobalTimer = yield select(globalTimer.selectors.getLeftValue);
  }
};

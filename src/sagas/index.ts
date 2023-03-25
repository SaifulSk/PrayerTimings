import { takeLatest, all } from 'redux-saga/effects';
import { SAGA_ACTIONS } from '../config';
import { getNamesOfAllah } from './islamicSaga';

export function* sagas() {
  yield all([

    //Islamic Saga
    takeLatest(SAGA_ACTIONS.NAMES_OF_ALLAH, getNamesOfAllah),

  ]);
}
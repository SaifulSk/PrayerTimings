import { call, put } from 'redux-saga/effects';
import { CallApi } from './api/callApi';

export function* getNamesOfAllah(action: any): any {
    try {
        const data = action.payload;
        const resp = yield call(CallApi.GET, "https://allah-name.p.rapidapi.com/name", data);
        if (resp.status >= 200 && resp.status < 300 && resp.data && resp.data.data) {
            action && action.callbackSuccess && action.callbackSuccess(resp.data);
        } else {
            action && action.callbackError && action.callbackError(resp.data);
        }
    } catch (e:any) {
        action && action.callbackError && action.callbackError(e && e.data ? e.data : e);
    }
}
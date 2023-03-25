import { ACTIONS } from '../../../config';
import { Action } from 'redux';

export interface ActionExtended extends Action {
  payload: any;
  query: any;
  params: any;
}

export interface IslamicReducer {
}

const initialState: IslamicReducer = {
}

const islamicReducer = (state = initialState, action: ActionExtended) => {
    switch (action.type) {
        case ACTIONS.NAMES_OF_ALLAH:
            return {
                ...state
            }
        default:
            return state;
    }
}

export default islamicReducer;

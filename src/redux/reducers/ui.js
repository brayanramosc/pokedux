import { SET_LOADING } from "../actions/actions";
import { fromJS } from 'immutable';

const initialState = fromJS({
    isLoading: false
});

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING:
            // return {
            //     ...state,
            //     isLoading: action.payload
            // }
            return state.setIn(['isLoading'], action.payload)

        default:
            return state;
    }
}

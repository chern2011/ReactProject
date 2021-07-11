import * as ActionTypes from './ActionTypes';

export const Profileimages = (state = {
        isLoading: true,
        errMess: null,
        profileimages: []
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PROFILEIMAGES:
            return {...state, isLoading: false, errMess: null, profileimages: action.payload};
        case ActionTypes.PROFILEIMAGES_LOADING:
            return {...state, isLoading: true, errMess: null, profileimages: []};
        case ActionTypes.PROFILEIMAGES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        default:
            return state;
    }
};
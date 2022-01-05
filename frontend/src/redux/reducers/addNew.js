import { ANCF, ANCR, ANCS } from '../constants/contents';

export const addNew = (state={}, action)=>{
    switch (action.type) {
        case ANCR:
            return { loading: true};
        case ANCS:
            return { loading: false, userinfo:action.payload};
        case ANCF:
            return { loading: false, error:action.payload};
        default:
            return state;
    }
}
import { Reducer } from "redux";
import { ERROR, FETCH} from "../actions/actionTypes"


export interface postState{
    Error?: string, 
    userId?: number,
    id?: number,
    title?: string,
    body?: string
}

interface storeState{
    posts: postState[]
}

const initialState = {
    posts: [] as postState[]
};

interface errorAction{
    type: typeof ERROR,
    payload: string
}

interface fetchAction{
    type: typeof FETCH,
    payload: postState[]
}
export type Actions = fetchAction | errorAction;

export const fetchReducer:Reducer<storeState, Actions> = (state = initialState, action) =>{
    switch(action.type){
        case FETCH:
            return {posts: action.payload};
        case ERROR:
            return {posts: [{Error: action.payload}]}
        default:
            return state;
    }
}
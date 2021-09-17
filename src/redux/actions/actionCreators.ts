import axios from "axios";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../../index";
import { Actions } from "../reducer/reducers";
import { ERROR, FETCH } from "./actionTypes";

export const fetch = ():ThunkAction<void, RootState, {}, Actions> => {
    return (dispatch) => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
            dispatch({
                type: FETCH,
                payload: response.data
            });
        })
        .catch((error) => {
            dispatch({
                type:ERROR,
                payload: error.message
            });
        })
    }
}
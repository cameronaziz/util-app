import { Dispatch } from "redux"

export function listIsLoading(bool: boolean) {
    return {
        type: "LIST_IS_LOADING",
        isLoading: bool,
    }
}
export function fetchListSuccess(list: object) {
    return {
        type: "FETCH_LIST_SUCCESS",
        list,
    }
}
export function fetchList(url) {
    return (dispatch: Dispatch) => {
        dispatch(fetchListSuccess(url))
        dispatch(listIsLoading(false))
    }
}

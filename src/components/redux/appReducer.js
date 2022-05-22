import { SHOW_LOADER, HIDE_LOADER, SHOW_ALERT, HIDE_ALERT } from "./types";

const initialState = {
    loading: false,
    alert: false,
}

export const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case SHOW_LOADER:
            return { ...state, loading: true }
        case HIDE_LOADER:
            return { ...state, loading: false }
        case SHOW_ALERT:
            return { ...state, alert: true }
        case HIDE_ALERT:
            return { ...state, alert: false }
        default: return state;
    }
}
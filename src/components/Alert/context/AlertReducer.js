import {SHOW_ALERT, HIDE_ALERT} from "../../../constants/types/types";

const handlers = {
    [SHOW_ALERT]: (state, action) => action.payload,
    [HIDE_ALERT]: (state, action) => null,
    DEFAULT: state => state
}

export const AlertReducer = (state, action) => {
    const handler = handlers[action.types] || handlers.DEFAULT;
    return handler(state, action)
}

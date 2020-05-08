import { INCREMENT_BUTTON, DECREMENT_BUTTON, SHOW_NOTIFICATION, HIDE_NOTIFICATION } from "./actionTypes"

const initialState = {
    counter: 0
};
export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_BUTTON:
            return {counter:state.counter + 1}
        case DECREMENT_BUTTON:
            return  {counter:state.counter - 1}
        default:
            return state
    }
}


export const notificationsReducer = (state = { showNotification: false, notificationText: "" }, action) => {
    switch (action.type) {
        case SHOW_NOTIFICATION:
            return { state, showNotification: true, notificationText: action.payload }
        case HIDE_NOTIFICATION:
            return { ...state, showNotification: false, notificationText: "" };
        default:
            return state
    }
}

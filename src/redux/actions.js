import { INCREMENT_BUTTON, DECREMENT_BUTTON, SHOW_NOTIFICATION, HIDE_NOTIFICATION } from "./actionTypes"

export const incrementButton = () => {
    return (dispatch) => {
        dispatch({
            type: INCREMENT_BUTTON,

        })
        dispatch(showNotification(`increment added`))
    }
}


export const decrementButton = () => {
    return (dispatch) => {
        dispatch({
            type: DECREMENT_BUTTON,

        })
        dispatch(showNotification(`decrement added`))
    }

}
export const showNotification = (text) => {
    return (dispatch) => {
        dispatch({
            type: SHOW_NOTIFICATION,
            payload: text
        })
        setTimeout(() => {
            dispatch(hideNotification())
        }, 500);
    }
}

export const hideNotification = () => {
    return {
        type: HIDE_NOTIFICATION
    }
}
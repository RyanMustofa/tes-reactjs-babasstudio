export const PRESS_BUTTON = 'PRESS_BUTTON'
export const PRESS_EQUALS = 'PRESS_EQUALS'
export const PRESS_RESET = 'PRESS_RESET'
export const SELECT_HISTORY = 'SELECT_HISTORY'
export const CLEAR_HISTORY = 'CLEAR_HISTORY'

export const pressButton = (value) => {
    console.log('press_button: ',value)
    return {
        type: PRESS_BUTTON,
        value
    }
}
export const pressEqual = () => {
    console.log('press_button: equal')
    return {
        type: PRESS_EQUALS
    }
}
export const pressReset = () => {
    console.log('press_button: reset')
    return {
        type: PRESS_RESET
    }
}
export const selectHistory = (id) => {
    console.log('select history: ',id)
    return {
        type: SELECT_HISTORY,
        id
    }
}
export const clearHistory = () => {
    console.log('clear history')
    return {
        type: CLEAR_HISTORY
    }
}

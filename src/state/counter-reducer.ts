export type StateType = {
    min: number
    max: number
    count: number
    flag: boolean
}

const initialState: StateType = {
    min: 0,
    max: 5,
    count: 0,
    flag: false,
};

initialState.count = initialState.min;

export const counterReducer = (state: StateType = initialState, action: ActionType): StateType => {
    switch (action.type) {
        case "INCREMENT-COUNTER": {
            return {...state, count: state.count + 1}
        }
        case "RESET-COUNTER": {
            return {...state, count: state.count = state.min}
        }
        case "MAX-INPUT-VALUE": {
            return {...state, max: state.max = action.payload.value, flag: state.flag = true}
        }
        case "MIN-INPUT-VALUE": {
            return {...state, min: state.min = action.payload.value, flag: state.flag = true}
        }
        case "SET-SETTING": {
            return {...state, count: state.count = state.min, flag: state.flag = false}
        }
        default:
            return state
    }
}

export type ActionType =
    IncCounterActionType
    | ResetCounterActionType
    | MaxInputValueActionType
    | MinInputValueActionType
    | SetSettingActionType

export type IncCounterActionType = ReturnType<typeof incCounterAC>
export type ResetCounterActionType = ReturnType<typeof resetCounterAC>
export type MaxInputValueActionType = ReturnType<typeof maxInputValueAC>
export type MinInputValueActionType = ReturnType<typeof minInputValueAC>
export type SetSettingActionType = ReturnType<typeof setSettingAC>

export const incCounterAC = () => {
    return {
        type: "INCREMENT-COUNTER"
    } as const
}
export const resetCounterAC = () => {
    return {
        type: "RESET-COUNTER"
    } as const
}
export const maxInputValueAC = (value: number) => {
    return {
        type: "MAX-INPUT-VALUE",
        payload: {
            value
        }
    } as const
}
export const minInputValueAC = (value: number) => {
    return {
        type: "MIN-INPUT-VALUE",
        payload: {
            value
        }
    } as const
}
export const setSettingAC = () => {
    return {
        type: "SET-SETTING"
    } as const
}
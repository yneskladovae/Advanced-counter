import {combineReducers, legacy_createStore as createStore} from "redux";
import {counterReducer} from "./counter-reducer";

const rootReducer = combineReducers({
    counter: counterReducer
})

export type AppRootState = ReturnType<typeof rootReducer>

let preloadedState;
const persistedValueString = localStorage.getItem('app-state')
if (persistedValueString) {
    preloadedState = JSON.parse(persistedValueString)
}
export const store = createStore(rootReducer, preloadedState)

store.subscribe(() => {
    localStorage.setItem('app-state', JSON.stringify(store.getState()))
})
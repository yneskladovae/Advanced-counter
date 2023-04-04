import React, {ChangeEvent} from 'react';
import './App.css';
import {CounterSetting} from "./components/CounterSetting/CounterSetting";
import {Counter} from "./components/Counter/Counter";
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "./state/store";
import {
    incCounterAC,
    maxInputValueAC,
    minInputValueAC,
    resetCounterAC,
    setSettingAC,
    StateType
} from "./state/counter-reducer";

function App() {
    const state = useSelector<AppRootState, StateType>(state => state.counter)
    const dispatch = useDispatch()

    const incDisabled = state.count === state.max;
    const resetDisabled = state.count === state.min;
    const setDisabled = state.min >= state.max || state.min < 0 || state.max < 0;
    const styleForMaxValueInput = state.max <= state.min || state.max <= 0;
    const styleForMinValueInput = state.min >= state.max || state.min < 0;

    const incCounter = () => {
        dispatch(incCounterAC());
    }

    const resetCounter = () => {
        dispatch(resetCounterAC());
    }

    const maxInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(maxInputValueAC(+e.currentTarget.value));
    }

    const minInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(minInputValueAC(+e.currentTarget.value));
    }

    const setSetting = () => {
        dispatch(setSettingAC());
    }

    return (
        <div className="app-container">
            <CounterSetting
                min={state.min}
                max={state.max}
                setSetting={setSetting}
                setDisabled={setDisabled}
                styleForMaxValueInput={styleForMaxValueInput}
                styleForMinValueInput={styleForMinValueInput}
                maxInputValue={maxInputValue}
                minInputValue={minInputValue}
            />
            <Counter
                incDisabled={incDisabled}
                resetDisabled={resetDisabled}
                setDisabled={setDisabled}
                incCounter={incCounter}
                resetCounter={resetCounter}
                maxValue={state.max}
                count={state.count}
                flag={state.flag}
                min={state.min}
            />
        </div>
    );
}

export default App;
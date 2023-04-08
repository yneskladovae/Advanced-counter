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
    setSettingAC, StateType,
    // StateType
} from "./state/counter-reducer";

function App() {
    const state = useSelector<AppRootState, StateType>(state => state.counter)
    const isIncDisabled = state.count === state.max;
    const isResetDisabled = state.count === state.min;
    const setDisabled = state.min >= state.max || state.min < 0 || state.max < 0;
    const styleForMaxValueInput = state.max <= state.min || state.max <= 0;
    const styleForMinValueInput = state.min >= state.max || state.min < 0;

    return (
        <div className="app-container">
            <CounterSetting
                min={state.min}
                max={state.max}
                setDisabled={setDisabled}
                styleForMaxValueInput={styleForMaxValueInput}
                styleForMinValueInput={styleForMinValueInput}
            />
            <Counter
                incDisabled={isIncDisabled}
                resetDisabled={isResetDisabled}
                setDisabled={setDisabled}
                max={state.max}
                count={state.count}
                flag={state.flag}
                min={state.min}
            />
        </div>
    );
}

export default App;
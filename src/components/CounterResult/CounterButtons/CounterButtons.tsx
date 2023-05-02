import React, {FC} from 'react';
import {SuperButton} from "../../SuperButton/SuperButton";
import {incCounterAC, resetCounterAC} from "../../../state/counter-reducer";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../../hooks/useAppSelector";

type CounterButtonsType = {}

export const CounterButtons: FC<CounterButtonsType> = ({}) => {
    const state = useAppSelector(state => state.counter)
    const dispatch = useDispatch()
    const isIncDisabled = state.count === state.max;
    const isResetDisabled = state.count === state.min;

    const incCounterHandler = () => {
        dispatch(incCounterAC());
    }

    const resetCounterHandler = () => {
        dispatch(resetCounterAC());
    }

    return (
        <div className={"counter-btns"}>
            <SuperButton disabled={isIncDisabled || state.flag} callBack={incCounterHandler}>inc</SuperButton>
            <SuperButton disabled={isResetDisabled || state.flag} callBack={resetCounterHandler}>reset</SuperButton>
        </div>
    );
};
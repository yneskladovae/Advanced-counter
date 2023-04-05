import React from 'react';
import {SuperButton} from "../../SuperButton/SuperButton";
import {incCounterAC, resetCounterAC} from "../../../state/counter-reducer";
import {useDispatch} from "react-redux";

type CounterButtonsType = {
    incDisabled: boolean
    resetDisabled: boolean
    flag: boolean
}

export const CounterButtons: React.FC<CounterButtonsType> = ({ incDisabled, resetDisabled, flag}) => {

    const dispatch = useDispatch()

    const incCounterHandler = () => {
        dispatch(incCounterAC());
    }

    const resetCounterHandler = () => {
        dispatch(resetCounterAC());
    }

    return (
        <div className={"counter-btns"}>
            <SuperButton disabled={incDisabled || flag} callBack={incCounterHandler}>inc</SuperButton>
            <SuperButton disabled={resetDisabled || flag} callBack={resetCounterHandler}>reset</SuperButton>
        </div>
    );
};
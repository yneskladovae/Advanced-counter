import React from 'react';
import {SuperButton} from "../../SuperButton/SuperButton";

type CounterButtonsType = {
    incCounter: () => void
    resetCounter: () => void
    incDisabled: boolean
    resetDisabled: boolean
    flag: boolean
}

export const CounterButtons: React.FC<CounterButtonsType> = ({incCounter, resetCounter, incDisabled, resetDisabled, flag}) => {
    return (
        <div className={"counter-btns"}>
            <SuperButton disabled={incDisabled || flag} callBack={incCounter}>inc</SuperButton>
            <SuperButton disabled={resetDisabled || flag} callBack={resetCounter}>reset</SuperButton>
        </div>
    );
};
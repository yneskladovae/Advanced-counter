import React from 'react';
import {CounterButtons} from "./CounterButtons/CounterButtons";
import {CounterTable} from "./CounterTable/CounterTable";

type CounterPropsType = {
    incDisabled: boolean
    resetDisabled: boolean
    incCounter: () => void
    resetCounter: () => void
    maxValue: number
    count: number
    flag: boolean
    min: number
    setDisabled: boolean
}

export const Counter: React.FC<CounterPropsType> = ({
                                                        incDisabled,
                                                        resetCounter,
                                                        incCounter,
                                                        resetDisabled,
                                                        maxValue,
                                                        count,
                                                        flag,
                                                        min,
                                                        setDisabled
                                                    }) => {
    return (
        <div className="counter-container">
            <CounterTable count={count} maxValue={maxValue} flag={flag} min={min} setDisabled={setDisabled}/>
            <CounterButtons
                resetDisabled={resetDisabled}
                incCounter={incCounter}
                resetCounter={resetCounter}
                incDisabled={incDisabled}
                flag={flag}
            />
        </div>
    );
};
import React from 'react';
import {CounterButtons} from "./CounterButtons/CounterButtons";
import {CounterTable} from "./CounterTable/CounterTable";

type CounterPropsType = {
    incDisabled: boolean
    resetDisabled: boolean
    max: number
    count: number
    flag: boolean
    min: number
    setDisabled: boolean
}

export const Counter: React.FC<CounterPropsType> = ({
                                                        incDisabled,
                                                        resetDisabled,
                                                        max,
                                                        count,
                                                        flag,
                                                        min,
                                                        setDisabled
                                                    }) => {

    return (
        <div className="counter-container">
            <CounterTable count={count} max={max} flag={flag} min={min} setDisabled={setDisabled}/>
            <CounterButtons
                resetDisabled={resetDisabled}
                incDisabled={incDisabled}
                flag={flag}
            />
        </div>
    );
};
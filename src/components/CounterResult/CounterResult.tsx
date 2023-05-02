import React, {FC} from 'react';
import {CounterButtons} from "./CounterButtons/CounterButtons";
import {CounterTable} from "./CounterTable/CounterTable";

type CounterPropsType = {}

export const CounterResult: FC<CounterPropsType> = ({}) => {
    return (
        <div className="counter-container">
            <CounterTable/>
            <CounterButtons/>
        </div>
    );
};
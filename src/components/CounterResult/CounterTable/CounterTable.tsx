import React, {FC} from 'react';
import {useAppSelector} from "../../../hooks/useAppSelector";

type CounterTableType = {}

export const CounterTable: FC<CounterTableType> = ({}) => {
    const state = useAppSelector(state => state.counter)
    const setDisabled = state.min >= state.max || state.min < 0 || state.max < 0;
    const addedClassToMaxValue = state.count === state.max ? "max-value" : "";
    const whatToShowOnTable = setDisabled
                              ? <div className={"count-err"}>Error</div>
                              : state.flag
                              ? <div className={"count-set"}>Enter values and press 'set'!</div>
                              : <div className={`count-num ${addedClassToMaxValue} `}>{state.count}</div>;
    return (
        <div className={"counter-table"}>
            {whatToShowOnTable}
        </div>
    );
};
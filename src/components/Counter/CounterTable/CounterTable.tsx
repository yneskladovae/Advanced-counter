import React from 'react';

type CounterTableType = {
    count: number
    maxValue: number
    flag: boolean
    min: number
    setDisabled: boolean
}

export const CounterTable: React.FC<CounterTableType> = ({count, maxValue, flag, min, setDisabled}) => {
    const addedClassToMaxValue = count === maxValue ? "counter-table max-value" : "counter-table";
    const whatToShowOnTable = setDisabled ? <div className={"count-err"}>Error</div> :
                              flag ? <div className={"count-set"}>Enter values and press 'set'!</div>
                              : <div className={"count-num"}>{count}</div>;

    return (
        <div className={addedClassToMaxValue}>
            {whatToShowOnTable}
        </div>
    );
};
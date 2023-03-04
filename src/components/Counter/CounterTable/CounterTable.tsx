import React from 'react';

type CounterTableType = {
    count: number
    maxValue: number
    flag: boolean
    min: number
}

export const CounterTable: React.FC<CounterTableType> = ({count, maxValue, flag, min}) => {
    const addedClassToMaxValue = count === maxValue ? "counter-table max-value" : "counter-table";

    if (min < 0 || maxValue <= min) {
        return <div className={"counter-table"}>
            <div className={"count-err"}>ERROR</div>
        </div>
    }

    if (flag) {
        return <div className={"counter-table"}>
            <div className={"count-set"}>Enter values and press 'set'!</div>
        </div>
    }

    return (
        <div className={addedClassToMaxValue}>
            <div className={"count-num"}>{count}</div>
            {/*{flag ? "Enter values and press 'set'!" : <div className={"count-num"}>{count}</div>}*/}
        </div>
    );
};
import React from 'react';

type CounterTableType = {
    count: number
    max: number
    flag: boolean
    min: number
    setDisabled: boolean
}

export const CounterTable: React.FC<CounterTableType> = ({count, max, flag, min, setDisabled}) => {
    const addedClassToMaxValue = count === max ? "max-value" : "";
    const whatToShowOnTable = setDisabled
                              ? <div className={"count-err"}>Error</div>
                              : flag
                              ? <div className={"count-set"}>Enter values and press 'set'!</div>
                              : <div className={`count-num ${addedClassToMaxValue} `}>{count}</div>;
    return (
        <div className={"counter-table"}>
            {whatToShowOnTable}
        </div>
    );
};
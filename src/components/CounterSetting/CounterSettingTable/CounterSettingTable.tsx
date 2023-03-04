import React, {ChangeEvent, useState} from 'react';

type CounterSettingTableType = {
    min: number
    max: number
    styleForMinValueInput: boolean
    styleForMaxValueInput: boolean
    maxInputValue: (e: ChangeEvent<HTMLInputElement>) => void
    minInputValue: (e: ChangeEvent<HTMLInputElement>) => void
}

export const CounterSettingTable: React.FC<CounterSettingTableType> = ({
                                                                           min,
                                                                           max,
                                                                           styleForMinValueInput,
                                                                           styleForMaxValueInput,
                                                                           minInputValue,
                                                                           maxInputValue
                                                                       }) => {
    return (
        <div className="counter-setting-table">
            <div>
                <div className="setting-table-item">
                    <label>max value:</label>
                    <input className={`set-input ${styleForMaxValueInput ? "err" : ""} `} value={max}
                           onChange={maxInputValue} type={"number"}/>
                </div>
                <div className="setting-table-item">
                    <label>min value:</label>
                    <input className={`set-input ${styleForMinValueInput ? "err" : ""} `} value={min}
                           onChange={minInputValue} type={"number"}/>
                </div>
            </div>
        </div>
    );
};
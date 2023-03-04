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
    const styleForStart = `set-input ${styleForMinValueInput ? "err" : ""}`;
    const styleForMaxValue = `set-input ${styleForMaxValueInput ? "err" : ""}`;
    return (
        <div className="counter-setting-table">
            <div>
                <div className="setting-table-item">
                    <label>max value:</label>
                    <input className={styleForMaxValue} value={max}
                           onChange={maxInputValue} type={"number"}/>
                </div>
                <div className="setting-table-item">
                    <label>min value:</label>
                    <input className={styleForStart} value={min}
                           onChange={minInputValue} type={"number"}/>
                </div>
            </div>
        </div>
    );
};
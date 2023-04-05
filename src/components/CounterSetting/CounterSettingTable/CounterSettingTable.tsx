import React, {ChangeEvent, useState} from 'react';
import {maxInputValueAC, minInputValueAC, setSettingAC, StateType} from "../../../state/counter-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "../../../state/store";

type CounterSettingTableType = {
    min: number
    max: number
    styleForMinValueInput: boolean
    styleForMaxValueInput: boolean
}

export const CounterSettingTable: React.FC<CounterSettingTableType> = ({
                                                                           min,
                                                                           max,
                                                                           styleForMinValueInput,
                                                                           styleForMaxValueInput,
                                                                       }) => {
    const styleForStart = `set-input ${styleForMinValueInput ? "err" : ""}`;
    const styleForMaxValue = `set-input ${styleForMaxValueInput ? "err" : ""}`;

    const dispatch = useDispatch()

    const maxInputValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(maxInputValueAC(+e.currentTarget.value));
    }

    const minInputValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(minInputValueAC(+e.currentTarget.value));
    }

    return (
        <div className="counter-setting-table">
            <div>
                <div className="setting-table-item">
                    <label>max value:</label>
                    <input className={styleForMaxValue} value={(max).toString()}
                           onChange={maxInputValueHandler} type={"number"}/>
                </div>
                <div className="setting-table-item">
                    <label>min value:</label>
                    <input className={styleForStart} value={(min).toString()}
                           onChange={minInputValueHandler} type={"number"}/>
                </div>
            </div>
        </div>
    );
};
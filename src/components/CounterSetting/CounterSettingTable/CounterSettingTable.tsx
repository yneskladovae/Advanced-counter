import React, {ChangeEvent, FC} from 'react';
import {maxInputValueAC, minInputValueAC} from "../../../bll/counter-reducer";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../../hooks/useAppSelector";

type CounterSettingTableType = {}

export const CounterSettingTable: FC<CounterSettingTableType> = ({}) => {
    const state = useAppSelector(state => state.counter)
    const dispatch = useDispatch()
    const styleForMaxValueInput = state.max <= state.min || state.max <= 0;
    const styleForMinValueInput = state.min >= state.max || state.min < 0;
    const styleForStart = `set-input ${styleForMinValueInput ? "err" : ""}`;
    const styleForMaxValue = `set-input ${styleForMaxValueInput ? "err" : ""}`;

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
                    <input className={styleForMaxValue} value={(state.max).toString()}
                           onChange={maxInputValueHandler} type={"number"}/>
                </div>
                <div className="setting-table-item">
                    <label>min value:</label>
                    <input className={styleForStart} value={(state.min).toString()}
                           onChange={minInputValueHandler} type={"number"}/>
                </div>
            </div>
        </div>
    );
};
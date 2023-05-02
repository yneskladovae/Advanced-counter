import React, {ChangeEvent, FC} from 'react';
import {CounterSettingTable} from "./CounterSettingTable/CounterSettingTable";
import {CounterSettingButton} from "./CounterSettingButton/CounterSettingButton";

type CounterSettingPropsType = {}

export const CounterSetting: FC<CounterSettingPropsType> = ({}) => {
    return (
        <div className="counter-container">
            <CounterSettingTable/>
            <CounterSettingButton/>
        </div>
    );
};
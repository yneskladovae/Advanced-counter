import React, {ChangeEvent} from 'react';
import {CounterSettingTable} from "./CounterSettingTable/CounterSettingTable";
import {CounterSettingButton} from "./CounterSettingButton/CounterSettingButton";

type CounterSettingPropsType = {
    min: number
    max: number
    setDisabled: boolean
    styleForMinValueInput: boolean
    styleForMaxValueInput: boolean
}

export const CounterSetting: React.FC<CounterSettingPropsType> = ({
                                                                      min,
                                                                      max,
                                                                      setDisabled,
                                                                      styleForMinValueInput,
                                                                      styleForMaxValueInput,
                                                                  }) => {
    return (
        <div className="counter-container">
            <CounterSettingTable min={min}
                                 max={max}
                                 styleForMinValueInput={styleForMinValueInput}
                                 styleForMaxValueInput={styleForMaxValueInput}

            />
            <CounterSettingButton setDisabled={setDisabled}
            />
        </div>
    );
};
import React, {ChangeEvent} from 'react';
import {CounterSettingTable} from "./CounterSettingTable/CounterSettingTable";
import {CounterSettingButton} from "./CounterSettingButton/CounterSettingButton";

type CounterSettingPropsType = {
    min: number
    max: number
    setSetting: () => void
    setDisabled: boolean
    styleForMinValueInput: boolean
    styleForMaxValueInput: boolean
    maxInputValue: (e: ChangeEvent<HTMLInputElement>) => void
    minInputValue: (e: ChangeEvent<HTMLInputElement>) => void
}

export const CounterSetting: React.FC<CounterSettingPropsType> = ({
                                                                      min,
                                                                      max,
                                                                      setSetting,
                                                                      setDisabled,
                                                                      styleForMinValueInput,
                                                                      styleForMaxValueInput,
    maxInputValue, minInputValue
                                                                  }) => {
    return (
        <div className="counter-container">
            <CounterSettingTable min={min}
                                 max={max}
                                 styleForMinValueInput={styleForMinValueInput}
                                 styleForMaxValueInput={styleForMaxValueInput}
                                 maxInputValue={maxInputValue}
                                 minInputValue={minInputValue}

            />
            <CounterSettingButton setSetting={setSetting} setDisabled={setDisabled}
            />
        </div>
    );
};
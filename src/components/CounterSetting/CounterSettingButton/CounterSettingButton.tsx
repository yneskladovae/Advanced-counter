import React from 'react';
import {SuperButton} from "../../SuperButton/SuperButton";

type CounterSettingButtonType = {
    setSetting: () => void
    setDisabled: boolean
}

export const CounterSettingButton: React.FC<CounterSettingButtonType> = ({setSetting, setDisabled}) => {
    return (
        <div className="counter-setting-btn">
            <div>
                <SuperButton disabled={setDisabled} callBack={setSetting}>set</SuperButton>
            </div>
        </div>
    );
};
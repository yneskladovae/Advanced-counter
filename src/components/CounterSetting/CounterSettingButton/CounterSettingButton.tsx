import React from 'react';
import {SuperButton} from "../../SuperButton/SuperButton";
import {useDispatch} from "react-redux";
import {setSettingAC} from "../../../state/counter-reducer";

type CounterSettingButtonType = {
    setDisabled: boolean
}

export const CounterSettingButton: React.FC<CounterSettingButtonType> = ({setDisabled}) => {
    const dispatch = useDispatch()

    const setSettingHandler = () => {
        dispatch(setSettingAC());
    }

    return (
        <div className="counter-setting-btn">
            <div>
                <SuperButton disabled={setDisabled} callBack={setSettingHandler}>set</SuperButton>
            </div>
        </div>
    );
};
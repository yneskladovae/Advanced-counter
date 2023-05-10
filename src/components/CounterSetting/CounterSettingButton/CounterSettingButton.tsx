import React, {FC} from 'react';
import {SuperButton} from "../../SuperButton/SuperButton";
import {useDispatch} from "react-redux";
import {setSettingAC} from "../../../bll/counter-reducer";
import {useAppSelector} from "../../../hooks/useAppSelector";

type CounterSettingButtonType = {}

export const CounterSettingButton: FC<CounterSettingButtonType> = ({}) => {
    const state = useAppSelector(state => state.counter)
    const dispatch = useDispatch()
    const setDisabled = state.min >= state.max || state.min < 0 || state.max < 0;

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
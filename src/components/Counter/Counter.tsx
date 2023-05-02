import React from 'react';
import {CounterSetting} from "../CounterSetting/CounterSetting";
import {CounterResult} from "../CounterResult/CounterResult";

export const Counter = () => {
    return (
        <div className="app-container">
            <CounterSetting/>
            <CounterResult/>
        </div>
    );
};